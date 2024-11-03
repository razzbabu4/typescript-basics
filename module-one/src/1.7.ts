{

    // spread operator and rest operator //

    // learn spread operator 
    
    const friend1: string[] = ["Rahan", "Jahid", "Jamil"];
    const friend2: string[] = ["Nahid", "Hasib", "Sohan"];
    
    const allFriends = friend1.push(...friend2)
    
    const mentors1: {
        typescript: string;
        redux: string;
        next: string;
    } = {
        typescript: "Mezbaul",
        redux: "Mir",
        next: "Tanmoy"
    }

    const mentors2: {
        cloud: string;
        prisma: string;
        dbms: string;
    } = {
        cloud: "Nahid",
        prisma: "Firoz",
        dbms: "komol"
    }

    const allMentors = {
        ...mentors1, ...mentors2
    }
    
    
    // learn rest operator 

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
    }

    greetFriends("Abul","Kabul","Habul")

    
}