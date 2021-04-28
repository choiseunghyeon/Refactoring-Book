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

  get manager() {
    this._department.manager;
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

// 어떤 사람이 속한 부서의 관리자를 알고 싶다.
// 부서 클래스가 관리자 정보를 제공한다는 사실을 알아야한다.
function client(params) {
  const manager = aPerson.manager;
}
