var Box = /** @class */ (function () {
    function Box() {
        this._elements = [];
    }
    Box.prototype.add = function (element) {
        this._elements.push(element); // добавя най-отгоре
    };
    Box.prototype.remove = function () {
        this._elements.pop(); // премахва най-отгоре
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._elements.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
