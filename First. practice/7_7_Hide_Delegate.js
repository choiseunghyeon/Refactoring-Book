class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set department(arg) {
    return (this._department = arg);
  }

  get manager() {
    return this._department.manager;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  get chargeCode(arg) {
    return (this._chargeCode = arg);
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    return (this._manager = arg);
  }
}

function client() {
  const manager = aPerson.manager;
}
