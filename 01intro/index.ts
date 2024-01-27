console.log("Hello World!");


/*  
   Type Assignment
   .Explicit
   .Implicit  
*/

// Explicit
let fistName: string = "Sujan";

// firstName = 25; 


// Implicit
let lastName = "Rijal";
// lastName = 25;

const  json = JSON.parse("55");
console.log(typeof json)

// => Type: any  = >type any  disables type checking

let u = true;
// u ="string"; // error: type string ia not assignable to boolean
// Math.round(u) // error: argument of type boolean is not assignable to parameter of type 'number'


let v : any = true;
v = "sujan";  // no error as it can be of any  type
Math.round(v); //  no error as it can be of any  type



// => Type: unknown
let w: unknown =1;
w = "string"; // no error
if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }

// => Type: Never
// let x:never = true;  // error : boolean is not assignable to 'never'

// => Type: undefined & null
let y : undefined = undefined;
let z : null = null;
