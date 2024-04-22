const fs = require("fs");
const Response = require("robotic.js/src/class/response");

class Vessel {
  fileName = `./db.json`;

  write(input, collection) {
    try {
      this.preCreate();
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
}

module.exports = Vessel;
