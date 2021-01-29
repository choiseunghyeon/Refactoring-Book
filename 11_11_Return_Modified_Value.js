let totalAscent = 0;
let totalTime = 0;
let totalDisatance = 0;
calculateAscent();
calculateTime();
calculateDisatance();
const pace = totalTime / 60 / totalDisatance;

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}
