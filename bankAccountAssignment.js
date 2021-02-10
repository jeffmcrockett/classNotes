// build a bank account class
// build a subclass for transaction

// have a balance method


class bankAccount {
    accountNumber;
    owner;

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        let accountNumber = new transactionTable;
    }

    charge(payee, amount) {
        if (this.balance() >= amount) {
            transactionTable.payee.push([payee]);
            transactionTable.amount.push([amount]);
        }
        else return `Overdraft Protection denied this transaction. Your current balance is ${bankAccount.balance()}.`
    }

    balance() {
        (transaction.amount.reduce((a, b) => a + b, 0))
    }
}

class transactionTable extends bankAccount {
    date;
    payee;
    amount;

    constructor(payee1, amount1) {
        this.payee = [];
        this.amount = [];
    }
 }


let account1 = new bankAccount("987654321", "John Doe");
console.log(account1.balance());
account1.charge("Target", 10);
console.log(account1.balance());
console.log(account1.transactions.length);
account1.deposit(100);
account1.charge("Chipotle", 20);
account1.charge("Diamonds Direct", 1000);
account1.charge("Target", -15);
account1.deposit(-10);

// the transaction array is an array of objects to have transaction-value
