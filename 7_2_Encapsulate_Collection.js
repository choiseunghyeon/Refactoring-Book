// 수정 전
class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {return this._courses._name;}
    get courses() {return this._courses;}
    set courses(aList) {return this._courses = aList;}
    
}

class Courses {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() {return this._name;}
    get isAdvanced() {return this._isAdvanced;}
}


// 사용 예
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;

function client1 () {
    const basicCourseNames = readBasicCourseNames(filename);
    aPerson.courses = basicCourseNames.map(new Courses(name, false));
}

function client2 () {
    for (const name of readBasicCourseNames(filename)) {
        aPerson.courses.push(new Courses(name, false));
    }
}


// 수정 후
class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {return this._courses._name;}
    get courses() {return this._courses.slice();}

    addCourse(aCourse) {
        this._courses.push(aCourse);
    }

    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}

class Courses {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() {return this._name;}
    get isAdvanced() {return this._isAdvanced;}
}


// 사용 예
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;

function client1 () {
    const basicCourseNames = readBasicCourseNames(filename);
    // push로 바로 접근 한다면 원본이 아닌 복사본을 변경하게 된다.
    // 따라서 원본에 수정을 하고 싶다면 클래스에서 제공하는 인터페이스 사용
    aPerson.courses.addCourse(new Courses(name, false));
}

function client2 () {
    for (const name of readBasicCourseNames(filename)) {
        aPerson.courses.addCourse(new Courses(name, false));
    }
}