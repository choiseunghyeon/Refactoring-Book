// 직접 상속
class Employee {
  constructor(name) {
    this._name = name;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}

class Engineer extends Employee {}
class Salesperson extends Employee {}
class Manager extends Employee {}

function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "salesperson":
      return new Salesperson(name);
    case "manager":
      return new Manager(name);
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다.`);
  }
}

// 간접 상속
// 서브 클래스로 아르바이트/정직원 클래스가 이미 있어서 직접 상속으로 타입코드 문제를 대처할 수 없다고 가정 그리고 직원 유형 변경 기능을 유지하고 싶다.
class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }

  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer(name);
      case "salesperson":
        return new Salesperson(name);
      case "manager":
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
}

class EmployeeType {
  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
  }
}

class Engineer extends Employee {
  toString() {
    return "engineer";
  }
}
class Salesperson extends Employee {
  toString() {
    return "salesperson";
  }
}
class Manager extends Employee {
  toString() {
    return "manager";
  }
}
