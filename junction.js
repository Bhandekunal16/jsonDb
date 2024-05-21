const [Brain, Heart, Kidney, Vessel] = [
  require("./src/brain"),
  require("./src/heart"),
  require("./src/kidney"),
  require("./src/vessels"),
];

class Junction {
  constructor() {
    this.obj = {
      brain: Brain,
      heart: Heart,
      kidney: Kidney,
      vessel: Vessel,
    };
  }

  brain(method, input) {
    return input.length == 1
      ? new Brain()[method](input[0])
      : new Brain()[method](input[0], input[1]);
  }

  heart(method, input) {
    return input.length == 1
      ? new Heart()[method](input[0])
      : new Heart()[method](input[0], input[1]);
  }

  kidney(method, input) {
    return input.length == 1
      ? new Kidney()[method](input[0])
      : new Kidney()[method](input[0], input[1]);
  }

  vessel(method, input) {
    return input.length == 1
      ? new Vessel()[method](input[0])
      : new Vessel()[method](input[0], input[1]);
  }
}

module.exports = Junction;

// ** How to use this junction
// ? new Junction()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
// ** console.log(new Junction()["brain"]("read", ["bank"]));
