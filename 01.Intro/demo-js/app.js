var a = 5;
console.log(a);
var text = "Hello!";
console.log(text);
var hasCats = true;
console.log(hasCats);
// number[] <=> Array<number>
var numberArray = [1, 2, 3, 4, 5];
var alphabetStr = ["a", "b", "c"];
alphabetStr.forEach(function (str) {
    console.log(str);
});
var x = 1;
x = "test";
x = { name: "Pesho" };
console.log(x);
var person1 = { name: "Pesho1", age: 1 };
var person2 = { name: "Pesho2", age: 1 };
var arr = [true, "string", 1];
var randomVar = "zdr";
randomVar = 5;
var numArray = [1, 2, 3];
numArray.push("zdr");
var obj = [1, 2, 34];
var a = 5;
var Person = /** @class */ (function () {
    function Person() {
        this.greeting = "Hello";
        this.age = 14;
    }
    Person.prototype.greet = function () {
        console.log(this.greeting);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p = new Person();
p.greet();
var age = p.getAge();
console.log(age);
var dog = { id: 1, name: "Roshko" };
var dog2 = { id: "Abcd", name: "Roshko" };
var dog3 = {
    id: { id: 1, name: "Roshko" },
    name: "Roshko",
};
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Successfull"] = "Statusche";
    PaymentStatus[PaymentStatus["Failed"] = 500] = "Failed";
    PaymentStatus[PaymentStatus["Pending"] = 304] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.Successfull);
console.log(PaymentStatus.Failed);
console.log(PaymentStatus.Pending);
