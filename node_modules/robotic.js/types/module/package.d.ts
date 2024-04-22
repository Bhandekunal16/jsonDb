export = JSON;
/**Class representing json file operations.*/
declare class JSON {
    fileContent: string;
    /**
     * @function : create a dummy json file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.*/
    create(name: string): string | undefined;
}
