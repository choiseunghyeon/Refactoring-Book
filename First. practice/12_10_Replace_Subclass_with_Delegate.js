// e.g 1 서브 클래스가 하나일 떄
function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  const result = new Booking(show, date, extras);
  result._bePremium(extras);
  return result;
}

class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkBack() {
    return this._premiumDelegate ? this._premiumDelegate.hasTalkBack : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkBack() {
    return this._host._show.hasOwnProperty("talkback");
  }

  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this._host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }
}

function client() {
  aBooking = createBooking(show, date);
}
function client2() {
  aBooking = createPremiumBooking(show, date, extras);
}

// e.g 2 서브 클래스가 여러개일 때

function createBird(bird) {
  return new Bird(bird);
}
class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciedDelegate(data);
  }

  selectSpeciedDelegate(data) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate(data, this);
      case "아프리카 제비":
        return new AfricanSwallowDelegate(data, this);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(data, this);
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
    return this._bird._plumage || "보통이다";
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
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this.voltage > 100) return "그을렸다";
    else return this._bird._plumage || "예쁘다";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this._voltage / 10;
  }
}
