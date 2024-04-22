const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

class Maintain {
  log(value) {
    try {
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

      const newValue = `${new Date().toLocaleString()} - [LOG] ${value}\n`;
      const folderName = "../../../logs";
      const fileName = `${formattedDate}.log`;

      const folderPath = path.join(__dirname, `${folderName}/${fileName}`);
      const filePath = path.join(folderPath, fileName);

      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : logger.log("folder already present.");

      fs.writeFile(filePath, newValue, { flag: "a" }, (err) => {
        err
          ? logger.error("Error creating file:", err)
          : logger.log(
              `Message "${newValue.trim()}" appended to "${fileName}" successfully.`
            );
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = Maintain;
