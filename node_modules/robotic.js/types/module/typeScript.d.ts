export = TypeScript;
/** Class representing Java file operations.*/
declare class TypeScript {
    fileContent: string;
    /**
     * @function - create a dummy typescript file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
