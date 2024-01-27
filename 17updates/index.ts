console.log('Updates in TypeScript');

type Color = "red" | "green" | "blue";

type HexColor<T extends Color > = `#${string}`;

let myColor : HexColor<"blue"> = "#0000FF";

console.log(myColor);


// Index Signature labels

// type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// let obj: DynamicObject = { dynamic_key: "value" };