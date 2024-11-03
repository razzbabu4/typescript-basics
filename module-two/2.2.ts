{


    // interfaces 

    // type alias
    type User1 = {
        name: string;
        age: number;
    }

    // interfaces 
    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }; // in type alias add extra property by using & operator

    interface UserWithRole2 extends User2 {     // in interface add extra property by using extends.
        role: string;
    }

    type rollNumber1 = number

    const user1: UserWithRole2 = {       // you can use type alias or interface for object
        name: "Raz",
        age: 25,
        role: "student"
    }

    /**
     * The main difference between type alias and interfaces is interface only used for object or array or function type declaration
     *  but type alias can be declared primitive type also.
     * 
     */

    // interface for array
    type RollNumber1 = number[];

    interface RollNumber2 {
        [index: number]: number
    }

    const rollNumber: RollNumber2 = [1, 2, 3]

    // interface for function
    type Add1 = (a: number, b: number) => number
    
    interface Add2 {
        (a: number, b: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2






}