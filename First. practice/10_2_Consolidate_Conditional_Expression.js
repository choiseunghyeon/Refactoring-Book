function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;
  // 장애 수당 계산

  // e.g AND Before
  //   if (anEmployee.onVacation) {
  //     if (anEmployee.seniority > 10) {
  //       return 1;
  //     }
  //   }
  //   return 0.5;

  // e.g AND After
  if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
  return 0.5;

  function isNotEligibleForDisability() {
    //장애 수당 적용 여부 확인
    return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
  }
}
