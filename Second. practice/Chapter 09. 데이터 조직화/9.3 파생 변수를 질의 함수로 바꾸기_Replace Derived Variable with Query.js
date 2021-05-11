class ProductionPlan {
  get production() {
    return this._adjustment.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
  }
}

// 소스가 둘 이상일 때
class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustment = [];
  }
  get production() {
    return this._production;
  }

  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
