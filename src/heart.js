class Heart {
  findSimilarProperties(obj1, obj2) {
    return Object.keys(obj1).filter((prop) => obj2.hasOwnProperty(prop));
  }

  compareObjects(obj1, obj2) {
    return Object.keys(obj1).some(
      (key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
    );
  }

  findSimilarObject(Array, Obj) {
    try {
      const matchedObjects = Array.filter((item) =>
        this.compareObjects(item, Obj)
      );
      if (matchedObjects.length === 0) console.log("No matches found");

      return {
        records: matchedObjects,
        length: Object.length,
        timeStamp: new Date(),
      };
    } catch (error) {
      return error;
    }
  }

  convertArrayOfObjectsToCsv(arrayOfObjects) {
    if (arrayOfObjects.length === 0) return "";
    const headers = Object.keys(arrayOfObjects[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));
    if (Array.isArray(arrayOfObjects)) {
      arrayOfObjects.forEach((obj) => {
        const values = headers.map((header) => obj[header]);
        csvRows.push(values.join(","));
      });
    } else console.error("arrayOfObjects is not an array!");
    return csvRows.join("\n");
  }
}

module.exports = Heart;
