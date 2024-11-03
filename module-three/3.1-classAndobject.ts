{
    // opp - class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // Parameter properties used for reduce code repeat
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    // create instance
    const dog = new Animal("German Shepard", "dog", "ghew ghew")
    const cat = new Animal("Mini", "cat", "meaow")

    dog.makeSound()











}