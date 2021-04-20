// 유효 범위를 벗어나는 변수가 없을 때

function printOwing(invoice) {
  let outstanding = 0;
  printBanner();

  // 미해결 채무(outStanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일 (dueDate)을 기록한다.
  const today = Clock.today;
  invoice.duDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetail();

  function printDetail() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
  }

  function printBanner() {
    console.log("*************");
    console.log("*** 고객 채무 ***");
    console.log("*************");
  }
}

// 지역 변수를 사용할 때
function printOwing(invoice) {
  let outstanding = 0;
  printBanner();

  // 미해결 채무(outStanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.duDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
}

function printBanner() {
  console.log("*************");
  console.log("*** 고객 채무 ***");
  console.log("*************");
}

// 지역 변수의 값을 변경할 때
function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.duDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
}

function printBanner() {
  console.log("*************");
  console.log("*** 고객 채무 ***");
  console.log("*************");
}
