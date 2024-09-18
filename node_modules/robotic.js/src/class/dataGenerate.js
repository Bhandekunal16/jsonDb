const TypeChecker = require("./TypeChecker");
const Type = require("../../global/global");

class DataGenerator {
  constructor() {
    this.consonants = new Type().consonants;
    this.ovals = new Type().ovals;
    this.emails = new Type().emails;
    this.error = new Type().error;
  }

  create(length, type) {
    const [checkLength, checkType] = [
      new TypeChecker().checkNumber(length),
      new TypeChecker().checkString(type),
    ];
    const lengthValue = checkLength && checkType ? length : 0;
    try {
      let value;
      switch (true) {
        case type == "name":
          value = this.generateRandomName(lengthValue);
          return value;
        case type == "mobileNo":
          value = this.generateMobileNumber(lengthValue);
          return value;
        case type == "email":
          value = this.generateRandomEmail(lengthValue);
          return value;
        default:
          break;
      }
    } catch (error) {
      return new Error(error);
    }
  }

  generateMobileNumber(length) {
    try {
      const array = [];
      for (let index = 0; index < length; index++) {
        let [name, element] = [[], ""];
        for (let j = 0; j < 10; j++) {
          element += Math.floor(Math.random() * 10);
        }
        name.push(element);
        array.push(...name);
      }
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
    }
  }

  generateRandomName(length) {
    try {
      const array = [];
      for (let index = 0; index < length; index++) {
        let [name, element] = [[], ""];
        for (let j = 1; j < 4; j++) {
          element +=
            this.consonants[Math.floor(Math.random() * 20)] +
            this.ovals[Math.floor(Math.random() * 5)];
        }
        name.push(element);
        array.push(...name);
      }
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
    }
  }

  generateRandomEmail(length) {
    try {
      let array = [];
      for (let index = 0; index < length; index++) {
        let [name, element] = [[], ""];
        for (let j = 1; j < 7; j++) {
          element += this.consonants[Math.floor(Math.random() * 20)];
        }
        name.push(element + this.emails[Math.floor(Math.random() * 4)]);
        array.push(...name);
      }
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
    }
  }

  captcha() {
    let element = "";
    for (let j = 1; j < 5; j++) {
      element +=
        this.consonants[Math.floor(Math.random() * 10)].toLocaleUpperCase() +
        this.ovals[Math.floor(Math.random() * 5)];
    }
    return element;
  }
}

module.exports = DataGenerator;
