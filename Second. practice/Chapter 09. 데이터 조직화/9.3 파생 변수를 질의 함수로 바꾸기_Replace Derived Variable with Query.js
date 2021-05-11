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
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustment = [];
  }

  get production() {
    assert(this._productionAccumulator === this.calculatedProductionAccmulator);
    return this._initialProduction + this._productionAccumulator;
  }

  get calculatedProductionAccmulator() {
    return this._adjustment.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
