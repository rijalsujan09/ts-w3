console.log('Generic TypeScript');


function creatpairs<T,U>(x:T, y:U):[T, U]{
    return [x, y];
}

console.log(creatpairs("Sujan",15));


// Generics in clases
//  --> generic can be used to careate generalized classes like Map.

class Namedvalue<T>{
    _value:T|undefined

    constructor(public name:string){}

    public setvalue(_value:T){
        this._value = _value;
    }

    public getValue(): T|undefined{
        return this._value;
    }

    public toString():string{
        return `name = ${this.name} \nvalue = ${this._value}`
    }
}


const nameValue = new Namedvalue("Sujan");
nameValue.setvalue("Rijal");
console.log(nameValue.getValue());

console.log(nameValue.toString());



// Generic in Type Aliases

type Wrapped<T> = {
    value:T
};

const wrappedVal1:Wrapped<number> = {
    value:10
}

const wrappedVal2:Wrapped<string> = {
    value:'txt'
}

// Default in generics

class KeyValue<T = string>{
    private _key :number;
    private _value:T;

    constructor( _key:number,  _value:T){
        this._key = _key;
        this._value = _value;
    }

    public toString():string{
        return `key = ${this._key} and type = ${typeof(this._key)}\nvalue = ${this._value} and type = ${typeof(this._value)}`
    }
}


let keyVal1 = new KeyValue(1, 25);
console.log(keyVal1.toString());

let keyVal2 = new KeyValue(1, "sujan");
console.log(keyVal2.toString());


// Extends in Generics

function createLoggedpairs<S extends string|number|boolean,U extends string | number>(a1:S, b1:U):[S, U]{
console.log(`a1 = ${a1} and type = ${typeof(a1)}\nb = ${b1} and type = ${typeof(b1)}`);
return [a1,b1];
}


console.log(createLoggedpairs(1,"sujan"));

console.log(createLoggedpairs("sujan",1));

console.log(createLoggedpairs(true,1));

