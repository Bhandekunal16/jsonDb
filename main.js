class Core {
  application() {
    const moduleNames = ["Brain", "Heart", "Kidney", "Vessel"];
    const modulePaths = [
      "./src/brain",
      "./src/heart",
      "./src/kidney",
      "./src/vessels",
    ];

    let modules = [];
    for (let index = 0; index < moduleNames.length; index++) {
      modules.push((moduleNames[index] = require(modulePaths[index])));
    }
    return modules;
  }

  brain(method, input) {
    try {
      const Host = this.application()[0];
      return new Host()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  heart(method, input) {
    try {
      const Host = this.application()[1];
      return new Host()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  kidney(method, input) {
    try {
      const Host = this.application()[2];
      return new Host()[2][method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  vessel(method, input) {
    try {
      const Host = this.application()[2];
      return new Host[3][method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }
}

module.exports = Core;

// ** How to use this Core
// ? new Core()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
// ** console.log(new Core()["brain"]("read", ["bank"]));
