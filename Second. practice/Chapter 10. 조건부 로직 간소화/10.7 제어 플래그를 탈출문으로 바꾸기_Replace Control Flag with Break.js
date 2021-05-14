// 사람 목록을 흝으면서 악당을 찾는다.

// 생략
checkForMiscreants(people);
// 생략
function checkForMiscreants(people) {
  for (const p of people) {
    if (p === "조커") {
      sendAlert();
      return;
    }
    if (p === "사루만") {
      sendAlert();
      return;
    }
  }

  /*
   다음과 같이 변경하는것도 깔끔하다.
   if (people.some(p => ["조커", "사루만"].includes(p))) sendAlert();
   */
}
