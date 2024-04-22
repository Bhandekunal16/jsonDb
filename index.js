const Application = require("./src/brain");

function application() {
  return new Application().getById("6c6c7472686e6a676e62", "phone");
}

console.log(application());
