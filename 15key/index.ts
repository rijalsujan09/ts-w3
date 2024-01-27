console.log('Key in TypeScript');

interface Person{
    name:string;
    age:number;
}


function printPersinProperty(person:Person, property:(keyof Person)){
console.log(`Printing person property:\n${property} => ${person[property]}`);
}

const person : Person ={
    name:"sujan",
    age:25
}

printPersinProperty(person, "name")
printPersinProperty(person, "age")

// key  with index signature

type stringMap = {[key:string]:unknown};

function createStringpair (property:(keyof stringMap), value:string){
    return {[property]:value}
}


console.log(createStringpair(("name"), "sujan"));
