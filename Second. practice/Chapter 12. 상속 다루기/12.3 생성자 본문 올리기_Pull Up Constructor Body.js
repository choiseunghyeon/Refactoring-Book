class Party {
  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  // 생략
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }
}

// 공통 코드가 나중에 올 때
class Employee {
  constructor(name) {
    /*... */
  }
  get isPrivileged() {
    /* ... */
  }

  assignCar() {
    /* ... */
  }

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction(); // 모든 서브클래스가 수행
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}
