// e.g 1
class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  // 생략
}

class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
  // 생략
}

// e.g 2 공통 코드가 나중에 올 때
class Employee {
  constructor(name) {
    // ...
  }

  get isPrivileged() {
    // ...
  }

  assignCar() {
    // ...
  }
  // 생략
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar(); // 모든 서브클래스가 수행한다.
  }

  get isPrivileged() {
    return this._grade > 4;
  }
  // 생략
}
