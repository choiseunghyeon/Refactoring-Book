class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get LegalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesperson" };
  }
}

function client1() {
  const candidate = new Employee(document.name, document.empType);
}

function client2() {
  const leadEnginner = new Employee(document.leadEnginner, "E");
}
