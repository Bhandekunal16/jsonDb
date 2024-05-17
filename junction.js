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
    if (input.length == 1) {
      return new Heart()[method](input[0]);
    } else {
      return new Heart()[method](input[0], input[1]);
    }
  }

  kidney(method, input) {
    if (input.length == 1) {
      return new Kidney()[method](input[0]);
    } else {
      return new Kidney()[method](input[0], input[1]);
    }
  }

  vessel(method, input) {
    if (input.length == 1) {
      return new Vessel()[method](input[0]);
    } else {
      return new Vessel()[method](input[0], input[1]);
    }
  }
}

module.exports = Junction;

console.log(
  new Junction()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
);
