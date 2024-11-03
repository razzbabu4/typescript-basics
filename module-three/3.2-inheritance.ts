{
    // oop - inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHour: number) {
            console.log(`${this.name} will sleep for ${numberOfHour} hour`)
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    const student1 = new Student("Alif", 20, "Dhaka")
    student1.getSleep(45);


    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take ${numberOfClass} class`)

        }
    }

    const teacher = new Teacher("Abul", 29, "Khulna", "Professor")
    teacher.takeClass(13)





}