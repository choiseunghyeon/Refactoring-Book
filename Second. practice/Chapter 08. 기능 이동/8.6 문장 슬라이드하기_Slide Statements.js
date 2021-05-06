function slideStatements() {
  const pricingPlan = retrievePricingPlan();
  const baseCharge = pricingPlan.base;
  const chargePerUnit = pricingPlan.unit;
  const order = retreiveOrder();
  const units = order.units;
  let discountableunits = Math.max(units - pricingPlan.discountThresholde, 0);
  let discount;
  discount = discountableunits * pricingPlan.discountFactor;
  if (order.isRepeat) discount += 20;
  let charge;
  charge = baseCharge + units * chargePerUnit;
  charge = charge - discount;
  chargeOrder(charge);
}

// 조건문이 있을 떄의 슬라이드

function slideStatements2() {
  let result;
  if (avaliableResources.length === 0) {
    result = createResource();
  } else {
    result = avaliableResources.pop();
  }
  allocatedResources.push(result);
  return result;
}
