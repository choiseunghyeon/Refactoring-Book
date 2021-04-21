// 전역 변수에 중요한 데이터가 담겨있다고 가정
let defaultOwner = { firstName: "승현", lastName: "최" };

function client() {
  spaceship.owner = defaultOwner;

  defaultOwner = { firstName: "마틴", lastName: "파울러" };
}
