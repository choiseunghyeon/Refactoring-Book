// 전력 회사는 전력이 필요한 현장(site)에 인프라를 설치해 서비스를 제공한다.
class Site {
  get customer() {
    return this._customer === "미확인 고객" ? new UnknownCustomer() : this._customer;
  }
}

class Customer {
  get name() {} // 고객 이름
  get billingPlan() {} // 요금제
  set billingPlan(arg) {}
  get paymentHistory() {} // 납부 이력
  get isUnknown() {
    return false;
  }
}

// 특이 케이스 객체는 값 객체로 항상 불변이어야 한다.
class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {
    /* 겉보기 동작만 유지 */
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

function client1() {
  const aCustomer = site.customer;
  // ... 수 많은 코드 ..
  let customerName = aCustomer.name;
}

function client2() {
  const plan = aCustomer.billingPlan;
}

function client3() {
  aCustomer.billingPlan = newPlan;
}

function client4() {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function client5() {
  //튀는 클라이언트
  const name = aCustomer.isUnknown ? "미확인 거주자" : aCustomer.name;
}
