var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, initialBalance) {
        this.accountInfo = {
            accountNumber: accountNumber,
            accountHolder: accountHolder,
            balance: initialBalance,
        };
    }
    BankAccount.prototype.getAccountInfo = function () {
        return "\uACC4\uC88C\uBC88\uD638: [".concat(this.accountInfo.accountNumber, "], \uC608\uAE08\uC8FC: [").concat(this.accountInfo.accountHolder, "], \uC794\uC561: [").concat(this.accountInfo.balance, "]");
    };
    BankAccount.prototype.deposit = function (amount) {
        this.accountInfo.balance += amount;
        console.log("\uC785\uAE08\uC794\uC561 :".concat(amount, ", \uC794\uC561:").concat(this.accountInfo.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.accountInfo.balance - amount < 0) {
            console.log("출금잔액이 부족합니다.");
        }
        else {
            this.accountInfo.balance -= amount;
            console.log("\uCD9C\uAE08\uC794\uC561 :".concat(amount, ", \uC794\uC561:").concat(this.accountInfo.balance));
        }
    };
    return BankAccount;
}());
var account = new BankAccount("010-2888-3013", "양소현", 0);
console.log(account.getAccountInfo());
account.deposit(500);
