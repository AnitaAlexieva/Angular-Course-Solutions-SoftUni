abstract class Employee{
    name: string;
    age: number;
    salary:number;
    tasks: Array<string>;

    constructor(name:string, age:number){
        this.age=age;
        this.name=name;
        this.salary=0;
        this.tasks=[];
    }

     work(): void {
        const currentTask = this.tasks.shift();
        if (currentTask) {
        console.log(`${this.name} ${currentTask}`);
        this.tasks.push(currentTask);
    }
  }

    public collectSalary():void{
         console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary():number{
         return this.salary;
    }
}

class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push('is working on a simple task.');
  }
}

class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push('is working on a complicated task.');
    this.tasks.push('is taking time off work.');
    this.tasks.push('is supervising junior workers.');
  }
}class Manager extends Employee {
  dividend: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.dividend = 0;
    this.tasks.push('scheduled a meeting.');
    this.tasks.push('is preparing a quarterly report.');
  }

  getSalary(): number {
    return this.salary + this.dividend;
  }
}

const junior = new Junior("Ivan", 22);
junior.salary = 1000;
junior.work(); // Ivan is working on a simple task.
junior.collectSalary(); // Ivan received 1000 this month.

const manager = new Manager("Maria", 40);
manager.salary = 3000;
manager.dividend = 1000;
manager.work(); // Maria scheduled a meeting.
manager.collectSalary(); // Maria received 4000 this month.