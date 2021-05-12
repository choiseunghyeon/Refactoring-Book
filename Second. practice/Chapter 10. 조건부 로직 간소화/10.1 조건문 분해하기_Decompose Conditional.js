function someFunc() {
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summer;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
