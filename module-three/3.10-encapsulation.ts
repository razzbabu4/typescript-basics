{
    // encapsulation

    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;  // only available in this class
        protected _balance: number;   // available this class & it child class

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }

        private getBalance() {
            return this._balance;
        }

        getHiddenMethod(){
            return this.getBalance();
        }
    };

    class StudentAccount extends BankAccount {
        test() {
            this._balance = 5;   // when property is protected , it can be access only child class
        }
    }


    const goriberAccount = new BankAccount(111, 'gorib', 50);
    // goriberAccount.balance = 45
    goriberAccount.addDeposit(40);
    const result = goriberAccount.getHiddenMethod()
    console.log(result)



}