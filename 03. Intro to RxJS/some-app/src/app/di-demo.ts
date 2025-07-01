class Wallet{
  balance:number;

  constructor(balance:number){
    this.balance = balance;
  }

}

class Car{
  model:string;
  color:string;

  constructor(model:string, color:string){
    this.model = model;
    this.color = color;
  }
}


//wrong way
class Person{
  wallet: Wallet;

  constructor(wallet:Wallet){
    this.wallet = new Wallet(1500);
  }
}

//right way
class OptimizedPerson{
  wallet:Wallet;
  car:Car;

  constructor(wallet:Wallet, car:Car){
    this.car = car;
    this.wallet = wallet;
  }
}

const mariasWallet = new Wallet(1200);
const mariasCar = new Car("Porche", "white");
const mariasPerson = new OptimizedPerson(mariasWallet, mariasCar);
console.log(mariasPerson)