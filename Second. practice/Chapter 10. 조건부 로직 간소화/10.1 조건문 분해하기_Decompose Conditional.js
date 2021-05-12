function someFunc() {
  charge = summer() ? summerCharge() : regularCharge();

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  function summerCharge() {
    return quantity * plan.summer;
  }

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }
}
