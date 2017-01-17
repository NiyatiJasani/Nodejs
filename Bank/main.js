var Account = require('./Account');

var person1 = new Account("MJ", 10000);

person1.deposit(2000);
console.log("Name " + person1.name);
console.log(person1.toString());

person1.withdraw(3000);
console.log(person1.toString());