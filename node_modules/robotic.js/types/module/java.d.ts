export = Java;
/**Class representing Java file operations.*/
declare class Java {
    fileContent: string;
    /**
     * Creates a Java file with the specified name.
     * @function create dummy java file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
