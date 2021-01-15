class TrackingInformation {
  get shippingCompany() {
    return this._shippingCompany;
  } // 배송 회사
  set shippingCompany(arg) {
    return (this._shippingCompany = arg);
  }
  get trackingNumber() {
    return this._trackingNumber;
  } // 추적 번호
  get trackingNumber(arg) {
    return (this._trackingNumber = arg);
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    return (this._trackingInformation = aTrackingInformation);
  }
}

function client1() {
  aShipment.trackingInformation.shippingCompany = request.vender;
}
