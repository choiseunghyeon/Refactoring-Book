// office, country, telephone
// Chicago, USA, +1 123 456 7890
// Chennai, India, +91 12 345 67898
// ... 중략
function acquireData(input) {
  const lines = input.split("\n");
  return lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(","))
    .filter(fields => fields[1].trim() === "India")
    .map(fields => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}
