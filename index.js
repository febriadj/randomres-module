/*

  - All length default values ​​are 10

  - For the string data type, you can customize the result.
  - Charset values ​​are currently alphabet only
  
  - The maximum length of the integer value is 16
  - If the integer length is greater than 16, by default the length will be changed to 10

*/
const String = require('./src/String').String
const Integer = require('./src/Integer').Integer

module.exports = { String, Integer }