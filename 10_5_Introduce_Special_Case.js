// e.g 1
class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {} // 고객 이름
    get billingPlan() {} // 요금제
    set billingPlan() {}
    get paymentHistory() {} // 납부 이력
    get isUnknown() {return false;}
}

class UnknownCustomer {
    get isUnknown() {return true;}
    get name() {return "거주자";}
    get billingPlan() {return registry.billingPlans.basic;}
    set billingPlan(arg) {/*무시 한다*/}
    get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

// client 1
function client() {
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    aCustomer.name;
}

function client2() {
    aCustomer.billingPlan;
}

function client3() {
    aCustomer.billingPlan = newPlan;
}

function client4() {
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

function specialClient() {
    const name = aCustomer.isUnknown ? "미확인 거주자" : aCustomer.name;
}


// e.g 2 객체 리터럴 이용
class Site {
    get customer() {return this._customer === "미확인 고객" ? createUnknownCustomer() : this._customer;}
}

class Customer {
    get name() {} // 고객 이름
    get billingPlan() {} // 요금제
    set billingPlan() {}
    get paymentHistory() {} // 납부 이력
    get isUnknown() {return false;}
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

function isUnknown(arg) {
    return arg.isUnknown
}

function client() {
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    aCustomer.name;
}

function client2() {
    aCustomer.billingPlan;
}

function client3() {
    aCustomer.paymentHistory.weeksDelinquentInLastYear;
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

function enrichSite(inputSite) {
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "거주자",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquent: 0,
        }
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
}

function isUnknown(aCustomer) {
    if (aCustomer === "미확인 고객") return true;
    else return aCustomer.isUnknown;
}

function client() {
    const rawSite = acquireSiteData();
    const site = enrichSite(rawSite);
    const aCustomer = site.customer;
    // ... 수 많은 코드 ...
    aCustomer.name;
}

function client2() {
    aCustomer.billingPlan;
}

function client3() {
    aCustomer.paymentHistory.weeksDelinquentInLastYear;
}