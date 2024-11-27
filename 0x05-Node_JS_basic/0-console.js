/**
 * create a function named displayMessage that prints in STDOUT the string argument.
 */

const process = require('process');

const displayMessage = (str) => {
  process.stdout.write(str);
  console.log();
};

module.exports = displayMessage;
