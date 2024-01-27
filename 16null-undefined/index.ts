console.log('Null in TypeScript');

let val : string | undefined | null = null;

console.log(val);
val = "sujan";
console.log(val);
val = undefined;
console.log(val);

// optional Chaining

interface House {
    sqft : number;
    yard?:{
        sqft:number;
    };
}



let printyardSize = (house:House) =>{

    const yardSize = house.yard?.sqft;

    if(yardSize === undefined){
        console.log('No Yard');
    }else{
        console.log(`yard size is ${yardSize}`);
    }
}


let house : House ={
    sqft : 2500,
    yard:{
        sqft:7500
    }
};


printyardSize(house);


// Nullish Coalesence

function printMileage(mileage : number | null | undefined){
    console.log(`Mileage : ${mileage ?? 'Not avialable'}`); 
}
let x ;
printMileage(null);
printMileage(x);
printMileage(123);


// Null Assertion 
function getValue(): string | undefined {
    return "str"
}

let value = getValue();
console.log('value legth : '+value!.length);


// Array  bounds handelling
let array: number[] = [1,2,3];

let val1 : number = array[0];