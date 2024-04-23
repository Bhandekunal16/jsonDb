class Heart {
  findSimilarProperties(obj1, obj2) {
    console.log(obj1, obj2);

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
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        return true;
      }
    }
    return false;
  }

  findSimilarObject(Array, Obj) {
    try {
      const array = Array;

      let Object = [];
      for (let index = 0; index < array.length; index++) {
        const flag = this.compareObjects(array[index], Obj);

        flag ? Object.push(array[index]) : console.log("i am not matched");
      }
      return { records: Object, length: Object.length, timeStamp: new Date() };
    } catch (error) {
      return error;
    }
  }

  convertArrayOfObjectsToCsv(arrayOfObjects) {
    if (arrayOfObjects.length === 0) {
      return "";
    }

    const headers = Object.keys(arrayOfObjects[0]);

    console.log(headers, "i am headers");

    const csvRows = [];

    csvRows.push(headers.join(","));

    console.log(arrayOfObjects, typeof arrayOfObjects, "for each row");

    if (Array.isArray(arrayOfObjects)) {
      arrayOfObjects.forEach((obj) => {
        console.log(obj);
        const values = headers.map((header) => obj[header]);
        csvRows.push(values.join(","));
      });
    } else {
      console.error("arrayOfObjects is not an array!");
    }

    return csvRows.join("\n");
  }
}

module.exports = Heart;
