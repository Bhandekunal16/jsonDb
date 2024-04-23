const Application = require("./src/brain");

function application() {
  return new Application().read("phone");
}

console.log(application())

