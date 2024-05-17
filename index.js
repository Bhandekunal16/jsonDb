const Application = require("./src/brain");

function application() {
  return new Application().getById("6e776c777266636a6b6a", "bank");
}

console.log(application());
