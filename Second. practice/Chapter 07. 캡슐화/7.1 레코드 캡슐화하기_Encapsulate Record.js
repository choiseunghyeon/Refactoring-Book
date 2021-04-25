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
