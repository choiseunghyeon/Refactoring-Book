class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._premiumDelegate ? this._premiumDelegate.hasTalkback : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    return this._premiumDelegate ? this._premiumDelegate.basePrice : this._prevateBasePrice;
  }

  get _privateBasePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }
}

// 슈퍼클래스를 상속해 많은 걸 변경한다. 메서드 일부를 오버라이드 하거나 필요한 메서드를 몇개 추가 한다.

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(this._host._prevateBasePrice + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this._host.isPeakDay;
  }
}

function client1() {
  const aBooking = createBooking(show, date);
}

function client2() {
  const aBooking = createPremiumBooking(show, date, extras);
}

function createPremiumBooking() {
  const result = new Booking(show, date, extras);
  result._bePremium(extras);
  return result;
}

function createBooking(show, date) {
  return new Booking(show, date);
}

// 서브클래스가 여러 개일 때
// 상속은 한번만 쓸 수 있으니 종에 따른 분류를 포기하고 야생(wild) 조류와 사육(captivity) 조류로 구분 지을 것이다.

// refactoring 이후 위임으로 옮겨진 종 계층 구조는 더 엄격하게 종과 관련한 내용만을 다루게 되었다. 즉, 위임 클래스들은 종에 따라 달라지는 데이터와 메서드만을 담게 되고 종과 상관없는 공통 코드는 Bird 자체와 미래의 서브클래스들에 남는다.
function createBird(data) {
  return new Bird(data);
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate(this);
      case "아프리카 제비":
        return new AfricanSwallowDelegate(data, this);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._speciesDelegate.plumage;
  }

  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}

class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }

  get plumage() {
    this._bird._plumage || "보통이다.";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._voltage = data._voltage;
    this._isNailed = data.isNailed;
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }

  get plumage() {
    if (this._voltage > 100) return "그을렸다";
    else return this._plumage || "예쁘다";
  }
}
