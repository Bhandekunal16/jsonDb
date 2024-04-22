export = Python;
/** Class representing python file operations.*/
declare class Python {
    fileContent: string;
    /**
     * @function create dummy python file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
