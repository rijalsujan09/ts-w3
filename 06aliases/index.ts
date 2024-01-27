console.log("Aliases in TypeScript");

type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear,
    type:CarType,
    model:CarModel,
}


const carYear = 2023;
const carType = "toyota";
const carModel = "corola";

const car: Car = {
    year:carYear,
    type:carType,
    model:carModel,
};


console.log(car ,  " ==>",typeof(car) );