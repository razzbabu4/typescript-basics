{
// learning function 

// normal function
function add(num1: number, num2: number = 6): number {
    return num1 + num2;
}


// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;  //const addArrow = (num1: type, num2: type): return-type => num1 + num2;


// object --> function --> methods
const unemployed = {
    name: "Raz",
    balance: 0,
    arrears(balance: number): string {
        return `My balance is : BDT${this.balance + balance}`
    }
}


//  array mapping
const arr: number[] = [1, 2, 3];

const newArr: number[] = arr.map((item: number): number => item * item)


}