let totalAscent = calculateAscent();
let totalTime = calculateTime();
let totalDisatance = calculateDisatance();
const pace = totalTime / 60 / totalDisatance;

function calculateAscent() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}
