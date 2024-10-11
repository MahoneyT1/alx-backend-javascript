// firstName(string) and lastName(string). These two attributes should only be modifiable
//  when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean)
// without specifying the name of the attribute
;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
;
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
;
var person = {
    firstName: teacher3.firstName,
    lastName: teacher3.lastName,
    printTeacher: function (firstName, lastName) {
        return "".concat(firstName[0], ". ").concat(lastName);
    },
};
console.log(person.printTeacher(teacher3.firstName, teacher3.lastName));
// Write a Class named StudentClass:
// The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
// Requirements:
// You can reuse the Webpack configuration from the previous exercise to compile the code.
// When running npm run build, no TypeScript error should be displayed.
// Every variable should use TypeScript when possible.
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        firstName = firstName;
        lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstname;
    };
    return StudentClass;
}());
var student1 = {
    firstname: 'Emeka',
    lastName: 'Emenike',
    workOnHomework: function () {
        return 'Currently working';
    },
    displayName: function () {
        return this.firstname;
    }
};
console.log(student1.displayName());
