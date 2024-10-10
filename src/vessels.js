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

  async write(input, collection) {
    try {
      this.preCreate(collection);
      fs.writeFileSync(`./${collection}.bin`, await this.binary(input));
      this.#logger.log("your object added successfully !");
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  preCreate(collection) {
    try {
      console.log(collection);
      if (!fs.existsSync(`./${collection}.bin`)) {
        fs.writeFileSync(`./${collection}.bin`, this.binary([]));
      }
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  binary(data) {
    const binaryData = Buffer.from(JSON.stringify(data), "utf-8");
    return binaryData.reduce(
      (acc, byte) => acc + byte.toString(2).padStart(8, "0"),
      ""
    );
  }

  read(collection) {
    try {
      const data = fs.readFileSync(`./${collection}.bin`);
      return this.read_binary(data);
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  read_binary(data) {
    const binaryString = data.toString("utf-8");
    const textFromBinary = this.binaryToText(binaryString);
    try {
      const jsonData = JSON.parse(textFromBinary);
      return jsonData;
    } catch (error) {
      throw new Error("Failed to parse JSON from binary data.");
    }
  }

  binaryToText(binaryString) {
    let text = "";
    for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.slice(i, i + 8);
      const charCode = parseInt(byte, 2);
      text += String.fromCharCode(charCode);
    }
    return text;
  }
}

module.exports = Vessel;
