
const firstNames : string[] = [];
// or
const myNums : Array<number> = [];

firstNames.push("sujan");
firstNames.push("suman");
firstNames.push("Bhuwan");
// firstName.push(3); // not allowed

let lastName :string = "rijal";

let fullnames : Array<string> = [];

function getFullname(firstNams:string[], lastNam:string):string[]{
    firstNams.map( e => `${e} ${lastNam}`).forEach(elem => fullnames.push(elem));

    console.log(fullnames)
    return fullnames;
}

getFullname(firstNames, lastName);

// lastNames.push("rijal"); // not allowed
myNums.push(1);
myNums.push(2);
myNums.push(3);

// ---------------------------------------

// Readonly

const names : readonly string[] = ["sujan", "suman"];
// names.pussh("sujan") // error : Property push doesnot exist in type readonly stirng[]

// Type inference

const nums = [1,2,3]; //infered type number
nums.push(4) // that is allowed
// nums.push("5") // that is not allowed

let head : number = nums[1] // no error