function example(params) {
  let youngest = youngestAge();

  let totalSalary = totalSalary();

  return `최연소 ${youngest}, 총 급여 ${totalSalary}`;

  function youngestAge() {
    // 알고리즘 교체하기(7.9절)
    return Math.min(...people.map(p => p.age));
  }

  function totalSalary() {
    // 반복문을 파이프라인으로 바꾸기(8.8)
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
