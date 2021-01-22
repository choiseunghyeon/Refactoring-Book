// 중첩 조건문을 보호 구문으로 바꾸기

// e.g 1
function payAmount(employee) {
  let result;
  if (employee.isPeparated) {
    //퇴사한 직원인가?
    result = { amount: 0, reasonCode: "SEP" };
  } else {
    if (employee.isRetired) {
      // 은퇴한 직원인가?
      result = { amount: 0, reasonCode: "RET" };
    } else {
      // 급여 계산 로직
      lorem.ipsum(dolor.sitAmet);
      consectetur(adipiscing).elit();
      sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      result = someFinalComputation();
    }
  }
  return result;
}

// e.g 2 조건 반대로 만들기
function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}
