class Shipment {
  get shippingCompany() {
    return this._shippingCompany;
  } // 배송 회사
  set shippingCompany(arg) {
    return (this._shippingCompany = arg);
  }
  get trackingNumber() {
    return this._trackingNumber;
  } // 추적 번호
  set trackingNumber(arg) {
    return (this._trackingNumber = arg);
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

function client1() {
  aShipment.shippingCompany = request.vender;
}
