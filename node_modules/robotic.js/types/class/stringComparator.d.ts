export = StringComparator;
/** contains the string comparing operations with regex*/
declare class StringComparator {
    /**
     * @param {string} value - any string to compare.
     * @function - email verification operations.
     * @returns {boolean} - true || false.
     */
    isEmail(value: string): boolean;
    /**
     * @param {any} value - any to compare.
     * @function - mobileNo verification operations.
     * @returns {boolean} - true || false.
     */
    isMobile(value: any): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - mobileNo verification operations.
     * @returns {boolean} - true || false.
     */
    isName(value: string): boolean;
    /**
     * @param {any} value - any string to compare.
     * @function - isPinCode verification operations.
     * @returns {boolean} - true || false.
     */
    isPinCode(value: any): boolean;
    /**
     * @param {any} value - any string to compare.
     * @function - isUnique verification operations.
     * @returns {boolean} - true || false.
     */
    isUnique(value: any): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - Alphanumeric verification operations.
     * @returns {boolean} - true || false.
     */
    isAlphanumeric(value: string): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - StrongPassword verification operations.
     * @returns {boolean} - true || false.
     */
    IsStrongPassword(value: string): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - url verification operations.
     * @returns {boolean} - true || false.
     */
    isURL(value: string): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - IP Address verification operations.
     * @returns {boolean} - true || false.
     */
    IsIPAddress(value: string): boolean;
    /**
     * @param {string} value - any string to compare.
     * @function - Hexadecimal verification operations.
     * @returns {boolean} - true || false.
     */
    IsHexadecimal(value: string): boolean;
}
