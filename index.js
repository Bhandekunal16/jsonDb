const Application = require("./src/brain");

function application() {
  return new Application().ImportCsv("./bank.csv", "phone");
}

application();
