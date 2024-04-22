export = HTML;
/** Class representing HTML file operations.*/
declare class HTML {
    fileContent: string;
    /**
     * @function create a dummy html file.
     * @param {string} name - The name of the file.
     * @returns {string|undefined} The name of the created file or undefined if there's an error.
     */
    create(name: string): string | undefined;
}
