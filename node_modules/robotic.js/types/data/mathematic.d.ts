export = mathematic;
/**class that represents the mathematical operations.*/
declare class mathematic {
    /**
     * @param {number || symbol} value - equations like  1 * 1 + 2
     * @function - solve any numeric equation.
     * @returns {number} answer of the equation.*/
    algebra(value: any): number;
    /**
     * @param {Array} array - Array like  [1, 2, 3000 ....]
     * @function - Add all element addition of array operation..
     * @returns {number} returns addition of all array.*/
    arrayAddition(array: any[]): number;
    /**
     * @param {any} value - any number.
     * @function -  absolute number operation.
     * @returns - return absolute number.*/
    absolute(value: any): number;
    /**
     * @param {number} value1 - any number.
     * @param {number} value2 - any number.
     * @function -  find power operation.
     * @returns - return power number || { error , status}.*/
    power(value1: number, value2: number): string | number;
    /**
     * @param {number} value -any number.
     * @function - square root finding operation.
     * @returns - square root || { error , status}.*/
    squareRoot(value: number): number | "type error : only type number accepted.";
}
