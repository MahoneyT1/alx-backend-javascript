// Implement a class named HolbertonCourse:

// Constructor attributes:
// name (String)
// length (Number)
// students (array of Strings)
// Make sure to verify the type of attributes during object creation
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError();
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get school() {
    return this._students;
  }

  set student(students) {
    this._students = students;
  }
}
