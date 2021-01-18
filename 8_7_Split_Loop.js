function splitLoop() {
  return `최연소 ${youngestAge()}, 총 급여 ${totalSalary()}`;
}

function totalSalary() {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}

// split loop is for next step like Replace loop with pipe line / Substitute Algorithm
function splitLoop() {
  return `최연소 ${youngestAge()}, 총 급여 ${totalSalary()}`;
}

function totalSalary() {
  return people.reduce((total, p) => total + p.salary);
}

function youngestAge() {
  return Math.min(...people.map(p => p.age));
}
