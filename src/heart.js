class Heart {
  findSimilarProperties(obj1, obj2) {
    const similarProperties = [];
    for (const prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        similarProperties.push(prop);
      }
    }
    return similarProperties;
  }

  compareObjects(obj1, obj2) {
    for (let key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) return true;
    }
    return false;
  }

  findSimilarObject(Array, Obj) {
    try {
      const array = Array;
      const matchedObjects = array.filter((item) =>
        this.compareObjects(item, Obj)
      );
      if (matchedObjects.length === 0) {
        console.log("No matches found");
      }
      return { records: matchedObjects, length: Object.length, timeStamp: new Date() };
    } catch (error) {
      return error;
    }
  }

  convertArrayOfObjectsToCsv(arrayOfObjects) {
    if (arrayOfObjects.length === 0) {
      return "";
    }
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
