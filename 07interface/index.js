console.log("Interface in TypeScript");
var rectangle = {
    height: 7,
    width: 3,
    getArea: function (h, w) {
        return h * w;
    }
};
var area;
area = rectangle.getArea(7, 3);
console.log(area);
