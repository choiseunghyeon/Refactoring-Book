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
    this._department = arg;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

// 위임 메서드(중개자)가 많아지면 Person 클래스의 상당 부분이 위임하는데만 쓰이게 된다.
// 이럴 때는 중개자를 제거하는게 낫다.
function client(params) {
  const manager = aPerson.department.manager;
  const chargeCode = aPerson.department.chargeCode;
}
