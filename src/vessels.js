const fs = require("fs");
const Response = require("robotic.js/src/class/response");
const heart = require("./heart");

class Vessel {
  fileName = `./db.json`;

  write(input, collection) {
    try {
      this.preCreate(collection);
      fs.writeFileSync(`./${collection}.json`, JSON.stringify(input));
    } catch (error) {
      return new Response().error(error);
    }
  }

  preCreate(collection) {
    try {
      if (!fs.existsSync(`./${collection}.json`)) {
        fs.writeFileSync(`./${collection}.json`, "[]");
      }
    } catch (error) {
      return new Response().error(error);
    }
  }

  read(collection) {
    try {
      return fs.readFileSync(`./${collection}.json`, "utf8");
    } catch (error) {
      return new Response().error(error);
    }
  }

  writeCsv(arrayOfObjects, collection) {
    const csvData = new heart().convertArrayOfObjectsToCsv(arrayOfObjects);
    fs.writeFile(`./${collection}.csv`, csvData, "utf8", (err) => {
      if (err) {
        console.error(`Error writing CSV file at ./${collection}.csv:`, err);
      } else {
        console.log(`CSV file successfully written at ${collection}`);
      }
    });
  }
}

module.exports = Vessel;
