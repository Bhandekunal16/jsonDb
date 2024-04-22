export = Vessel;

/**
 * Represents a Vessel object with methods for file operations.
 * @class
 * @exports Vessel
 */
declare class Vessel {
  /**
   * The filename associated with the vessel.
   * @type {string}
   */
  fileName: string;

  /**
   * Writes input data to the specified collection.
   * @param {any} input - The data to write.
   * @param {string} collection - The collection to write to.
   * @returns {any} The result of the write operation.
   */
  write(input: any, collection: string): any;

  /**
   * Performs pre-creation operations on the specified collection.
   * @param {string} collection - The collection to perform pre-creation operations on.
   * @returns {any} The result of the pre-creation operation.
   */
  preCreate(collection: string): any;

  /**
   * Reads data from the specified collection.
   * @param {string} collection - The collection to read from.
   * @returns {any} The data read from the collection.
   */
  read(collection: string): any;
}
