const [Brain, Heart, Kidney, Vessel] = [
  require("./src/brain"),
  require("./src/heart"),
  require("./src/kidney"),
  require("./src/vessels"),
];

class Core {
  brain(method, input) {
    try {
      return new Brain()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  heart(method, input) {
    try {
      return new Heart()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  kidney(method, input) {
    try {
      return new Kidney()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  vessel(method, input) {
    try {
      return new Vessel()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }
}

module.exports = Core;

// ** How to use this Core
// ? new Core()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
// ** console.log(new Core()["brain"]("read", ["bank"]));
