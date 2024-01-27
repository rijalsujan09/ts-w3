"use strict";
console.log('Function in TypeScript');
// Return Type in Function
function getMyTime() {
    const date = new Date();
    console.log(`${date.getTime()}`);
    return date.getTime();
}
getMyTime();
// void Return Type in Function
function printHello() {
    console.log("Hello  from TypeScript Function..");
}
printHello();
// function  with parameters
function getSum(a, b) {
    return a + b;
}
// function  with optional parameter
function getMultiply(a, b, c) {
    return a * b;
}
getMultiply(1, 3);
// default parameter in function
function getSubstract(a, b, c = 3) {
    return a - b;
}
// Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
//  Rest  Parameters 
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
let nums = [1, 2, 3, 4, 5];
let result = nums.reduce((a, b) => { return a + b; });
console.log(`${result}`);
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
