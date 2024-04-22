export = JavaScript;
/**Class representing Java file operations.*/
declare class JavaScript {
    fileContent: string;
    /**Creates a javascript file with the specified name.
     * @function  create a dummy javascript file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.*/
    create(name: string): string | undefined;
}
