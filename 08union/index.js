console.log("Union in TypeScript");
// Union Types are used whrn value are more than a single type
// Union | (OR) 
var printStatusCode = function (v) {
    if (typeof v === "number") {
        return v + " OK";
    }
    else
        return "".concat(v.toUpperCase, " OK");
};
var x = printStatusCode(200);
var y = printStatusCode("200");
console.log(x);
console.log(y);
// Union Type Errors
function getStatusCode(code) {
    // console.log(`status code is ${code.toUpperCase}`); // error
}
// this kind of error can occur so  checking is required befor further opertation
