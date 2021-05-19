function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function client1() {
  aShipment.deliveryDate = rushDeliveryDate(anOrder, true);
}

function client2() {
  aShipment.deliveryDate = regularDeliveryDate(anOrder, false);
}

// 매개변수를 까다로운 방식으로 사용할 때 단순히 래핑할 수도 있다.
function deliveryDate(anOrder, isRush) {
  let result;
  let deliveryTime;
  if (anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") deliveryTime = isRush ? 1 : 2;
  else if (anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
    deliveryTime = 2;
    if (anOrder.deliveryState === "NH" && !isRush) deliveryTime = 3;
  } else if (isRush) deliveryTime = 3;
  else if (anOrder.deliveryState === "ME") deliveryTime = 3;
  else deliveryTime = 4;
  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  if (isRush) result = result.minusDays(1);
  return result;
}
