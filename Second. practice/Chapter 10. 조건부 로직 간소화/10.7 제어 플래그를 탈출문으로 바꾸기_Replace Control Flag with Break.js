// 사람 목록을 흝으면서 악당을 찾는다.

let found = false;
for (const p of people) {
  if (!found) {
    if (p === "조커") {
      sendAlert();
      found = true;
    }
    if (p === "사루만") {
      sendAlert();
      found = true;
    }
  }
}
