const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

/**Class representing binary file operations.*/
class Binary {
  fileContent = "1000001";

  /**
   * @function create a dummy bin file.
   * @param {string} name - The name of the file.
   * @returns {string|undefined} The name of the created file or undefined if there's an error.
   */
  create(name) {
    const fileName = `${name}`;
    const trimmed = name.split(".")[0];
    const folderName = "../../../src";

    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      } else {
        logger.log("Folder already present.");
      }

      fs.writeFile(filePath, this.fileContent, (err) => {
        if (err) {
          logger.error("Error creating file:", err);
          return undefined;
        } else {
          logger.log(`File "${fileName}" created successfully.`);
          return fileName;
        }
      });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
}

module.exports = Binary;
