/**
 * Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text
Cannot load the database
If the database is available, it should log the following message to the
console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the
following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const fs = require('fs');

function countStudents(path) {
  const data = fs.readFileSync(path, 'utf-8', (error, data) => {
    if (error) {
      throw new Error({ error });
    }
    const numberOfStudents = data;
    console.log(numberOfStudents.toString());
  });
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  // remove the header strings
  lines.shift();
  const students = lines.map((line) => line.split(',')).filter((line) => line.length > 1);

  const totalStudentCount = students.length;

  const csStudentList = [];
  const sweStudentList = [];

  // eslint-disable-next-line
  students.forEach((student) => {
    for (let i = 0; i < student.length; i += 1) {
      if (student[i] === 'CS') {
        csStudentList.push(student[0].trimEnd());
      }
    }
  });
  const csStudentCount = csStudentList.length;
  students.forEach((student) => {
    for (let i = 0; i < student.length; i += 1) {
      if (student[i] === 'SWE') {
        sweStudentList.push(student[0].trimEnd());
      }
    }
  });

  const sweStudentCount = sweStudentList.length;
  console.log(`Number of students: ${totalStudentCount}`);
  console.log(`Number of students in CS: ${csStudentCount}. List: ${csStudentList.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudentCount}. List: ${sweStudentList.join(', ')}`);
}

module.exports = countStudents;
