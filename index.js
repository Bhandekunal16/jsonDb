const Application = require("./src/brain");

function application() {
  return new Application().read("bank");
}

console.log(application());
