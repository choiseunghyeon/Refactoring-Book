// 예시를 위한 CSV 데이터

/*
office, country, telephone
Chicago, USA, +1 312 373 1000
Bangalore, India, +91 80 406 9570
*/

// 인도에 자리한 사무실을 찾아서 도시명과 전화번호를 반환

function acquireData(input) {
  const lines = input.split("\n");
  return lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(","))
    .filter(fields => fields[1].trim() === "India")
    .map(fields => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}
