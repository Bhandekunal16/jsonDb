export = Binary;
/**Class representing binary file operations.*/
declare class Binary {
    fileContent: string;
    /**
     * @function create a dummy bin file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
