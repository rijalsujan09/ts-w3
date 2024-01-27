console.log('Key in TypeScript');
function printPersinProperty(person, property) {
    console.log("Printing person property:\n".concat(property, " => ").concat(person[property]));
}
var person = {
    name: "sujan",
    age: 25
};
printPersinProperty(person, "name");
printPersinProperty(person, "age");
function createStringpair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
console.log(createStringpair(("name"), "sujan"));
