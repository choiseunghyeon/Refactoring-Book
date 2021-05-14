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
    return createRating(voyage, history).value;
}

function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some(v => "중국" === v.zone )) return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history);
}

class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() {// 항해 경로 위험요소
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }
    
    get captainHistoryRisk() {//선장의 항해 이력 위험요소
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        return Math.max(result, 0);
    }
    
    get hasChina() {//중국을 경유하는가?
        return this.history.some(v => "중국" === v.zone);
    }
    
    get voyageProfitFactor() {//수익 요인
        let result = 2;
        if (this.voyage.zone === "중국") result +=1;
        if (this.voyage.zone === "동인도") result +=1;
        result += this.historyLengthFactor;
        result += this.voyageLengthFactor;
        return result;
    }

    get voyageLengthFactor() {
        return (this.voyage.length > 14) ? -1 : 0;
    }

    historyLengthFactor() {
        return (this.history.length > 8) ? 1 : 0;
    }
}

class ExperiencedChinaRating extends Rating {
    get captainHistoryRisk() {//선장의 항해 이력 위험요소
        const result = super.captainHistoryRisk - 2;
        return Math.max(result , 0);
    }

    get voyageProfitFactor () {
        return super.voyageProfitFactor + 3;
    }
    get voyageLengthFactor () {
        let result = 0;
        if (this.history.length > 12) result += 1;
        if (this.history.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor () {
        return (this.history.length > 10) ? 1 : 0
    }
}