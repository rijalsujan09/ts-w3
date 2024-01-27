var firstNames = [];
// or
var myNums = [];
firstNames.push("sujan");
firstNames.push("suman");
firstNames.push("Bhuwan");
// firstName.push(3); // not allowed
var lastName = "rijal";
var fullnames = [];
function getFullname(firstNams, lastNam) {
    firstNams.map(function (e) { return "".concat(e, " ").concat(lastNam); }).forEach(function (elem) { return fullnames.push(elem); });
    console.log(fullnames);
    return fullnames;
}
getFullname(firstNames, lastName);
// lastNames.push("rijal"); // not allowed
myNums.push(1);
myNums.push(2);
myNums.push(3);
// ---------------------------------------
// Readonly
var names = ["sujan", "suman"];
// names.pussh("sujan") // error : Property push doesnot exist in type readonly stirng[]
// Type inference
var nums = [1, 2, 3]; //infered type number
nums.push(4); // that is allowed
// nums.push("5") // that is not allowed
var head = nums[1]; // no error
