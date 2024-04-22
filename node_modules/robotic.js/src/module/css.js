const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

/** Class representing CSS file operations.*/
class Css {
  fileContent = `body, h1, p { margin: 0; padding: 0;}
  body { font-family: 'Arial', sans-serif; background-color: #f0f0f0; color: #333; }
  .container { width: 80%; margin: 0 auto; }
  header { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}
  nav { background-color: #3498db; padding: 1em;}
  nav a { color: #ecf0f1; text-decoration: none; margin-right: 1em; }
  main { padding: 1em; }
  footer { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}`;

  /**
   * @function Creates a CSS file with the specified name.
   * @param {string} name - The name of the file.
   * @returns {string|undefined} The name of the created file or undefined if there's an error.
   */
  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      } else {
        logger.log("Folder already present.");
      }

      fs.writeFile(filePath, this.fileContent, (err) => {
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

module.exports = Css;
