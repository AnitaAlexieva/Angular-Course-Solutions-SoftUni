let a: number = 5;
console.log(a);

let text: string = "Hello!";
console.log(text);

let hasCats = true;
console.log(hasCats);

// number[] <=> Array<number>
// let numberArray: number[] = [1, 2, 3, 4, 5];
let alphabetStr: Array<string> = ["a", "b", "c"];
alphabetStr.forEach((str) => {
  console.log(str);
});

let x: unknown = 1;
x = "test";
x = { name: "Pesho" };
console.log(x);

type Person1 = {
  name: string;
  age: number;
};
interface Person2 {
  name: string;
  age: number;
}
let person1: Person1 = { name: "Pesho1", age: 1 };
let person2: Person2 = { name: "Pesho2", age: 1 };

// ❗ Следният ред ще даде грешка, защото масивът съдържа различни типове:
const arr: (number | boolean | string)[] = [true, "string", 1];

let randomVar: number | string = "zdr";
randomVar = 5;

// ❗ Следният push ще даде грешка без указване на тип
let numArray: (number | string)[] = [1, 2, 3];
numArray.push("zdr");

type Cat = {
  name: string;
  furColor: string;
};
type Dragon = {
  skinColor: string;
  legsCount: number;
};
const obj: Dragon | number[] = [1, 2, 34];


// class Person implements Human { ❌ Human не е дефиниран – ще даде грешка
//   greeting = "Hello";
//   age = 14;
//   greet() {
//     console.log(this.greeting);
//   }
//   getAge() {
//     return this.age;
//   }
// }
// const p = new Person();
// p.greet();
// const age = p.getAge();
// console.log(age);

type Dog<T> = {
  id: T;
  name: string;
};
const dog: Dog<number> = { id: 1, name: "Roshko" };
const dog2: Dog<string> = { id: "Abcd", name: "Roshko" };
const dog3: Dog<Dog<number>> = {
  id: { id: 1, name: "Roshko" },
  name: "Roshko",
};

var PaymentStatus;
(function (PaymentStatus) {
  PaymentStatus["Successfull"] = "Statusche";
  PaymentStatus[(PaymentStatus["Failed"] = 500)] = "Failed";
  PaymentStatus[(PaymentStatus["Pending"] = 304)] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.Successfull);
console.log(PaymentStatus.Failed);
console.log(PaymentStatus.Pending);
