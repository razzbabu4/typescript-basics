{

    // type assertion

    let anything: any;

    anything = "next level web development";

    (anything as string).toLocaleUpperCase();



    const kgTogm = (value: string | number): string | number | undefined => {

        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }

        if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result1 = kgTogm("1000") as string;
    const result2 = kgTogm(1000) as number;


    // for error handling use type assertion

    type CustomError = {
        message: string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message)
    }

















}