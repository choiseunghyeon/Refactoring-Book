class Employee {
  constructor(name, id, monthlyCost) {
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    // 월간 비용
    return this._monthlyCost;
  }
  get name() {
    // 이름
    return this._name;
  }
  get id() {
    return this._id;
  }

  get annualCost() {
    // 연간 비용
    return this._monthlyCost * 12;
  }
}

class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }
  get totalMonthlyCost() {
    // chd 월간 비용
    return this.staff.map(e => e.monthlyCost).reduce((sum, cost) => sum + cost);
  }
  get staff() {
    return this._staff.slice();
  }
  get name() {
    // 이름
    return this._name;
  }

  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {
    // 총 연간 비용
    return this._monthlyCost * 12;
  }
}
