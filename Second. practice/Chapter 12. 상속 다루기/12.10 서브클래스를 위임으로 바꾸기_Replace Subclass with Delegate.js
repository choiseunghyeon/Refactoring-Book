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
