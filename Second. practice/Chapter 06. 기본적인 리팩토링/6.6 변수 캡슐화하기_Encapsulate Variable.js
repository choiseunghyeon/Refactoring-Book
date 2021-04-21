// 전역 변수에 중요한 데이터가 담겨있다고 가정
// 가시 범위 제한 defaultOwner.js 파일 등으로 옮겨서 모듈화
let defaultOwner = { firstName: "승현", lastName: "최" };
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner(arg) {
  defaultOwner = arg;
}
function client() {
  spaceship.owner = getDefaultOwner();

  setDefaultOwner({ firstName: "마틴", lastName: "파울러" });
}

// 값 캡슐화하기
let defaultOwner = { firstName: "승현", lastName: "최" };
// 방법 1
function defaultOwner() {
  return Object.assign({}, defaultOwner);
}
// 방법 2 레코드 캡슐화하기(7.1절)
function defaultOwner() {
  return new Person(defaultOwner);
}
function setDefaultOwner(arg) {
  defaultOwner = arg;
}

function client() {
  const owner1 = defaultOwner();
  owner1.lastName = "파슨스";
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstname = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstname;
  }
}
