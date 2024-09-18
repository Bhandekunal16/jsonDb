class StringComparator {
  isEmail(value) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim());
  }

  isMobile(value) {
    return /^\d{10}$/.test(String(value).trim());
  }

  isName(value) {
    return /^[a-zA-Z\s]{1,40}$/.test(value.trim());
  }

  isPinCode(value) {
    return /^\d{6}$/.test(String(value).trim());
  }

  isUnique(value) {
    return /^[a-zA-Z0-9]{1,8}$/.test(String(value).trim());
  }

  isAlphanumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value.trim());
  }

  IsStrongPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      value.trim()
    );
  }

  isURL(value) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value.trim());
  }

  IsIPAddress(value) {
    return /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/.test(
      value.trim()
    );
  }

  IsHexadecimal(value) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value.trim());
  }
}
module.exports = StringComparator;
