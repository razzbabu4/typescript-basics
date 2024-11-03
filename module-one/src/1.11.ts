{


    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15;
    if (age >= 18) {
        console.log("Adult person")
    }
    else {
        console.log("Not adult person")
    }

    const isAdult = age >= 17 ? "adult" : "not adult";

    console.log({ isAdult })

    // nullish coalescing operator

    // only null / Undefined ---> for decision making in nullish

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "Guest";

    const result2 = isAuthenticated ? isAuthenticated : "Misfire"


    console.log({ result1 }, { result2 })



    // optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "raz",
        address: {
            city: "Dhaka",
            road: "30, 1",
            presentAddress: "dhaka"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "Not available";  // using nullish for avoid undefined

    console.log({ permanentAddress })








}