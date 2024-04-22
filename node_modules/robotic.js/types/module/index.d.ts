/// <reference types="node" />
export = Node;
/** Class representing module file for file creation operations.*/
declare class Node {
    /**
     * @function - create file structure and file according your input
     * @param {string} name - The name of the file || class || module || folder.
     * @returns {string} The name of the created file's or undefined if there's an error.*/
    create(name: string): string;
    rl: readline.Interface;
    /**
     * @param {string} userInput - take input from user.
     * @returns {string} The name of the created file's or undefined if there's an error.*/
    getUserInput(): string;
    /**
     * @returns {Array} return array of the class present in the this module.*/
    output(): any[];
}
import readline = require("readline");
