const [fs, path, Logger] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
];

class Maintain {
  log(value) {
    try {
      const formattedDate = `${new Date().getFullYear()}-${(
        new Date().getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`;
      const newValue = `${new Date().toLocaleString()} - [LOG] ${value}\n`;
      const [folderName, fileName] = ["../../../logs", `${formattedDate}.log`];
      const folderPath = path.join(__dirname, `${folderName}/${fileName}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("folder already present.");
      fs.writeFile(filePath, newValue, { flag: "a" }, (err) => {
        err
          ? new Logger().error("Error creating file:", err)
          : new Logger().log(
              `Message "${newValue.trim()}" appended to "${fileName}" successfully.`
            );
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = Maintain;
