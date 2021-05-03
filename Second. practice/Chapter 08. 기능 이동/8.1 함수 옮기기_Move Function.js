// 중첩 함수를 최상위로 옮기기
function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace,
  };

  function calculateTime() {} // 총 시간 계산
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function distance(p1, p2) {
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(radians(p2.lat)) * Math.cos(radians(p1.lat)) * Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
} // 두 지점의 거리 계산

function radians(degrees) {
  return (degrees * Math.PI) / 180;
} // 라디안 값으로 변환

// 다른 클래스로 옮기기
class Acount {
  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    // 초과 인출 이자 계산
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + this._daysOverdrawn - 7 * 0.85;
    } else {
      return this._daysOverdrawn * 1.75;
    }
  }
}

class AccountType {}
