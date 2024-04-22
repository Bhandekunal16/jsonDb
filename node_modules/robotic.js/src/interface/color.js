/**class that contain name properties*/
class Color {
  constructor() {
    this.black = "\x1b[30m";
    this.red = "\x1b[31m";
    this.green = "\x1b[32m";
    this.yellow = "\x1b[33m";
    this.blue = "\x1b[34m";
    this.magenta = "\x1b[35m";
    this.cyan = "\x1b[36m";
    this.white = "\x1b[37m";
  }

  black = this.black;
  red = this.red;
  green = this.green;
  yellow = this.yellow;
  blue = this.blue;
  magenta = this.magenta;
  cyan = this.cyan;
  white = this.white;
}

module.exports = Color;
