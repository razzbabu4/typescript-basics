{

    // generics and constraint with keyof operator


    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"  // manually union of properties

    type Owner2 = keyof Vehicle

    // const person1 : Owner2 = ""

    const user = {
        name: "Alu",
        age: 43,
        address: "khet"
    }

    const tv = {
        model: "sony",
        display_size: "32 inc"
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {   // dynamically get property by using generics

        return obj[key]

    }

    const result = getPropertyValue(tv, "model")
















}