// e.g 1
function distanceTravelled (scenario, time) {
    const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도 (a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    let result = 0.5 * primaryAcceleration * primaryTime * primaryTime; //전파된 거리
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) { // 두 번째 힘을 반영해 다시 게산
        let primaryVelocity = primaryAcceleration * scenario.delay;
        let secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
    }
    return result;
}

// e.g 2
function discount (inputValue, quantity) {
    let result = inputValue;
    if (inputValue > 50) result = result - 2;
    if (quantity > 100) result = result -1;
    return result; 
}