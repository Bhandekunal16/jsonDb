const Application = require("./src/brain");

function application() {
  return new Application().ExportCsv("bank");
}

console.log(application());
