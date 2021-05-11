/* 
    고객 객체는 값이다. 고객 ID가 123인 주문을 다섯 개 생성한다면 독립된 고객 객체가 다섯 개 만들어진다.
    이 중 하나를 수정하더라도 나머지 네 개에는 반영되지 않는다.
    this._customer = new Customer(data.customer);
*/

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
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

// 다른 모듈
// 유일한 객체를 저장할 공간으로 저장소 객체(repository object) 활용
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customer.has(id)) _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
