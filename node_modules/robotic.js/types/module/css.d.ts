export = Css;
/** Class representing CSS file operations.*/
declare class Css {
    fileContent: string;
    /**
     * @function Creates a CSS file with the specified name.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
