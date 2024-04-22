const TypeChecker = require("../class/TypeChecker");
const type = new TypeChecker();

/**class that represents the mathematical operations.*/
class mathematic {
  /**
   * @param {number || symbol} value - equations like  1 * 1 + 2
   * @function - solve any numeric equation.
   * @returns {number} answer of the equation.*/
  algebra(value) {
    return eval(value);
  }

  /**
   * @param {Array} array - Array like  [1, 2, 3000 ....]
   * @function - Add all element addition of array operation..
   * @returns {number} returns addition of all array.*/
  arrayAddition(array) {
    const value = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue * 1;
    }, 0);
    return value;
  }

  /**
   * @param {any} value - any number.
   * @function -  absolute number operation.
   * @returns - return absolute number.*/
  absolute(value) {
    return Math.abs(value);
  }

  /**
   * @param {number} value1 - any number.
   * @param {number} value2 - any number.
   * @function -  find power operation.
   * @returns - return power number || { error , status}.*/
  power(value1, value2) {
    const number = type.checkNumber(value1);
    const number2 = type.checkNumber(value2);
    let array = [value1, value2];

    return number && number2
      ? Math.pow(value1, value2)
      : `type error : only type number accepted wrong type at position ${
          number ? "" : array.findIndex((element) => element === value1) + 1
        } ${
          number2 ? "" : array.findIndex((element) => element === value2) + 1
        }`;
  }

  /**
   * @param {number} value -any number.
   * @function - square root finding operation.
   * @returns - square root || { error , status}.*/
  squareRoot(value) {
    const number = type.checkNumber(value);
    return number
      ? Math.sqrt(value)
      : `type error : only type number accepted.`;
  }
}

module.exports = mathematic;
