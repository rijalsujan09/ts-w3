console.log('Function in TypeScript');

// Return Type in Function
function getMyTime():number{

    const date  = new Date();
    console.log(`${date.getTime()}`);
    
    return date.getTime();
}
getMyTime();

// void Return Type in Function
function printHello():void{
    console.log("Hello  from TypeScript Function..");
    
}
printHello();

// function  with parameters
function getSum(a:number, b:number):number{
    return a+b;
}


// function  with optional parameter
function getMultiply(a:number, b:number, c?:number){
    return a*b;
}
getMultiply(1,3);

// default parameter in function
function getSubstract(a:number, b:number, c:number=3){
    return a-b;
}


// Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

//  Rest  Parameters 
function add(a:number, b:number, ...rest:number[]){
    return a + b+rest.reduce((p,c) => p+c, 0); 
}


let nums : number[] = [1,2,3,4,5];

let result : number = nums.reduce(
    (a,b)=> {return a+b})
console.log(`${result}`);


//  type Aliases
type Negate = (value : number) => number;

const negateFunction:Negate = (value) => value * -1;

console.log(negateFunction(10));

