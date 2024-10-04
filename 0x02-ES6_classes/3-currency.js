export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // set the code attributes
  set code(codeArg) {
    if (typeof (codeArg) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = codeArg;
  }

  // get the code attr
  get code() {
    return this._code;
  }

  // set name
  set name(nameArg) {
    if (typeof (nameArg) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nameArg;
  }

  // get name
  get name() {
    return this._name;
  }

  // method that prints how string representation of th class
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
