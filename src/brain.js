const [uuid, Response] = [
  require("robotic.js/src/class/uuid"),
  require("robotic.js/src/class/response"),
];

const [Vessel, Heart, kidney] = [
  require("./vessels"),
  require("./heart"),
  require("./kidney"),
];

class Brain {
  #vessel;
  #heart;
  #kidney;
  #uuid;
  #response;

  constructor() {
    this.#vessel = new Vessel();
    this.#heart = new Heart();
    this.#kidney = new kidney();
    this.#uuid = new uuid();
    this.#response = new Response();
  }

  write(input, collection) {
    try {
      const [array, addedArray] = [[], []];
      if (!input) throw new Error("parameter missing Input.");
      if (!collection) throw new Error("parameter missing collection name");
      if (typeof collection == "number" || typeof collection == "boolean")
        throw new TypeError(
          `current collection name type is ${typeof collection} expected type is string.`
        );
      this.#vessel.preCreate(collection);
      const match = this.#vessel.read(collection);
      if (match.trim() === "") {
        array.push({ id: this.#uuid.vectorized(), ...input });
        this.#vessel.write(array, collection);
      } else {
        const match = JSON.parse(this.#vessel.read(collection));
        addedArray.push({ id: this.#uuid.vectorized(), ...input });
        const finalArray = [...match, ...addedArray];
        this.#vessel.write(finalArray, collection);
      }
    } catch (error) {
      return this.#response.error(error);
    }
  }

  read(collection) {
    try {
      if (!collection) throw new Error("parameter missing collection name.");
      return {
        records: JSON.parse(this.#vessel.read(collection)),
        length: JSON.parse(this.#vessel.read(collection)).length,
        timestamp: new Date(),
      };
    } catch (error) {
      return this.#response.error(error);
    }
  }

  getById(id, collection) {
    if (!id || !collection)
      throw new Error("Both 'id' and 'collection' parameters are required.");
    const array = JSON.parse(this.#vessel.read(collection));
    return {
      records: array.filter((record) => record.id === id),
      timestamp: new Date(),
    };
  }

  getByProperties(Object, collection) {
    if (!Object || !collection)
      throw new Error(`object, collection this parameter are required.`);
    const array = JSON.parse(this.#vessel.read(collection));
    return this.#heart.findSimilarObject(array, Object);
  }

  edit(id, input, value, collection) {
    if (!id || !input || !value || !collection)
      throw new Error("id, input, value, collection parameter are  required");
    let array = JSON.parse(this.#vessel.read(collection));
    let targetObjIndex = array.findIndex((obj) => obj.id === id);
    if (targetObjIndex !== -1) {
      array[targetObjIndex][input] = value;
      this.#vessel.write(array, collection);
    } else
      return this.#response.notFound("Object with specified id not found.");
  }

  props(id, newObj, collection) {
    if (!id || !newObj || !collection)
      throw new Error(`id, newObj, collection parameter are required`);
    const obj = this.getById(id, collection);
    const same = this.#heart.findSimilarProperties(obj.records[0], newObj);
    same.forEach((key) => {
      const value = newObj[key];
      this.edit(id, key, value, collection);
    });
  }

  count(collection) {
    if (!collection) throw new Error("collection name parameter is missing");
    return { recordCount: this.read(collection).length };
  }

  async unwind(array, collection) {
    if (!array || !collection)
      throw new Error("array & collection this parameter are required.");
    const totalLength = array.length;
    const middleIndex = Math.floor(totalLength / 2);
    const firstPart = array.slice(0, middleIndex);
    const secondPart = array.slice(middleIndex);
    const writeToCollectionAsync = async (part) => {
      for (let index = 0; index < part.length; index++) {
        await this.write(part[index], collection);
      }
    };

    await Promise.all([
      writeToCollectionAsync(firstPart),
      writeToCollectionAsync(secondPart),
    ]);
  }

  ImportCsv(path, collection) {
    if (!path || !collection)
      throw new Error("path & collection this parameter are required.");
    this.#kidney.readCsv(path, collection);
  }

  ExportCsv(collection) {
    if (!collection)
      throw new Error("collection name is parameter is require.");
    const array = this.#vessel.read(collection);
    this.#vessel.writeCsv(JSON.parse(array), collection);
  }

  truncate(collection) {
    try {
      this.#vessel.clear(collection);
    } catch (error) {
      return new Error(error);
    }
  }

  delete(collection, id) {
    try {
      const read = JSON.parse(this.#vessel.read(collection));
      const remove = read.filter((obj) => obj.id !== id);
      this.#vessel.write(remove, collection);
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = Brain;
