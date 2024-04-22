/**class that contain time stamp for the logging.*/
class Timestamp {
  constructor() {
    this.min = new Date().getMinutes();
    this.sec = new Date().getSeconds();
    this.mild = new Date().getMilliseconds();
  }

  /**
   * @function - time stamp constructor
   * @returns {string} - returns time stamp string*/
  main() {
    const timestamp = `${this.min}${this.mild}${this.sec}`;
    return timestamp;
  }
}

module.exports = Timestamp;
