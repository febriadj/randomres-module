/*

  - randomres is a simple module to make it easy for you 
    to get values from several data types randomly.

  - all source code comes from the './src' directory.
  - developer -> febriadji

  - this module is released under the MIT license

*/

const str = require('./src/String').str
const date = require('./src/Date').date
const compile = require('./src/Compile').compile

module.exports = { str, date, compile }