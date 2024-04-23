const uuid = require("robotic.js/src/class/uuid");
const Response = require("robotic.js/src/class/response");
const Vessel = require("./vessels");
const Heart = require("./heart");

class Brain {
  write(input, collection) {
    console.log(collection);
    try {
      new Vessel().preCreate(collection);
      const match = new Vessel().read(collection);

      console.log(match);
      const array = [];
      const addedArray = [];
      if (match.trim() === "") {
        array.push({ id: new uuid().vectorized(), ...input });
        new Vessel().write(array, collection);
      } else {
        const match = JSON.parse(new Vessel().read(collection));
        addedArray.push({ id: new uuid().vectorized(), ...input });
        const finalArray = [...match, ...addedArray];
        console.log(finalArray);
        new Vessel().write(finalArray, collection);
        return true;
      }
    } catch (error) {
      return new Response().error(error);
    }
  }

  read(collection) {
    try {
      const data = new Vessel().read(collection);
      const res = JSON.parse(data);
      const obj = { records: res, length: res.length, timestamp: new Date() };
      return obj;
    } catch (error) {
      return new Response().error(error);
    }
  }

  getById(id, collection) {
    const array = JSON.parse(new Vessel().read(collection));
    let response = [];
    for (let index = 0; index < array.length; index++) {
      array[index].id = id ? response.push(array[index]) : null;
    }
    return { records: response, timestamp: new Date() };
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
}

module.exports = Brain;
