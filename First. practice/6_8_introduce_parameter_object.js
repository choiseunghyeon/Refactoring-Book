// 매개변수 객체 만들기

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 41, time: "2016-11-10 09:50" },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  contains(temperature) {
    return temperature >= this.min && temperature <= this.max;
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

const range = new NumberRange(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

const alerts = readingOutsideRange(station, range);

function readingOutsideRange(station, range) {
  return station.readings.filter(r => !range.contains(r.temp));
}
