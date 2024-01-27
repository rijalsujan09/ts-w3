// Typles is a type of arryay  with pre defined length and type for each index


// tuple defined
let myTuples : [number, boolean, string]= [1, true, "sujan"];

// tuple initilized
// myTuples = [1, true, "sujan"];
console.log(myTuples)


//tuple defined
let myTuples1 : [string, number, boolean];

// similarly  initilized incorrectly 
// myTuples1 = ["sujan", false, 12] // error


//  a good practice is  to make tuple a readonly

let ourTuple : [number, boolean, string];
ourTuple = [1,true,"sujan"];
ourTuple.push("rijal");  // no type safety  after index 2
console.log(ourTuple)  

// in that case

let tupe : readonly [number, string, boolean] = [1,"sujan", true];
// tupe.push(); // error: push doesnot exist on type readonly 


// Named tuples 
const graph1 : [z:number, q:number] =[5, 5.5];  // named tuples provides more context for what our index values represent


// Destructuring Tuples
const graph2: [number, number] = [55.2,41.3];
const[x,y] = graph2;
