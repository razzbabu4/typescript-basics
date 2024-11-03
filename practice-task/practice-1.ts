{
    /**
     * Task 1: Basic Data Types and First Program
    Objective: Write a TypeScript program that outputs a welcome message.
    
    Instructions:
    
    Create a TypeScript program.
    Print the following message to the console:
    Hello World, I will complete this course successfully and become a Next level Web Developer!
     */

    // Answer: 
    const WelcomeMessage: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    console.log(WelcomeMessage)


    /**
     * Task 2: Functions, Optional, and Literal Types
    Objective: Create a function with parameters and an optional literal type.
    
    Instructions:
    
    Define a function that takes:
    name (string)
    age (number)
    role (optional, with type 'admin' | 'user' | 'guest')
    The function should log these values or perform a basic action.
     */

    // Answer: 
    type Role = 'admin' | 'user' | 'guest';
    type User = {
        name: string;
        age: number;
        role?: Role;
    }
    const user = (value: User) => {
        return value;
    }

    const person1 = user({ name: "mr. x", age: 20 })
    console.log(person1);


    /**
     * Task 3: Object Types, Type Alias, & Literal Types
    Objective: Define a structured Person object using Type Aliases.

    Instructions:
    Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
     */

    // Answer: 
    type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'gray' | 'white';  // literal type
    type EyeColor = 'brown' | 'blue' | 'green' | 'hazel' | 'gray' | 'amber';   // literal type
    type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';        // literal type

    type Person = {
        name: string;
        address: string;
        hairColor: HairColor;
        eyeColor: EyeColor;
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers: {
            relation: string;
            name: string;
            age: number;
        }[];
        job: {
            title: string;
            company: string;
            yearsOfExperience: number;
        };
        skills: string[];
        maritalStatus: MaritalStatus;
        friends: {
            name: string;
        }[];

    }


}