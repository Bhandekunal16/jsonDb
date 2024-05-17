const Application = require("./src/brain");

function application() {
  return new Application().getByProperties(
    { id: "626e646e6b626678736a" },
    "bank"
  );
}

console.log(application());
