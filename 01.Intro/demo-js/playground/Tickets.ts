class Ticket {
    destination: string;
    price: number;
    status:string;

    constructor(destination:string, price:number, status:string){
        this.destination=destination;
        this.price=price;
        this.status=status;
    }

}
const input = [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'
]

let tickets: Ticket[] = []; 

for(const line of input){
    const [destination, priceStr, status] = line.split('|');
    const price = Number(priceStr);
    //console.log(destination, price, status);
    const ticket = new Ticket(destination,price,status);
    tickets.push(ticket);
}

console.log(tickets);