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

  invoke(index, method, input) {
    const Host = this.application()[index];
    return new Host()[method](...input);
  }

  brain(method, input) {
    try {
      return this.invoke(0, method, input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  heart(method, input) {
    try {
      return this.invoke(1, method, input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  kidney(method, input) {
    try {
      return this.invoke(2, method, input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  vessel(method, input) {
    try {
      return this.invoke(3, method, input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }
}

module.exports = Core;

// ** How to use this Core
// ? new Core()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
// ** console.log(new Core()["brain"]("read", ["bank"]));

new Core()["brain"]("write", [{ name: "kunal" }, "information"]);
