const Application = require("./src/brain");

function application() {
  return new Application().ExportCsv("phone");
}

application();
