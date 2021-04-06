/**
 * 연극을 외주로 받아서 공연하는 극단이다.
 * 공연 요청이 들어오면 연극의 장르와 관객 규모를 기초로 비용을 책정
 * 비극, 희극만 공연하며 공연료와 별개로 포인트를 지급해서 다음 의뢰시 할인을 해준다.
 */
import invoice from "./invoices.js";
import plays from "./plays.js";
import createStatementData from "./createStatementData.js";
console.log(statement(invoice[0], plays));
function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}
function usd(aNumber) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(aNumber / 100);
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer}\n)`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석\n)`;
  }

  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumneCredits}점\n`;
  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";
  for (const perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>`;
  result += `<p>적립 포인트: <em>${usd(data.totalVolumneCredits)}</em>점</p>`;
  return result;
}
