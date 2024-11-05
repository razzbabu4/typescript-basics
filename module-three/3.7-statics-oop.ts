{
// statics in oop

class Counter {
    // count : number = 0;
    static count : number = 0;   // use static

    static increment(){
        // return (this.count = this.count + 1)
        return (Counter.count = Counter.count + 1)   // when use "static" , can not use "this"
    }
    decrement(){
        // return (this.count = this.count - 1)
        return (Counter.count = Counter.count - 1)   // when use "static" , use "ClassName" instead of "this"
    }
}

// const result1 = new Counter();
// console.log(result1.increment())
// console.log(result1.increment())

console.log(Counter.increment())   // when use statics don't need to create "instance", direct call by "ClassName"

// const result2 = new Counter();
console.log(Counter.increment())
console.log(Counter.increment())











}