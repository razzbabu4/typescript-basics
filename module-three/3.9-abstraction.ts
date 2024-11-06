{
    //  Abstraction - two ways of using abstraction in oop 
    // 1) interface 2) abstract

    // idea
    interface Car1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Car1 {    // in class use implements for use interface
        startEngine(): void {
            console.log("I am starting the car engine");
        };
        stopEngine(): void {
            console.log("I am stopping the car engine");
        };
        move(): void {
            console.log("I am moving the car");
        };
        test() {
            console.log("This is test method");
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();

    // abstract class (*leader class*)

    // idea (in abstract class you will get only idea not implementation)
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log("This is test method");
        }
    }

    class HondaCar extends Car2 {
        startEngine(): void {
            console.log("I am starting the car engine");
        };
        stopEngine(): void {
            console.log("I am stopping the car engine");
        };
        move(): void {
            console.log("I am moving the car");
        };
    }

    const hondaCar = new HondaCar();
    hondaCar.stopEngine();

    // const hondaCar = new Car2(); // you can't create the instance from abstract class




    // 

}