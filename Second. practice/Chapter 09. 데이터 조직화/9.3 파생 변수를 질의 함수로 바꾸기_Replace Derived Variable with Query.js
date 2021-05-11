class ProductionPlan {
  get production() {
    return this._adjustment.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
  }
}
