{
    // polymorphism --> when a method/property give output different in different place

    class Person {
        getSleep() {
            console.log("i am sleeping 8 hours per day")
        }
    }

    class Student extends Person {
        getSleep() {
            console.log("i am sleeping 7 hours per day")
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("i am sleeping 6 hours per day")
        }
    }

    const getSleepingHour = (param: Person) => {
        return param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHour(person1);
    getSleepingHour(person2);
    getSleepingHour(person3);


    // Another example // 

    class Shape {
        getShapeArea(): number {
            return 0;
        }
    }

    // get circle area = pi * r^2
    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getShapeArea(): number {
            return Math.PI * this.radius * this.radius
        }
    };

    // get rectangle area 

    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getShapeArea(): number {
            return this.height * this.width
        }
    };


    const getArea = (param: Shape) => {
        return (console.log(param.getShapeArea()))
    }

    const shape = new Shape;
    const circle = new Circle(10);
    const rectangle = new Rectangle(10,20);

    getArea(shape)
    getArea(circle)
    getArea(rectangle)








}