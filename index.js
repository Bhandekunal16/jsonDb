const Application = require("./src/brain");

function application() {
  return new Application().props(
    "79676276646d63667467",
    { RAM: "6GB" },
    "phone"
  );
}

console.log(application());
