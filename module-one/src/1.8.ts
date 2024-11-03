{
    // Destructuring

    const User = {
        id: 342,
        name: {
            firstName: "Mohammad",
            midName: "Tareq",
            lastName: "Masud",
        },
        contactNumber: "01679529807",
        address: "Satkhira"
    }

    // object destructuring
    const { contactNumber, name: { midName : Origin } } = User;   // name allieas

    // array destructuring

    const myFriends = ["mahi", "hasib", "shohan", "sujon", "nahid"]

    const [, , bestFriend, ...rest] = myFriends;






}