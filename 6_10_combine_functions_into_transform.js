function acquireReading() {
  const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  return reading;
}

// client1
function client1() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
}

// client2
function client2() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;
}

// client3
function client3() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/**
 * 정보를 추가해 반환할 때는 원본이 변경되지 않아야 한다.
 * test code
 * it('check reading unchanged', function() {
 *  const baseReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
 *  const oracle = _.cloneDeep(baseReading);
 *  enrichReading(baseReading);
 *  assert.deepEqual(baseReading, oracle);
 * })
 */
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}
