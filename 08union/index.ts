console.log("Union in TypeScript");

// Union Types are used whrn value are more than a single type

// Union | (OR) 


const printStatusCode = (v:string|number):string =>{
    if(typeof v === "number"){
        return v+" OK"
    }
    else return `${v.toUpperCase} OK`
}


let x: string = printStatusCode(200);
let y: string  = printStatusCode("200");


console.log(x);
console.log(y);


// Union Type Errors

function getStatusCode(code:string|number){
// console.log(`status code is ${code.toUpperCase}`); // error
}

// this kind of error can occur so  checking is required befor further opertation