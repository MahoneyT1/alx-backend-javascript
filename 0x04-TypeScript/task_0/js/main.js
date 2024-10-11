// Write your code in the main.ts file:
;
const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45
};
const student2 = {
    firstName: 'Mary',
    lastName: 'Edochie',
    age: 35
};
const studentsList = [
    student1,
    student2
];
const table = document.createElement('table');
studentsList.forEach(function (student) {
    const row = table.insertRow();
    const cellOne = row.insertCell(0);
    const cellTwo = row.insertCell(1);

    cellOne.textContent = student.firstName;
    cellTwo.textContent = student.lastName;
});
document.body.appendChild(table);
