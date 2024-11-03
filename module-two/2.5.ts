{
    // function with generics

    // normal function
    const createArray = (params: string): string[] => {
        return [params]
    }

    // with generics
    const createArrayWithGenerics = <T>(params: T): T[] => {
        return [params]
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGenerics<boolean>(true)

    // const resGenericObj = createArrayWithGenerics<{id: number; name: string}>({id: 4565, name: "mokles"})

    interface User { id: number; name: string }

    const resGenericObj = createArrayWithGenerics<User>({ id: 4565, name: "mokles" })  // best use-case



    // function with tuple
    const createArrayWithTuple = <T, S>(params: T, params2: S): [T, S] => {
        return [params, params2]
    }

    const res3 = createArrayWithTuple<string, number>('Bangladesh', 222)
    const res4 = createArrayWithTuple<number, { name: string }>(487, { name: 'tuple' })


    // another example of dynamic generics

    const addCourseToStudent = <T>(student: T) : T => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }

    }

    const student1 = addCourseToStudent<{name: string; email: string; devType: string}>({
        name: "mr. x",
        email: "x@gmail.com",
        devType: "NLWD"
    });

    const student2 = addCourseToStudent<{name: string; email: string; smartWatch: string}>({
        name: "mr. Y",
        email: "Y@gmail.com",
        smartWatch: "Apple Watch"
    })

















}