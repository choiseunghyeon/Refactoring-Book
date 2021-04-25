const organization = { name: "최승현", country: "KR" };

function client() {
  let result = "";
  result += `<h1>${organization.name}</h1>`;
  organization.name = "홍길동";
}
