export = Go;
/** Class representing Go file operations.*/
declare class Go {
    fileContent: string;
    /**Creates a Go file with the specified name.
     * @function create a dummy go file
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.*/
    create(name: string): string | undefined;
}
