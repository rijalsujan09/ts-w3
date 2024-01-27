console.log("Interface in TypeScript");

interface Rectangle {
    height : number,
    width : number,

    getArea(h:number, w:number):number,
}

const rectangle: Rectangle = {
    height: 7,
    width : 3,

    getArea(h:number, w:number):number{
        // some calculation
     return h*w;
    }
}


let area: number;
area = rectangle.getArea(7,3);
console.log(area);


interface ColoredRectange extends Rectangle{
color:string
}

const colorRectangle : ColoredRectange = {
    height: 7,
    width : 3,
    color:"red",

    getArea(h:number, w:number):number{
        // some calculation
        return h*w;
    }
}