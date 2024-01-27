console.log("Casting in TypeScript");

// Casting with as

let x: unknown = "hello";
console.log((x as string).length);


let y: unknown = 5;
console.log((y as string).length); // prints undefined because casting doesnot actually change type


// Casting with  <>
let  z:unknown = "random text";
console.log((<string>z).length)

// Force Casting 
let p = 'hello';
console.log(((p as unknown) as number).length);
