/**class contains the otp generating methods.*/
class OtpGenerator {
  /**
   * @function -generate a four digit otp
   * @returns -four digit otp
   */
  new() {
    const value = Math.floor(Math.random() * 10000);
    return value.toString().length == 3 ? parseInt(`${value}0`) : value;
  }

  hexNew() {
    const value = Math.floor(Math.random() * 1000000);
    return value.toString().length == 3 ? parseInt(`${value}0`) : value;
  }
}

module.exports = OtpGenerator;
