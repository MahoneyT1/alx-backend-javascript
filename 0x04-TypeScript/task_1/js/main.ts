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
