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
