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
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
  get courses() {
    return this._courses.slice();
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
  basicCoursenames.forEach(name => aPerson.addCourse(new Course(name, false)));
}

function client3(params) {
  for (const name of readBasicCourseNames(filename)) {
    // 컬렉션을 제어할 수 없어서 캡슐화가 깨진다.
    aPerson.courses.addCourse(new Course(name, false));
  }
}
