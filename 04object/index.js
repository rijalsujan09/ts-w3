console.log("Object is TypeScript");
// const objName : {} = {};
var cars = {
    type: "Toyota",
    model: "Corola",
    year: 2023
};
console.log(cars);
// Type Inference Object
var bike = {
    name: "suzuki"
};
bike.name = "spleandor"; // no error
// bike.name = 3;  // error: not assignable to type string
//  Optional  Properties
// const car1 : {type:string, mileage:number } = {
//     type:"toyota"
// }
// above will  say ERROR because mielage is missing
// for that case
var car1 = {
    name: "toyota" // No error because of optioonal property mileage
};
car1.mileage = 300;
console.log(car1);
// ------------------------------------------------------
// Index Signature
var nameAgeMap = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "50";  // error:  type string is not assignable yo type number
