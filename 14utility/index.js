console.log('Utility Types in TypeScript');
var pointPart1 = {
    x: 1,
    y: 2
};
// but 
var pointPart2 = {}; // `Partial` allows  x and y to be optional
var pointPart3 = {
    x: 1,
    y: 2,
    z: "text"
}; // it requires all
// Record => 
var keyVal1 = {
    "firstName": "sujan",
    "lastName": "rijal"
};
var keyval2 = {
    'fname': "sujan",
    'lname': "rijal"
};
console.log(keyVal1);
console.log(keyval2);
var p1 = {
    name: 'sujan'
};
console.log(p1);
var p2 = {
    name: 'sujan',
    age: 25
};
console.log(p2);
var val1 = true;
var val2 = "str";
var val3 = 12;
var point1 = {
    x: 4,
    y: 4
};
console.log(point1);
var point2 = {
    x: 3,
    y: 3
};
console.log(point2);
var person1 = {
    name: 'sujan',
    age: 25
};
// person1.age="xant change" // error: Cannot assign to 'age' because it is a read-only property.
console.log(person1);
