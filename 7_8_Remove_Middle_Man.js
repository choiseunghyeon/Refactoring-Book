// manger와 같은 위임 메서드가 많아 진다면 차라리 중개자를 제거하고 client에서 직접 department 객체에서 가져오는게 나을 수 있다.

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    return (this._department = arg);
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
  const manager = aPerson.department.manager;
}
