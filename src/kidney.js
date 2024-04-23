const csv = require("fast-csv");
const fs = require("fs");
const Vessel = require("./vessels");
const uuid = require("robotic.js/src/class/uuid");
const Uuid = new uuid();

class Kidney {
  readCsv(path, collection) {
    const stream = fs.createReadStream(path);
    const array = [];

    csv
      .parseStream(stream, { headers: true })
      .on("data", (data) => {
        array.push(data);
      })
      .on("end", async () => {
        console.log("CSV file successfully processed", array);

        const totalLength = array.length;
        const middleIndex = Math.floor(totalLength / 2);
        const firstPart = array.slice(0, middleIndex);
        const secondPart = array.slice(middleIndex);
        const writeToCollectionAsync = async (part) => {
          for (let index = 0; index < part.length; index++) {
            new Vessel().preCreate(collection);

            const match = new Vessel().read(collection);
            const array = [];
            const addedArray = [];

            if (match.trim() === "") {
              array.push({ id: Uuid.vectorized(), ...part[index] });
              new Vessel().write(array, collection);
            } else {
              const match = JSON.parse(new Vessel().read(collection));
              addedArray.push({ id: Uuid.vectorized(), ...part[index] });
              const finalArray = [...match, ...addedArray];
              console.log(finalArray);
              new Vessel().write(finalArray, collection);
            }
          }
        };

        await Promise.all([
          writeToCollectionAsync(firstPart),
          writeToCollectionAsync(secondPart),
        ]);
      })
      .on("error", (error) => {
        console.error("Error encountered while processing CSV:", error);
      });
  }
}

module.exports = Kidney;
