module.exports = function Account(name, amount) {
    this.name = name;
    this.balance = amount;
    this.withdraw = withdraw;
    this.deposit = deposit;
    this.toString = toString;


    function deposit(amount) {
        this.balance += amount;
    }

    function withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        if (amount > this.balance) {
            print("Insufficient funds");
        }

    }
    // represent any object as a string, toString() method 
    function toString() {
        return "Balance: " + this.balance;
    }
};