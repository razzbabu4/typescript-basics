{


    // nullable types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching....")
        } else {
            console.log("There is nothing to search")
        }
    }

    searchName(null)


    // unknown types

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedValue = (value * 1000) / 3600;
            console.log(`The speed is ${convertedValue} ms^-1`)
        }
        
        if (typeof value === "string") {
            const [inputValue, unit] = value.split(' ');
            const convertedValue = (parseFloat(inputValue) * 1000) / 3600;
            console.log(`The speed is ${convertedValue} ms^-1`)

        }else{
           console.log("wrong number") 
        }
    }

    getSpeedInMeterPerSecond("1000 km^h")



// never type

const throwError = (msg: string) : never=> {
    throw new Error(msg);   
}

throwError("wow! I get the error")


}
