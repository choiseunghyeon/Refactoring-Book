/*
    계산이 두 단계로 이뤄져 있다.
    앞의 몇 줄은 상품 정보를 이용해서 결제 금액 중 상품 가격을 계산
    뒤의 코드는 배송 정보를 이용하여 결제 금액 중 배송비를 계산한다.
    나중에 상품 가격과 배송비 계산을 더 복잡하게 만드는 변경이 생긴다면 이 코드는 두 단계로 나누는 것이 좋다.
*/
function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;

  const shippingPerCase = basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;

  const price = basePrice - discount + shippingCost;
  return price;
}
