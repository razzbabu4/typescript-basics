{

    // Type alias

    // Object
    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1: Student = {
        name: "Tareq",
        age: 30,
        contactNo: "01679529807",
        gender: "male",
        address: "satkhira"
    }

    const student2: Student = {
        name: "Raz",
        age: 27,
        gender: "male",
        address: "dhaka"
    }


    // type alias for string or any type
    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = "Tareq"
    const isAdmin: IsAdmin = true


    // type alias for function: type alias

    type Add = (a: number, b: number) => number

    const add: Add = (num1, num2) => num1 + num2

















}