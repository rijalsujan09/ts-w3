console.log('Utility Types in TypeScript');


// Partial
interface Point{
    x:number;
    y:number;
    z?:string;
}

let pointPart1: Point ={
    x:1,
    y:2,
}

// but 

let pointPart2 : Partial<Point> = {} // `Partial` allows  x and y to be optional

let pointPart3 : Required<Point> = {
    x:1,
    y:2,
    z:"text",
} // it requires all


// Record => 
const keyVal1 : Record<string, string> ={
    "firstName":"sujan",
    "lastName":"rijal"
}


const keyval2 : {[key:string]:string} = {
'fname':"sujan",
'lname':"rijal",
}

console.log(keyVal1);
console.log(keyval2);

// Omit and Pick => 

interface Person {
    name:string;
    age:number;
    location:string;
}

const p1 : Omit<Person, 'age'| 'location'> ={
name:'sujan',
}
console.log(p1);

const p2 : Pick<Person, 'name' | 'age'> ={
    name:'sujan',
    age:25,
}
console.log(p2);

// Exclude 

type Primitive = string | number | boolean
const val1 :Exclude<Primitive, string> = true;
const val2 :Exclude<Primitive, number> = "str";
const val3 :Exclude<Primitive, boolean> = 12;


// ReturnType
type PointGenerator = () =>{x:number, y:number};
const point1 : ReturnType<PointGenerator> = {
    x:4,
    y:4
}
console.log(point1);

// Parameters
type PoinPrinter = (p :{x:number, y:number}) => void;

const point2 : Parameters<PoinPrinter>[0] ={
x:3,
y:3,
}
console.log(point2);


// Readonly

interface Perso {
    name:string;
    age:number;
}


const person1 : Readonly<Perso> ={
    name :'sujan',
    age:25,
}

// person1.age="xant change" // error: Cannot assign to 'age' because it is a read-only property.
console.log(person1);
