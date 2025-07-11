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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.age = age;
        this.name = name;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        if (currentTask) {
            console.log("".concat(this.name, " ").concat(currentTask));
            this.tasks.push(currentTask);
        }
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.getSalary(), " this month."));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push('is working on a simple task.');
        return _this;
    }
    return Junior;
}(Employee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push('is working on a complicated task.');
        _this.tasks.push('is taking time off work.');
        _this.tasks.push('is supervising junior workers.');
        return _this;
    }
    return Senior;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dividend = 0;
        _this.tasks.push('scheduled a meeting.');
        _this.tasks.push('is preparing a quarterly report.');
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
var junior = new Junior("Ivan", 22);
junior.salary = 1000;
junior.work(); // Ivan is working on a simple task.
junior.collectSalary(); // Ivan received 1000 this month.
var manager = new Manager("Maria", 40);
manager.salary = 3000;
manager.dividend = 1000;
manager.work(); // Maria scheduled a meeting.
manager.collectSalary(); // Maria received 4000 this month.
