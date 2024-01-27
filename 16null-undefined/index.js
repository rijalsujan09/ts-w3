console.log('Null in TypeScript');
var val = null;
console.log(val);
val = "sujan";
console.log(val);
val = undefined;
console.log(val);
var printyardSize = function (house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No Yard');
    }
    else {
        console.log("yard size is ".concat(yardSize));
    }
};
var house = {
    sqft: 2500,
    yard: {
        sqft: 7500
    }
};
printyardSize(house);
// Nullish Coalesence
function printMileage(mileage) {
    console.log("Mileage : ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not avialable'));
}
var x;
printMileage(null);
printMileage(x);
printMileage(123);
// Null Assertion 
function getValue() {
    return "str";
}
var value = getValue();
console.log('value legth : ' + value.length);
