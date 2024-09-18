const Type = require("../../global/global");

class UUID {
  randomAlphabet() {
    return new Type().consonants[
      Math.floor(Math.random() * new Type().consonants.length)
    ];
  }

  alphanumeric() {
    let array = "";
    for (let index = 0; index < 4; index++) {
      const uuid =
        this.randomAlphabet().toLocaleUpperCase() +
        this.randomAlphabet() +
        Math.floor(Math.random() * 100);
      array += uuid;
    }
    return array;
  }

  numeric(length) {
    let number = "";
    let arrayLength = length == undefined ? 10 : length;
    for (let index = 0; index < arrayLength; index++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  }

  vectorized() {
    let value = "";
    for (let index = 0; index < 10; index++) {
      const string = this.randomAlphabet();
      value += string;
    }
    const buffer = Buffer.from(value, "utf-8");
    return buffer.toString("hex");
  }
}

module.exports = UUID;
