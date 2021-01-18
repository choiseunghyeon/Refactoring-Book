// office, country, telephone
// Chicago, USA, +1 123 456 7890
// Chennai, India, +91 12 345 67898
// ... 중략
function acquireData(input) {
  const lines = input.split("\n");
  let fisrtLine = true;
  const result = [];
  for (const line of lines) {
    if (fisrtLine) {
      fisrtLine = false;
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
