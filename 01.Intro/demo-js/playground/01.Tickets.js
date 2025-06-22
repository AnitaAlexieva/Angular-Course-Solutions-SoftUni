var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var tickets = [];
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var line = input_1[_i];
    var _a = line.split('|'), destination = _a[0], priceStr = _a[1], status_1 = _a[2];
    var price = Number(priceStr);
    //console.log(destination, price, status);
    var ticket = new Ticket(destination, price, status_1);
    tickets.push(ticket);
}
console.log(tickets);
