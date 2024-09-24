const csv = require("fast-csv");
const fs = require("fs");
const Vessel = require("./vessels");
const uuid = require("robotic.js/src/class/uuid");

class Kidney {
  #Uuid;
  #vessel;

  constructor() {
    this.#Uuid = new uuid();
    this.#vessel = new Vessel();
  }

  readCsv(path, collection) {
    const stream = fs.createReadStream(path);
    const array = [];

    csv
      .parseStream(stream, { headers: true })
      .on("data", (data) => {
        array.push(data);
      })
      .on("end", async () => {
        const totalLength = array.length;
        const middleIndex = Math.floor(totalLength / 2);
        const firstPart = array.slice(0, middleIndex);
        const secondPart = array.slice(middleIndex);
        const writeToCollectionAsync = async (part) => {
          for (let index = 0; index < part.length; index++) {
            this.#vessel.preCreate(collection);
            const match = this.#vessel.read(collection);
            const array = [];
            const addedArray = [];
            if (match.trim() === "") {
              array.push({ id: this.#Uuid.vectorized(), ...part[index] });
              this.#vessel.write(array, collection);
            } else {
              const match = JSON.parse(this.#vessel.read(collection));
              addedArray.push({ id: this.#Uuid.vectorized(), ...part[index] });
              const finalArray = [...match, ...addedArray];
              this.#vessel.write(finalArray, collection);
            }
          }
        };

        await Promise.all([
          writeToCollectionAsync(firstPart),
          writeToCollectionAsync(secondPart),
        ]);
      })
      .on("error", (error) => {
        throw new Error("Error encountered while processing CSV:", error);
      });
  }
}

module.exports = Kidney;
