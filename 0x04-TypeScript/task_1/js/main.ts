// firstName(string) and lastName(string). These two attributes should only be modifiable
//  when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean)
// without specifying the name of the attribute

interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3)


// Write an interface named Directors that extends Teacher. It requires
// an attribute named numberOfReports(number)

interface Directors extends Teacher {
  firstName: string,
  lastName: string,
  location: string,
  fullTimeEmployee: boolean,
  numberOfReports: number
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
}

console.log(director1);

// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.


interface printTeacherFunction {
  firstName: string,
  lastName: string,

  printTeacher(firstName: string, lastName: string): string;

};


const person: printTeacherFunction = {
  firstName: teacher3.firstName,
  lastName: teacher3.lastName,

  printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
  },
}
console.log(person.printTeacher(teacher3.firstName, teacher3.lastName));

