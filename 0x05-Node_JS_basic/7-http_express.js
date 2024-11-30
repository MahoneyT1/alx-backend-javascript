/**
 * Install Express and in a file named 6-http_express.js, create a small
 * HTTP server using Express module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * Displays Hello Holberton School! in the page body for the endpoint /
 */

const express = require('express');

// express instance
const app = express();

const PORT = 1245;

app.listen(PORT, () => {
  console.log('serving at port 1245');
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * When the URL path is /students, it should display This is the list
 * of our students followed by the same content as the file
 * 3-read_file_async.js (with and without the database) - the name of
 * the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a
 * valid student!
 */

const csvParser = require("csv-parser");
const fs = require('fs');



app.get("/students", (req, res)=> {
    // get the database from the terminal
    const db = process.argv[2];
    const results = [];


    fs.createReadStream(db, {'encoding': 'utf-8'})
    .pipe(csvParser())
    .on('data', (row)=> {
        results.push(row);
    })
    .on('end', ()=> {
        const studentsCs = results.filter((student)=> student.field === 'CS')

        const studentNames = studentsCs.filter((student)=> `${student.firstname}`)
        res.send(studentNames)        
    })
    .on('error', (err)=> {
        console.error(err)
    })


})

module.exports = app
