class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get discountFactor() {
    let result = 0.98;
    if (this.basePrice > 1000) result -= 0.3;
    return result;
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }
}
