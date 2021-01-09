// 함수 이름 바꾸기와 매개변수 추가로 나눌 수 있다.

function inNewEngland(stateCode) {
  return ["MA", "CT", "ME"].includes(stateCode);
}

function getNewEnglanders() {
  return (newEnglanders = somCustomers.filter(c => inNewEngland(c.address.state)));
}
