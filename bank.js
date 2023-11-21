var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, accountHolder, initialBalance, interestRate) {
        var _this = _super.call(this, accountNumber, accountHolder, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
    };
    return SavingsAccount;
}(BankAccount));
var account = new BankAccount("010-2020-3030", "양소현", 0);
console.log(account.getAccountInfo());
account.deposit(500);
