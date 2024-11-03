{

// promise 

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getToDoList = async () : Promise<Todo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
    console.log(data)
}

// getToDoList()

// simulate 
const createPromise = () : Promise<string> =>{
    return new Promise<string>((resolve, reject)=>{
        const data : string = "something";
        if(data){
            resolve(data)
        }
        else{
            reject("failed to load data")
        }
    })
}

// calling createPromise function
const showData = async () : Promise<string> => {
    const data : string = await createPromise();
    return data;
    console.log(data)
}


// simulate using with object
type Something = { something : string}

const createPromise2 = () : Promise<Something> =>{
    return new Promise<Something>((resolve, reject)=>{
        const data : Something = {something: "it could be anything"};
        if(data){
            resolve(data)
        }
        else{
            reject("failed to load data")
        }
    })
}

// calling createPromise function
const showData2 = async () : Promise<Something> => {
    const data : Something = await createPromise2();
    return data;
    console.log(data)
}



















}