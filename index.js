const Application = require("./src/brain");

function application() {
  return new Application().getByProperties(
    {
      id: "6e647a636774686c7873",
    },
    "phone"
  );
}

console.log(application());
