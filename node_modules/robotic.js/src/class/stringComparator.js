/** contains the string comparing operations with regex*/
class StringComparator {
  /**
   * @param {string} value - any string to compare.
   * @function - email verification operations.
   * @returns {boolean} - true || false.
   */
  isEmail(value) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim());
  }

  /**
   * @param {any} value - any to compare.
   * @function - mobileNo verification operations.
   * @returns {boolean} - true || false.
   */
  isMobile(value) {
    return /^\d{10}$/.test(String(value).trim());
  }

  /**
   * @param {string} value - any string to compare.
   * @function - mobileNo verification operations.
   * @returns {boolean} - true || false.
   */
  isName(value) {
    return /^[a-zA-Z\s]{1,40}$/.test(value.trim());
  }

  /**
   * @param {any} value - any string to compare.
   * @function - isPinCode verification operations.
   * @returns {boolean} - true || false.
   */
  isPinCode(value) {
    return /^\d{6}$/.test(String(value).trim());
  }

  /**
   * @param {any} value - any string to compare.
   * @function - isUnique verification operations.
   * @returns {boolean} - true || false.
   */
  isUnique(value) {
    return /^[a-zA-Z0-9]{1,8}$/.test(String(value).trim());
  }

  /**
   * @param {string} value - any string to compare.
   * @function - Alphanumeric verification operations.
   * @returns {boolean} - true || false.
   */
  isAlphanumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value.trim());
  }

  /**
   * @param {string} value - any string to compare.
   * @function - StrongPassword verification operations.
   * @returns {boolean} - true || false.
   */
  IsStrongPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      value.trim()
    );
  }

  /**
   * @param {string} value - any string to compare.
   * @function - url verification operations.
   * @returns {boolean} - true || false.
   */
  isURL(value) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value.trim());
  }

  /**
   * @param {string} value - any string to compare.
   * @function - IP Address verification operations.
   * @returns {boolean} - true || false.
   */
  IsIPAddress(value) {
    return /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/.test(
      value.trim()
    );
  }

  /**
   * @param {string} value - any string to compare.
   * @function - Hexadecimal verification operations.
   * @returns {boolean} - true || false.
   */
  IsHexadecimal(value) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value.trim());
  }
}
module.exports = StringComparator;
