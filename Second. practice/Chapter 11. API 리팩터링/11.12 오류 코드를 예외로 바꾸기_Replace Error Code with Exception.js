// 전역 테이블에서 배송지의 배송 규칙을 알아내는 코드

// 국가 정보(country)가 유효한지를 이 함수 호출 전에 다 검증했다고 가정
function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  // ... 등
}

// 최상위
function top() {
  try {
    calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) {
      errorList.push({ order: orderData, errorCode: e.code });
    } else {
      throw e;
    }
  }
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return "OrderProcessingError";
  }
}
