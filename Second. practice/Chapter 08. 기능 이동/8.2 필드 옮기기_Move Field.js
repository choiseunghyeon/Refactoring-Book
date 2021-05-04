// discountRate field를 Customer -> CustomerContract
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }
  becomePreferred() {
    this._setDiscountRate((this._contract.discountRate += 0.03));
    // 기타
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._contract.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

// 공유 객체로 이동하기
// 이자율이 계좌별로 설정되고 있지만 계좌 종류에 따라 정해지도록 수정
class Account {
  constructor(number, type, insertRate) {
    this._number = number;
    this._type = type;
    this._insertRate = insertRate;
  }

  get insertRate() {
    return this._insertRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}
