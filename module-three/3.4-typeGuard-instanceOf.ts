{

    // type guard --> instance of

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("Your sound is low")
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBarking() {
            console.log("I am barking")
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log("I am Meawing")
        }
    }

    // make instance 
    const dog = new Dog("Lallu", "dog")
    const cat = new Cat("Mini", "cat")

    // normal way get instanceof
    // const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //         animal.makeBarking();
    //     } else if (animal instanceof Cat) {
    //         animal.makeMeaw();
    //     } else {
    //         animal.makeSound();
    //     }
    // };

    // using in smart way, should crate function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;  // it can be written also in if-else block
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBarking();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    };
    //

}