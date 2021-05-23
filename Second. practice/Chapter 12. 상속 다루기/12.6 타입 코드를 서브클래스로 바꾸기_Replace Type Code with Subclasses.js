// 직접 상속할 때
class Employee {
  constructor(name) {
    this._name = name;
  }
}

class Engineer extends Employee {
  toString() {
    return `${this._name} (engineer)`;
  }
}

class Salesperson extends Employee {
  toString() {
    return `${this._name} (salesperson)`;
  }
}

class Manager extends Employee {
  toString() {
    return `${this._name} (manager)`;
  }
}

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

// 간접 상속할 때
// 직원의 서브클래스로 '아르바이트', '정직원' 클래스가 있어서 직접 상속으로 타입 코드 문제에 대처할 수 없다. 그리고 직원 유형을 변경하는 기능을 유지하고 싶기에 직접 상속을 사용하지 않는다.

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
    this._type = arg;
  }

  get capitalizedType() {
    return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
  }

  toString() {
    return `${this.name} (${this.capitalizedType})`;
  }
}
