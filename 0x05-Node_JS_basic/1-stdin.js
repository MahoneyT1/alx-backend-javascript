/**
*Create a program named 1-stdin.js that will be executed through command line:

It should display the message Welcome to Holberton School,
what is your name? (followed by a new line)
The user should be able to input their name on a new line
The program should display Your name is: INPUT
When the user ends the program, it should display This important
software is now closing (followed by a new line)
*/

// Importing the 'process' module to handle stdin and stdout
const process = require('process');

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// listen for user input
process.stdin.on('data', (data) => {
  // convert buffer to string
  const name = data.toString().trim();

  // print to stdout
  console.log(`Your name is ${name}`);
  process.stdin.pause();
  console.log('This important software is now closing');
});
