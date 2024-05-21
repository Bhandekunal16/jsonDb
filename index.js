const Application = require("./src/brain");

function application() {
  return new Application().getById("6671707072706872677a", "bank");
}

console.log(application());
