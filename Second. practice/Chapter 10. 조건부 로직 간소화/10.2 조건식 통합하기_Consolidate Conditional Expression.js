// or 사용하기
function disabliltyAmount(anEmployee) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  //장애 수당 계산
}

// and 사용하기

function eg(anEmployee) {
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) {
      return 1;
    }
  }
  return 0.5;
}
