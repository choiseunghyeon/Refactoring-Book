class ProductionPlan {
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
    // 데이터 중복 adjustment 적용에서 직접적인 관련이 없이 누적 값 production 갱신 중
    this._production += anAdjustment.amount;
  }
}
