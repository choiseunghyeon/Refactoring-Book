class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    return (this._courses = aList);
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

function client(aPerson) {
  const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
}

function client2(params) {
  const basicCoursenames = readBasicCourseNames(filename);
  aPerson.courses = basicCoursenames.map(name => new Course(name, false));
}

function client3(params) {
  for (const name of readBasicCourseNames(filename)) {
    // 컬렉션을 제어할 수 없어서 캡슐화가 깨진다.
    aPerson.courses.push(new Course(name, false));
  }
}
