class Timestamp {
  constructor() {
    this.min = new Date().getMinutes();
    this.sec = new Date().getSeconds();
    this.mild = new Date().getMilliseconds();
  }

  main() {
    return `${this.min}${this.mild}${this.sec}`;
  }
}

module.exports = Timestamp;
