const organization = new Organization({ name: "최승현", country: "KR"});

let  result = `<h1>${getOrganization().name}</h1>`; // 읽기 예
getOrganization().name = "William"; // 쓰기 예

function getOrganization() {return organization;}


// 레코드 캡슐화의 이점은 데이터 조작 방식을 통제할 수 있기 때문
class Organization { 
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() {return this._data.name}
    set name(aString) {this._data.name = aString}

    get country() {return this._data.country}
    set country(aCountryCode) {this._data.country = aCountryCode}
}