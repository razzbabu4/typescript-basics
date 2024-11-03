{

    // mapped types

    const arrayOfNumbers: number[] = [1, 4, 7]

    const arrayOfString: string[] = arrayOfNumbers.map(number => number.toString())

    console.log(arrayOfString)



    // change one type to another type by using map-type

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"]  // Look up type
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }


    // T = {"height" , "width"}
    // key = T["height"] --> use lookup type
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: number; width: string }> = {
        height: 454,
        width: "44"
    }










}