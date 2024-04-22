const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

/**Class representing javascript file creating with class operation.*/
class Map {
  /**
   * @function create a dummy javascript file that contain class.
   * @param {string} name - The name for the file.
   * @returns {string|undefined} The name of the created file's or undefined if there's an error.*/
  create(name) {
    const trimmed = name.split(".")[0];
    const fileName = `${trimmed}.js`;
    const fileContent = `
    class ${trimmed} {}
    module.exports = ${trimmed};
  `;
    const folderName = "../../../src";

    try {
      const folderPath = path.join(__dirname, `${folderName}`);
      const filePath = path.join(folderPath, fileName);

      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : logger.log("folder already present.");

      fs.writeFile(filePath, fileContent, (err) => {
        err
          ? logger.error("Error creating file:", err)
          : logger.log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
}

module.exports = Map;
