export = Web;
/** Class representing module file for creation of html,css and javascript file creation operations.*/
declare class Web {
    /**
     * @function - create a folder structure useful for static web pages
     * @param {string} name - The name of the folder and all of each file.
     * @returns {string|undefined} The name of the created file's or undefined if there's an error.
     */
    create(name: string): string | undefined;
    /**
     * @function - export the array of the class name for other module
     * @returns {Array|undefined} Array of class name's.
     */
    out(): any[] | undefined;
}
