{
// constraints 
// => enforce the object must have those property, id, name, email

const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) : T => {     
    const course = "Next Level Web Development"
    return {
        ...student,
        course
    }

}

const student3 = addCourseToStudent({
    id: 333,
    name: "mr. z",
    email: "z@gmail.com",
    hobby: "Football"
})

const student1 = addCourseToStudent<{id: number; name: string; email: string; devType: string}>({
    id: 111,
    name: "mr. x",
    email: "x@gmail.com",
    devType: "NLWD"
});

const student2 = addCourseToStudent<{id: number; name: string; email: string; smartWatch: string}>({
    id: 222,
    name: "mr. Y",
    email: "Y@gmail.com",
    smartWatch: "Apple Watch"
})



















}