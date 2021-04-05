/**
 * 연극을 외주로 받아서 공연하는 극단이다.
 * 공연 요청이 들어오면 연극의 장르와 관객 규모를 기초로 비용을 책정
 * 비극, 희극만 공연하며 공연료와 별개로 포인트를 지급해서 다음 의뢰시 할인을 해준다.
 */
import invoice from "./invoices.js";
import plays from "./plays.js";
console.log(statement(invoice[0], plays));
function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer}\n)`;
  const format = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

  for (let perf of invoice.performances) {
    let thisAmount = 0;

    thisAmount = amountFor(perf);

    //포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    //희극 관객 5명 마다 추가 포인트를 제공한다.
    if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다.
    result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience}석\n)`;
    totalAmount += thisAmount;
  }
  result += `총액 ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
  }
}
