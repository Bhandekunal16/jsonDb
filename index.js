const Application = require("./src/brain");

function application() {
  return new Application().count("phone");
}

console.log(application());
