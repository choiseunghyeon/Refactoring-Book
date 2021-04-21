// 함수 이름 바꾸기 - 간단한 절차
// 호출부도 동시에 바꾼다.
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 함수 이름 바꾸기 - 마이그레이션 절차
// 호출부를 하나씩 circum함수를 인라인하여 새로운 함수 circumference를 호출하도록 변경한다.
function circum(radius) {
  circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 매개변수 추가하기 - 마이그레이션 절차
class Book {
  constructor() {}

  addReservation(customer) {
    this.zzzAddReservation(customer, false);
  }

  zzzAddReservation(customer, isPriority) {
    // 호출하는 곳에서 새 매개변수를 실제로 사용하는지 확인
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

function client() {
  const book = new Book();
  const customer = "Choi";
  book.zzzAddReservation(customer, true);
}
