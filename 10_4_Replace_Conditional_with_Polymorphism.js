// e.g 1
function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  // 깃털 상태, 로직은 알 필요 없음
  switch (bird.type) {
    case "유럽 제비":
      return "보통이다";
    case "아프리카 제비":
      return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    case "노르웨이 파랑 앵무":
      return bird.voltage > 100 ? "그을렸다" : "예쁘다";
    default:
      return "알 수 없다.";
  }
}

function airSpeedVelocity(bird) {
  // 비행 속도, 로직은 알 필요 없음
  switch (bird.type) {
    case "유럽 제비":
      return 35;
    case "아프리카 제비":
      return 40 - 2 * bird.numberOfCoconuts;
    case "노르웨이 파랑 앵무":
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

// e.g 2
function rating(voyage, history) {
  // 투자 등급
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) return "A";
  else return "B";
}

function voyageRisk(voyage) {
  // 항해 경로 위험 요소
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length) result += voyage.length - 8;
  if (["중국", "동인도"].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
  // 선장의 항해 이력 위험요소
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === "중국" && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}

function hasChina(history) {
  //중국을 경유하는가?
  return history.some(v => "중국" === v.zone);
}

function voyageProfitFactor(voyage, history) {
  // 수익 요인
  let result = 2;
  if (voyage.zone === "중국") result += 1;
  if (voyage.zone === "동인도") result += 1;
  if (voyage.zone === "중국" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
}
