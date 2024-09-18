const fs = require("fs");
const heart = require("./heart");
const [Response, Logger] = [
  require("robotic.js/src/class/response"),
  require("robotic.js/src/interface/Logger"),
];

class Vessel {
  fileName = `./db.json`;

  write(input, collection) {
    try {
      this.preCreate(collection);
      fs.writeFileSync(`./${collection}.json`, JSON.stringify(input));
      new Logger().log("your object added successfully !");
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
        new Logger().error(`Error writing CSV file at ./${collection}.csv:`, err);
      } else {
        new Logger().log(`CSV file successfully written at ${collection}`);
      }
    });
  }

  clear(collection) {
    fs.writeFile(`./${collection}.json`, "", (err) => {
      if (err) throw new Error(err);
      new Logger().log("your data will cleared successfully!");
    });
  }
}

module.exports = Vessel;
