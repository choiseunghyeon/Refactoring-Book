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
  const candidate = createEmployee(document.name, document.empType);
}

function client2() {
  const leadEnginner = createEngineer(document.leadEnginner);
}

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, "E");
}
