export = Brain;
declare class Brain {
  /**
   * Writes data to a specified collection.
   * @param {any} input - The data to be written.
   * @param {string} collection - The name of the collection to write data to.
   * @returns {any} - The result of the write operation.
   */
  write(input: any, collection: string): any;

  /**
   * Reads data from a specified collection.
   * @param {string} collection - The name of the collection to read data from.
   * @returns {any} - The data read from the collection.
   */
  read(collection: string): any;

  /**
   * Retrieves a record by its ID from a specified collection.
   * @param {string} id - The ID of the record to retrieve.
   * @param {string} collection - The name of the collection to search in.
   * @returns {{ records: any, timestamp: Date }} - The record and its timestamp.
   */
  getById(
    id: string,
    collection: string
  ): {
    records: {};
    timestamp: Date;
  };

  /**
   * Retrieves records matching specified properties from a collection.
   * @param {any} Object - The properties to match.
   * @param {string} collection - The name of the collection to search in.
   * @returns {any} - The records matching the specified properties.
   */
  getByProperties(Object: any, collection: string): any;

  /**
   * Edits a value of a property in a record.
   * @param {string} id - The ID of the record to edit.
   * @param {string} input - The property to edit.
   * @param {string} value - The new value to assign.
   * @param {string} collection - The name of the collection containing the record.
   * @returns {void}
   */
  edit(id: string, input: string, value: string, collection: string): void;

  /**
   * Updates properties of a record with new values.
   * @param {string} id - The ID of the record to update.
   * @param {any} newObj - The new properties and their values.
   * @param {string} collection - The name of the collection containing the record.
   * @returns {void}
   */
  props(id: string, newObj: any, collection: string): void;

  /**
   * Counts the number of records in a specified collection.
   * @param {string} collection - The name of the collection to count records in.
   * @returns {{ recordCount: number }} - The number of records in the collection.
   */
  count(collection: string): {
    recordCount: any;
  };

  unwind(array: any, collection: string): void;

  ImportCsv(path: string, collection: string): void;

  ExportCsv(collection: string): void;
}
