// 직접 상속
class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }
  toString() {
    return `${this._name} (${this._type})`;
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
    this._type = arg;
  }
  get capitalizedType() {
    return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
  }
  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
}
