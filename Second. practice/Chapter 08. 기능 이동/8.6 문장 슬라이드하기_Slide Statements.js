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
