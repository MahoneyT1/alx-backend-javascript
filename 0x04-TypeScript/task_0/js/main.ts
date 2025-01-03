// Write your code in the main.ts file:

// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.


interface Student {
    firstName: string,
    lastName: string,
    age: number
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45
};

const student2: Student = {
    firstName: 'Mary',
    lastName: 'Edochie',
    age: 35
};

const studentsList: Student[] = [
    student1,
    student2
];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell_1 = row.insertCell(0);
    const cell_2 = row.insertCell(1);

    cell_1.textContent = student.firstName
    cell_2.textContent = student.lastName
});

document.body.appendChild(table);
