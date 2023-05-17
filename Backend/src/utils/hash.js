const bcrypt = require('bcrypt');


async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
 async function comparePassword(
  hashedPassword,
  password
) {
  const isPassword = await bcrypt.compare(password , hashedPassword);
  return isPassword;
}

module.exports = {
    hashPassword,
    comparePassword
}