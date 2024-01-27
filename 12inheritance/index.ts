console.log("Inheritance in  TypeScript");


interface Shape {
    getArea():number;
}

class Rectangle implements Shape{
    length:number;
    width:number;

    constructor(length:number, width:number){
        this.length = length;
        this.width =width;
    }
    
    getArea(): number {
        return this.width*this.length;
    }

    public toString():string{
        return `Recatnge [width=${this.width}, length=${this.length}]`
    }
}


const rect1 = new Rectangle(7,3);
console.log(rect1.getArea());

// Note : A class can implement multiple interfaces like this

interface Geometry{

}
class Circle implements Shape, Geometry{
    radius:number; 

    getArea():number{
        return Math.PI*this.radius**2;
    }



}

// Override

class Square extends Rectangle{
    constructor(public side:number){
        super(length,side)
    }

    public toString(): string {
      return `Recatnge [side=${this.side}`    
    }
}


//  Abstract 
abstract class Polygon{
    abstract getArea():number;

    public toString(){
        return `Polygon[area=${this.getArea()}]`
    }
}

class Recatnge extends Polygon{

    constructor(public l:number, public b:number){
        super();
    }

    getArea(): number {
        return this.l*this.b;
    }
    public toString(): string {
        return `${this.getArea()}`
    }
}