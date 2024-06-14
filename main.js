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
    try {
      const Host = this.application()[index];
      return new Host()[method](...input);
    } catch (error) {
      return new Error("invalid method : " + error);
    }
  }

  brain(method, input) {
    return this.invoke(0, method, input);
  }

  heart(method, input) {
    return this.invoke(1, method, input);
  }

  kidney(method, input) {
    return this.invoke(2, method, input);
  }

  vessel(method, input) {
    return this.invoke(3, method, input);
  }
}

module.exports = Core;

// ** How to use this Core
// ? new Core()["brain"]("getById", ["706b7a6a6c796a687473", "bank"])
// ** console.log(new Core()["brain"]("read", ["bank"]));

new Core()["brain"]("write", [{ name: "kunal" }, "information"]);
