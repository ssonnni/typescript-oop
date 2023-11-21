interface IAccountInfo {
  accountNumber: string;
  accountHolder: string;
  balance: number;
}

class BankAccount {
  private accountInfo: IAccountInfo;

  constructor(
    accountNumber: string,
    accountHolder: string,
    initialBalance: number
  ) {
    this.accountInfo = {
      accountNumber,
      accountHolder,
      balance: initialBalance,
    };
  }

  getAccountInfo(): string {
    return `계좌번호: [${this.accountInfo.accountNumber}], 예금주: [${this.accountInfo.accountHolder}], 잔액: [${this.accountInfo.balance}]`;
  }

  deposit(amount: number): void {
    this.accountInfo.balance += amount;

    console.log(`입금잔액 :${amount}, 잔액:${this.accountInfo.balance}`);
  }

  withdraw(amount: number): void {
    if (this.accountInfo.balance - amount < 0) {
      console.log("출금잔액이 부족합니다.");
    } else {
      this.accountInfo.balance -= amount;
      console.log(`출금잔액 :${amount}, 잔액:${this.accountInfo.balance}`);
    }
  }
}

const account = new BankAccount("010-2888-3013", "양소현", 0);

console.log(account.getAccountInfo());
account.deposit(500)
