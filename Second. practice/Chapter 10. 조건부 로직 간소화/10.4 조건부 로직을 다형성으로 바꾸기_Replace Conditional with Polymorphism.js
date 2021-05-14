// 새의 종에 따른 비행 속도와 깃털 상태를 알고 싶다.

function plumages(birds) {
  return new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.plumage]));
}

function speeds(birds) {
  return new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
    switch (this.type) {
        case "유럽 제비":
          return new EuropeanSwallow(bird);
        case "아프리카 제비":
            return new AfricanSwallow(bird);
        case "노르웨이 파랑 앵무":
            return new NorwegianBlueParrot(bird);
        default:
          return new Bird(bird);
      }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    //깃털 상태
    return "알 수 없다";
  }

  get airSpeedVelocity(this) {
    //비행 속도
    return null;
  }
}


class EuropeanSwallow extends Bird {
    get plumage() {
        return "보통이다";
    }

    get airSpeedVelocity() {
        return 35;
    }
}
class AfricanSwallow extends Bird {
    get plumage() {
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }

    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}
class NorwegianBlueParrot extends Bird {
    get plumage() {
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
    }

    get airSpeedVelocity() {
        return this.isNailed ? 0 : 10 + this.voltage / 10;
    }
}

// 변형 동작을 다형성으로 표현하기
// 신용 평가 기관에서 선박의 항해 투자 등급을 계산한다.

function rating(voyage, history) {//투자 등급
    const vpf = voyageProfileFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
}

function voyageRisk(voyage) {// 항해 경로 위험요소
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["중국", "동인도"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {//선장의 항해 이력 위험요소
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "중국" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina(history) {//중국을 경유하는가?
    return history.some(v => "중국" === v.zone);
}

function voyageProfileFactor(voyage, history) {//수익 요인
    let result = 2;
    if (voyage.zone === "중국") result +=1;
    if (voyage.zone === "동인도") result +=1;
    if (voyage.zone === "중국" && hasChina(history)) {
        result +=3;
        if (history.length > 10) result +=1;
        if (history.length > 12) result +=1;
        if (history.length > 18) result -=1;
    } else {
        if (history.length > 8) result +=1;
        if (history.length > 14) result -=1;
        
    }
    return result;
}

function client () {
    const voyage = {zone: "서인도", length: 10}
    const history = [
        {zone: "동인도", profit: 5},
        {zone: "서인도", profit: 15},
        {zone: "중국", profit: -2},
        {zone: "서아프리카", profit: 7},
        
    ]
    const myRating = rating(voyage, history);
}