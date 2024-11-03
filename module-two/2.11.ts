{

    // Utility types

    // pick utility type

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    // Pick
    type NameAge = Pick<Person, "name" | "age">

    // Omit 
    type ContactInfo = Omit<Person, "name" | "age">

    // Require
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // ReadOnly
    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "Mr. X",
        age: 42,
        contactNo: "016"
    }
    // person1.name = "mry"  // It is not working now because of Readonly type

    // Record
    // type MyObj = {
    //      a: string;
    //      b: string;
    // }

    // using Record 
    type MyObj = Record<string, string>  // dynamically take input as a string value

    const obj: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }

    const EmptyObject : Record<string, unknown> = {}

EmptyObject.name = "Hello"









}