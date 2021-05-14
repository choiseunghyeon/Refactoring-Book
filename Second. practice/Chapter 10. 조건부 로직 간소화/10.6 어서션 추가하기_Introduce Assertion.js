class Customer {
  applyDiscount(aNumber) {
    // 할인율이 항상 양수라는 가정이 깔려 있다.
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}
