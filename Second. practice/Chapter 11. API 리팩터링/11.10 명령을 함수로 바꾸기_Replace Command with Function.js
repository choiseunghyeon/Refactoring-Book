class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this._baseCharge + this._provider.connectionCharge;
  }
}

function client() {
  const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
}
