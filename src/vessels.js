const fs = require("fs");
const Heart = require("./heart");
const [Response, Logger] = [
  require("robotic.js/src/class/response"),
  require("robotic.js/src/interface/Logger"),
];

class Vessel {
  #heart;
  #response;
  #logger;

  constructor() {
    this.#heart = new Heart();
    this.#response = new Response();
    this.#logger = new Logger();
  }

  write(input, collection) {
    try {
      this.preCreate(collection);
      fs.writeFileSync(`./${collection}.json`, JSON.stringify(input));
      this.#logger.log("your object added successfully !");
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  preCreate(collection) {
    try {
      if (!fs.existsSync(`./${collection}.json`)) {
        fs.writeFileSync(`./${collection}.json`, "[]");
      }
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  read(collection) {
    try {
      return fs.readFileSync(`./${collection}.json`, "utf8");
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  writeCsv(arrayOfObjects, collection) {
    const csvData = this.#heart.convertArrayOfObjectsToCsv(arrayOfObjects);
    fs.writeFile(`./${collection}.csv`, csvData, "utf8", (err) => {
      if (err) {
        this.#logger.error(
          `Error writing CSV file at ./${collection}.csv:`,
          err
        );
      } else {
        this.#logger.log(`CSV file successfully written at ${collection}`);
      }
    });
  }

  clear(collection) {
    fs.writeFile(`./${collection}.json`, "", (err) => {
      if (err) throw new Error(err);
      this.#logger.log("your data will cleared successfully!");
    });
  }
}

module.exports = Vessel;
