{

    // Type generics with tuple

    type GenericsTypes<T> = Array<T>  // pass type argument to type parameter

    // const rollNumber : number[] = [1,2,3]
    // const rollNumber : Array<number> = [1,2,3]
    const rollNumber: GenericsTypes<number> = [1, 2, 3]

    // const mentors : string[] = ['x','y','z']
    const mentors: Array<string> = ['x', 'y', 'z']

    // const boolArray : boolean[] = [true, false, true]
    const boolArray: Array<boolean> = [true, false, true]


    // array of object (generics)
    const user: GenericsTypes<{ name: string, age: number }> = [
        {
            name: "Tareq",
            age: 20
        },
        {
            name: "Masud",
            age: 27
        },
    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']

    const UserWithId : GenericTuple<number,{name: string, isProgrammer: boolean}> = [123, {name: "Raz", isProgrammer: true}]






}