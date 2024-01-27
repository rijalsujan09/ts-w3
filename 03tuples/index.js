// Typles is a type of arryay  with pre defined length and type for each index
// tuple defined
var myTuples = [1, true, "sujan"];
// tuple initilized
// myTuples = [1, true, "sujan"];
console.log(myTuples);
//tuple defined
var myTuples1;
// similarly  initilized incorrectly 
// myTuples1 = ["sujan", false, 12] // error
//  a good practice is  to make tuple a readonly
var ourTuple;
ourTuple = [1, true, "sujan"];
ourTuple.push("rijal"); // no type safety  after index 2
console.log(ourTuple);
// in that case
var tupe = [1, "sujan", true];
// tupe.push(); // error: push doesnot exist on type readonly 
// Named tuples 
var graph1 = [5, 5.5]; // named tuples provides more context for what our index values represent
// Destructuring Tuples
var graph2 = [55.2, 41.3];
var x = graph2[0], y = graph2[1];
