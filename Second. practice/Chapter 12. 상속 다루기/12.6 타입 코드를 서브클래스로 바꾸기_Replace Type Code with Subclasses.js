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
