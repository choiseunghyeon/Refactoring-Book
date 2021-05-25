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
function createBird(data) {
  switch (data.type) {
    case "유럽 제비":
      return new EuropeanSwallow(data);
    case "아프리카 제비":
      return new AfricanSwallow(data);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(data);
    default:
      return new createBird(data);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
  }

  get name() {
    return this._name;
  }
  get plumage() {
    return this._plumage || "보통이다";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor(data) {
    super(data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data._voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) return "그을렸다";
    else return this._plumage || "예쁘다";
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}
