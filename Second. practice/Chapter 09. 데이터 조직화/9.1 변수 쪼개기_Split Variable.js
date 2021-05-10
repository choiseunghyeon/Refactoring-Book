// 해기스라는 음식이 다른 지역으로 전파된 거리를 구하는 코드
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    //두 번째 힘을 반영해 다시 계산
    let primaryVelocity = primaryAcceleration * scenario.delay;
    let secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

// 입력 매개변수의 값을 수정할 때
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
