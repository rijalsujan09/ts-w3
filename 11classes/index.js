console.log('Classes in TypeScript');
// Members : Types
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user1 = new User();
user1.name = "sujan";
user1.email = "r@r.io";
user1.age = 25;
console.log(user1);
// access modifier
// - public  => can be access any where 
// - private => can be accessed only within class
// - protected => can be accesseed only within class and extended class
// - ReadOnly => can be accessed anywher but read only 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person1 = new Person("Sujan Rijal");
// person1.name = "rijalsujan09" // error : name property is private
// but
console.log(person1.getName());
// similarly Parameter Properties
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}());
var student1 = new Student("Sita Ram", 6000);
// student1.age=7000;  // error : cannot assign value because property age is readonly
console.log(student1.getName());
console.log(student1.getAge());
