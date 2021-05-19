// 실내온도 모니터링 시스템 / 일일 최저, 쵝 ㅗ기온이 난방 계획에서 정한 범위를 벗어나는지 확인

function client() {
  if (!applicationCache.withinRange(aRoom.daysTempRange)) alerts.push("방 온도가 지정된 범위를 벗어났습니다.");
}
class HeatingPlan {
  withinRange(aNumberRange) {
    return aNumberRange.low >= this._temperaturRange.low && aNumberRange.high <= this._temperaturRange.high;
  }
}
