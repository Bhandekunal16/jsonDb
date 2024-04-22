export = UUID;
/** class contains the uuid generating  operations.*/
declare class UUID {
    /**
     * @function -random alphabet generator function, used to generate random alphabets for uuids.
     * @returns - returns a random alphabetic character from 'a'-'z'.
     */
    randomAlphabet(): string;
    /**
     * @function- generate alphanumeric UUID operation
     * @returns - alphanumeric UUID string*/
    alphanumeric(): string;
    /**
     * @param {number} length - optional parameter if want a specific length of the uuid, default is 10.
     * @function - numeric uuid generation operations
     * @returns - numeric uuid*/
    numeric(length?: number): string;
    /**
     * @function - give the vectorized uuid string.
     * @returns -  returns vectorized uuid string
     */
    vectorized(): string;
}
