// 간단한 레코드 캡슐화하기
const organization = new Organization({ name: "최승현", country: "KR" });
function getOrganization() {
  return organization;
}

function client() {
  let result = "";
  result += `<h1>${getOrganization().name}</h1>`;
  getOrganization().name = "홍길동";
}

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    return (this._country = aCountryCode);
  }
}

// 중첩된 레코드 캡슐화하기

const customerData = new CustomerData({
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 등
      },
      2015: {
        1: 70,
        2: 63,
        // 등
      },
    },
  },
  38673: {
    name: "닐 포드",
    id: "38673",
    // 등
  },
});

function getCustomerData() {
  return customerData;
}

function client() {
  //쓰기
  getCustomerData().setUsage(customerID, year, month, amount);
  // 읽기
  function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return { laterAmount: later, change: later - earlier };
  }
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  usage(customerID, year, month) {
    this._data[customerID].usages[year][month];
  }
}
