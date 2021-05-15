// 전력 회사는 전력이 필요한 현장(site)에 인프라를 설치해 서비스를 제공한다.
class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {} // 고객 이름
  get billingPlan() {} // 요금제
  set billingPlan(arg) {}
  get paymentHistory() {} // 납부 이력
}

function client1() {
  const aCustomer = site.customer;
  // ... 수 많은 코드 ..
  let customerName;
  // 특이 케이스
  if (aCustomer === "미확인 고객") customerName = "거주자";
}

function client2() {
  const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;
}

function client3() {
  if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
}

function client4() {
  const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
