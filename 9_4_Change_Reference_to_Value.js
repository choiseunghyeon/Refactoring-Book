class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    return (this._telephoneNumber.areaCode = arg);
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    return (this._telephoneNumber.number = arg);
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    return (this._areaCode = arg);
  }

  get number() {
    return this._number;
  }
  set number(arg) {
    return (this._number = arg);
  }
}
