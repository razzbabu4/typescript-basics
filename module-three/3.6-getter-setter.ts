{

    // getter and setter in oop

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

        // addDeposit(amount: number) {
        //     return this._balance = this._balance + amount;
        // }

        set deposit(amount: number){
            this._balance = this._balance + amount
        }

        // getBalance() {
        //     return this._balance;
        // }

        get balance() {
            return this._balance
        }
    };


    const goriberAccount = new BankAccount(111, 'gorib', 70);
    
    // goriberAccount.balance = 45
    // goriberAccount.addDeposit(40);  // for adding money , function is calling
    
    // const result = goriberAccount.getBalance()  // for see balance , function is calling
    // console.log(result)
    
    goriberAccount.deposit = 100; // by using "set" it behave like property

    const myBalance = goriberAccount.balance;   // by using "get" it behave like property

    console.log(myBalance)

}