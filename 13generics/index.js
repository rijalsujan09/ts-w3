console.log('Generic TypeScript');
function creatpairs(x, y) {
    return [x, y];
}
console.log(creatpairs("Sujan", 15));
// Generics in clases
//  --> generic can be used to careate generalized classes like Map.
var Namedvalue = /** @class */ (function () {
    function Namedvalue(name) {
        this.name = name;
    }
    Namedvalue.prototype.setvalue = function (_value) {
        this._value = _value;
    };
    Namedvalue.prototype.getValue = function () {
        return this._value;
    };
    Namedvalue.prototype.toString = function () {
        return "name = ".concat(this.name, " \nvalue = ").concat(this._value);
    };
    return Namedvalue;
}());
var nameValue = new Namedvalue("Sujan");
nameValue.setvalue("Rijal");
console.log(nameValue.getValue());
console.log(nameValue.toString());
var wrappedVal1 = {
    value: 10
};
var wrappedVal2 = {
    value: 'txt'
};
// Default in generics
var KeyValue = /** @class */ (function () {
    function KeyValue(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    KeyValue.prototype.toString = function () {
        return "key = ".concat(this._key, " and type = ").concat(typeof (this._key), "\nvalue = ").concat(this._value, " and type = ").concat(typeof (this._value));
    };
    return KeyValue;
}());
var keyVal1 = new KeyValue(1, 25);
console.log(keyVal1.toString());
var keyVal2 = new KeyValue(1, "sujan");
console.log(keyVal2.toString());
// Extends in Generics
function createLoggedpairs(a1, b1) {
    console.log("a1 = ".concat(a1, " and type = ").concat(typeof (a1), "\nb = ").concat(b1, " and type = ").concat(typeof (b1)));
    return [a1, b1];
}
console.log(createLoggedpairs(1, "sujan"));
console.log(createLoggedpairs("sujan", 1));
console.log(createLoggedpairs(true, 1));
