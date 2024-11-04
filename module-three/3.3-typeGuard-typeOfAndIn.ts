{

    // type guard ---> typeof and in

    // type guard --> typeof

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result = add(4, "1")
    console.log(result)


    // type in (use for object)

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            return console.log(`My name is ${user.name} and my role ${user.role}`)
        } else {
            return console.log(`My name is ${user.name}`)
        }
    }

    const normalUser : NormalUser = {
        name: "Mr. normal man"
    }
    const adminUser : AdminUser = {
        name: "Mr. normal man",
        role: "Admin"
    }

    getUser(normalUser)




}