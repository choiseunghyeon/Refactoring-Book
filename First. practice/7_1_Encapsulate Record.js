// 수정 전
const organization = { name: "최승현", country: "KR"};
let  result = `<h1>${organization.name}</h1>`; // 읽기 예
organization.name = "William"; // 쓰기 예

// 수정 후 
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

const organization = new Organization({ name: "최승현", country: "KR"});
function getOrganization() {return organization;}

let  result = `<h1>${getOrganization().name}</h1>`; // 읽기 예
getOrganization().name = "William"; // 쓰기 예
