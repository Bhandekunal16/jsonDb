const [Color, Time] = [require("./color"), require("./time")];

class Logger {
  constructor() {
    this.time = new Time().main();
  }

  new(services) {
    services.forEach((service) => {
      console.log(
        `${new Color().green}${new Date().toLocaleDateString()} [NODE] ${
          this.time
        } ${new Color().yellow} [SERVICE] ${
          new Color().green
        } ${service.toUpperCase()} `
      );
    });
  }

  log(message) {
    console.log(
      `${new Color().green}[NODE] : ${new Color().white} ${message}`
    );
  }

  warn(message, optionalContain) {
    console.log(
      `${new Color().yellow}[NODE] : WARN ${new Color().white} ${message} ${
        optionalContain ?? ""
      }`
    );
  }

  error(message, optionalContain) {
    console.log(
      `${new Color().red}[NODE] : ERROR ${message} ${optionalContain ?? ""}`
    );
  }

  array(array) {
    array.forEach((array) => {
      console.log(
        `${new Color().green}${new Date().toLocaleDateString()} [NODE] - ${
          this.time
        }-${new Color().yellow}${array.toUpperCase()} `
      );
    });
  }
}

module.exports = Logger;
