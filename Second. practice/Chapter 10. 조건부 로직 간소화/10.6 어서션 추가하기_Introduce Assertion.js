class Customer {
  applyDiscount(aNumber) {
    // 할인율이 항상 양수라는 가정이 깔려 있다.
    if (!this.discountRate) return aNumber;
    else {
      return aNumber - this.discountRate * aNumber;
    }
  }

  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
