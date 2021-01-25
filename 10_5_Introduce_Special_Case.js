// e.g 1
class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {} // 고객 이름
    get billingPlan() {} // 요금제
    set billingPlan() {}
    get paymentHistory() {} // 납부 이력
}

// client 1
function client() {
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2() {
    const plan = aCustomer === "미확인 고객" ? CustomElementRegistry.billingPlans.basic : aCustomer.billingPlan;
}

function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
}

function client4() {
    const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}


// e.g 2 객체 리터럴 이용
class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {} // 고객 이름
    get billingPlan() {} // 요금제
    set billingPlan() {}
    get paymentHistory() {} // 납부 이력
}

function client() {
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2() {
    const plan = aCustomer === "미확인 고객" ? CustomElementRegistry.billingPlans.basic : aCustomer.billingPlan;
}

function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
}


// e.g 3 변환 함수 사용

/* JSON 문서
{
    name: "애크미 보스턴",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: {
        name: "애크미 산업",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
            // 중략
        },
        // 중략 
    }
}

{
    name: "물류창고 15",
    location: "Malden MA",
    // 더 많은 현장(site) 정보
    customer: "미확인 고객",
}
*/

function client() {
    const site = acquireSiteData();
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}

function client2() {
    const plan = aCustomer === "미확인 고객" ? CustomElementRegistry.billingPlans.basic : aCustomer.billingPlan;
}

function client3() {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
}