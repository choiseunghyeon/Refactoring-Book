/* 
    고객 객체는 값이다. 고객 ID가 123인 주문을 다섯 개 생성한다면 독립된 고객 객체가 다섯 개 만들어진다.
    이 중 하나를 수정하더라도 나머지 네 개에는 반영되지 않는다.
    this._customer = new Customer(data.customer);
*/

class Order {
  constructor(data) {
    this._number = data.number;
    // 고객 객체는 값이다. 고객 ID가 123인 주문을 다섯 개 생성한다면 독립된 고객 객체가 다섯 개 만들어진다.
    // 이 중 하나를 수정하더라도 나머지 네 개에는 반영되지 않는다.
    this._customer = new Customer(data.customer);
    // 다른 데이터를 읽어 들인다.
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
