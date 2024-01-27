var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Inheritance in  TypeScript");
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.toString = function () {
        return "Recatnge [width=".concat(this.width, ", length=").concat(this.length, "]");
    };
    return Rectangle;
}());
var rect1 = new Rectangle(7, 3);
console.log(rect1.getArea());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// Override
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, length, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.toString = function () {
        return "Recatnge [side=".concat(this.side);
    };
    return Square;
}(Rectangle));
//  Abstract 
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Recatnge = /** @class */ (function (_super) {
    __extends(Recatnge, _super);
    function Recatnge(l, b) {
        var _this = _super.call(this) || this;
        _this.l = l;
        _this.b = b;
        return _this;
    }
    Recatnge.prototype.getArea = function () {
        return this.l * this.b;
    };
    Recatnge.prototype.toString = function () {
        return "".concat(this.getArea());
    };
    return Recatnge;
}(Polygon));
