const uuid = require("robotic.js/src/class/uuid");
const Response = require("robotic.js/src/class/response");
const Vessel = require("./vessels");
const Heart = require("./heart");
const kidney = require("./kidney");
const { type } = require("os");

class Brain {
  write(input, collection) {
    try {
      const [array, addedArray] = [[], []];

      if (!input) throw new Error("parameter missing Input.");

      if (!collection) throw new Error("parameter missing collection name");

      if (typeof collection == "number" || typeof collection == "boolean")
        throw new TypeError(
          `current collection name type is ${typeof collection} expected type is string.`
        );

      new Vessel().preCreate(collection);
      const match = new Vessel().read(collection);

      if (match.trim() === "") {
        array.push({ id: new uuid().vectorized(), ...input });
        new Vessel().write(array, collection);
      } else {
        const match = JSON.parse(new Vessel().read(collection));
        addedArray.push({ id: new uuid().vectorized(), ...input });
        const finalArray = [...match, ...addedArray];
        new Vessel().write(finalArray, collection);
      }
    } catch (error) {
      return new Response().error(error);
    }
  }

  read(collection) {
    try {
      if (!collection) throw new Error("parameter missing collection name.");

      return {
        records: JSON.parse(new Vessel().read(collection)),
        length: JSON.parse(new Vessel().read(collection)).length,
        timestamp: new Date(),
      };
    } catch (error) {
      return new Response().error(error);
    }
  }

  getById(id, collection) {
    if (!id || !collection)
      throw new Error("Both 'id' and 'collection' parameters are required.");

    const array = JSON.parse(new Vessel().read(collection));
    return {
      records: array.filter((record) => record.id === id),
      timestamp: new Date(),
    };
  }

  getByProperties(Object, collection) {
    const array = JSON.parse(new Vessel().read(collection));
    return new Heart().findSimilarObject(array, Object);
  }

  edit(id, input, value, collection) {
    let array = JSON.parse(new Vessel().read(collection));
    let targetObjIndex = array.findIndex((obj) => obj.id === id);
    if (targetObjIndex !== -1) {
      array[targetObjIndex][input] = value;
      new Vessel().write(array, collection);
    } else
      return new Response().notFound("Object with specified id not found.");
  }

  props(id, newObj, collection) {
    const obj = this.getById(id, collection);
    const same = new Heart().findSimilarProperties(obj.records, newObj);
    same.forEach((key) => {
      const value = newObj[key];
      this.edit(id, key, value, collection);
    });
  }

  count(collection) {
    return { recordCount: this.read(collection).length };
  }

  async unwind(array, collection) {
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
    new kidney().readCsv(path, collection);
  }

  ExportCsv(collection) {
    const array = new Vessel().read(collection);
    new Vessel().writeCsv(JSON.parse(array), collection);
  }
}

module.exports = Brain;
