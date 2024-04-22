export = Heart;

/**
 * Represents a Heart object with utility methods for comparing and finding similarities between objects.
 * @class
 * @exports Heart
 */
declare class Heart {
  /**
   * Finds similar properties between two objects.
   * @param {any} obj1 - The first object.
   * @param {any} obj2 - The second object.
   * @returns {string[]} An array containing names of similar properties found in both objects.
   */
  findSimilarProperties(obj1: any, obj2: any): string[];

  /**
   * Compares two objects to determine if they are equal.
   * @param {any} obj1 - The first object.
   * @param {any} obj2 - The second object.
   * @returns {boolean} True if the objects are equal, false otherwise.
   */
  compareObjects(obj1: any, obj2: any): boolean;

  /**
   * Finds a similar object within an array of objects.
   * @param {any[]} array - The array of objects to search in.
   * @param {any} obj - The object to find similarities with.
   * @returns {any} The first similar object found in the array, or undefined if none is found.
   */
  findSimilarObject(Array: any, Obj: any): any;
}
