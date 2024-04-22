export = Logger;
/**class that contain logger operation*/
declare class Logger {
    time: string;
    /**
     * @param {*} services
     * @function - create a custom theme for the logger
     */
    "new"(services: any): void;
    /**
     * @param {any} message
     * @function - create a default log message for success
     */
    log(message: any): void;
    /**
     * @param {any} message
     * @param {any} optionalContain
     * @function - create a default log message for success
     */
    warn(message: any, optionalContain?: any): void;
    /**
     * @param {any} message
     * @function - create a default log message for error
     */
    error(message: any, optionalContain?: any): void;
    /**
     * @param {*} array - need the array as input.
     * @function - create a custom theme for the logger
     */
    array(array: any): void;
}
