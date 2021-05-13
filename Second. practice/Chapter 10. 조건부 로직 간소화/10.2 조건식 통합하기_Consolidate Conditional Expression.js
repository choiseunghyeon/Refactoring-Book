// or 사용하기
function disabliltyAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  function isNotEligibleForDisability() {
    return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
  }
  //장애 수당 계산
}

// and 사용하기

function eg(anEmployee) {
  if (anEmployee.onVacation && anEmployee.seniority > 10) {
    return 1;
  }
  return 0.5;
}
