// 예시를 위한 CSV 데이터

/*
office, country, telephone
Chicago, USA, +1 312 373 1000
Bangalore, India, +91 80 406 9570
*/

// 인도에 자리한 사무실을 찾아서 도시명과 전화번호를 반환

function acquireData(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}
