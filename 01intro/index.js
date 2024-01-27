console.log("Hello World!");
/*
   Type Assignment
   .Explicit
   .Implicit
*/
// Explicit
var fistName = "Sujan";
// firstName = 25; 
// Implicit
var lastName = "Rijal";
// lastName = 25;
var json = JSON.parse("55");
console.log(typeof json);
// => Type: any  = >type any  disables type checking
var u = true;
// u ="string"; // error: type string ia not assignable to boolean
// Math.round(u) // error: argument of type boolean is not assignable to parameter of type 'number'
var v = true;
v = "sujan"; // no error as it can be of any  type
Math.round(v); //  no error as it can be of any  type
// => Type: unknown
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log('I think therefore I am');
    }
};
