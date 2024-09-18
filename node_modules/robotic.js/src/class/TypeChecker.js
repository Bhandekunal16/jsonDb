class TypeChecker {
  checkNumber(value) {
    return typeof value == typeof Number(0) ? true : false;
  }

  checkString(value) {
    return typeof value == typeof String("") ? true : false;
  }

  checkBoolean(value) {
    return typeof value == typeof Boolean(true) ? true : false;
  }

  identifier(input) {
    return typeof input;
  }
}

module.exports = TypeChecker;
