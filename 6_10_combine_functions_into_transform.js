function acquireReading() {
  const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  return reading;
}

// client1
function client1() {
  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// client2
function client2() {
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
}

// client3
function client3() {
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
