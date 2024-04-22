export = Nest;
/**Class representing module file for creation of folder structure like nest.js operations.*/
declare class Nest {
    /**
     * @function create a dummy nest module
     * @param {string} name - The name of the folder and all of each file.
     * @returns {string|undefined} The name of the created file's or undefined if there's an error.
     */
    create(name: string): string | undefined;
    /**
     * @function export array of the service Name's imported in module
     * @returns {Array|undefined} Array of the service Name's imported in module.
     */
    out(): any[] | undefined;
}
