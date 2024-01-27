console.log('Classes in TypeScript');

// Members : Types
class User {
    name:string;
    email:string;
    age:number
}

const user1 = new User();

user1.name= "sujan";
user1.email="r@r.io";
user1.age= 25;

console.log(user1);


// access modifier
// - public  => can be access any where 
// - private => can be accessed only within class
// - protected => can be accesseed only within class and extended class
// - ReadOnly => can be accessed anywher but read only 


class Person {
    private  name: string;

    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }
}

const person1 = new Person("Sujan Rijal");
// person1.name = "rijalsujan09" // error : name property is private
// but
console.log(person1.getName()); 


// similarly Parameter Properties


class Student{
    constructor(private name:string, readonly age:number){}

    getName():string{
        return this.name
    }
    getAge():number{
        return this.age;
    }
}

const student1 = new Student("Sita Ram", 6000);
// student1.age=7000;  // error : cannot assign value because property age is readonly
console.log(student1.getName());
console.log(student1.getAge());

