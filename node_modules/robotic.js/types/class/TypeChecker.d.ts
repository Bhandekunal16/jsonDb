export = TypeChecker;
/** class represent the type checking operation */
declare class TypeChecker {
    /**
     * @function - check value typing is correct or not.
     * @param {any} value - value to be checked
     * @returns {boolean} true if it's of same type, otherwise false
     */
    checkNumber(value: any): boolean;
    /**
     * @function - check value typing is correct or not.
     * @param {any} value - value to be checked
     * @returns {boolean} true if it's of same type, otherwise false
     */
    checkString(value: any): boolean;
    /**
     * @function - check value typing is correct or not.
     * @param {any} value - value to be checked
     * @returns {boolean} true if it's of same type, otherwise false
     */
    checkBoolean(value: any): boolean;
}
