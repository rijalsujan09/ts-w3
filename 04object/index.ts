console.log("Object is TypeScript");

// const objName : {} = {};


const cars : {type:string, model:string, year:number} = {
    type : "Toyota",
    model:"Corola",
    year:2023
}

console.log(cars)


// Type Inference Object
const bike = {
    name:"suzuki",
};

bike.name = "spleandor";   // no error
// bike.name = 3;  // error: not assignable to type string


//  Optional  Properties

// const car1 : {type:string, mileage:number } = {
//     type:"toyota"
// }

// above will  say ERROR because mielage is missing

// for that case

const car1 :{name:string, mileage?:number,}= {

name:"toyota"   // No error because of optioonal property mileage

}

car1.mileage = 300;

console.log(car1)

// ------------------------------------------------------

// Index Signature

const nameAgeMap: {[index:string]:number } = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "50";  // error:  type string is not assignable yo type number
