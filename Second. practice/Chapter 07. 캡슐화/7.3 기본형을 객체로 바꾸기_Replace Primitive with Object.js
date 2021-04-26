class Order {
  constructor(data) {
    this.priority = data.priority;
    // 등
  }
}

function client(orders) {
  const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
}
