// function sayHello(){
//     let you = prompt("what's your name ? ")
//     console.log("Hello,"+you+"!")
// }
// sayHello();

// let varContainingFunction = function(){
//     let varInFucntion = "i am in a function"
//     console.log("hi there ! , ",varInFucntion);
// }
// varContainingFunction();

// function tester(para1,para2){
//     return para1+para2
// }
// const arg1 = "argument1"
// const arg2 = "argument2"
// console.log(tester(arg1,arg2))

// function addTwoNumbers(x,y){
//     return x+y
// }
// // let a = parseInt(prompt("enter a : "))
// // let b = parseInt(prompt("enter b : "))

// console.log(addTwoNumbers(10,90))

// let arr = []
// arr.push("argument")
// console.log(arr)

// function addTwoNumbers(x = 2,y = 3){
//     return x+y
// }
// console.log(addTwoNumbers())
// console.log(addTwoNumbers(10))
// console.log(addTwoNumbers(10,20))

//arrow functions are useful for shorthand notations 
// (para1,para2) => {
//     body of the function
// }

// let doingstuff = x => console.log(x)
// doingstuff(10)

// const arr = ["aa","bb","cc"]
// arr.forEach(e => console.log(e))

//spread oprator

// let mg = ['jjjjjjj',...arr,'uuuj','ikik']
// console.log(mg)
// let arr2 = [7,4]
// function addTwoNumbers(x = 2,y = 3){
//     return x+y
// }
// console.log(addTwoNumbers(...arr2))

// // rest
// let p1 = 8 ; let p2 =9 ;
// (p1,p2)  => console.log(p1+p2)

//variable scope

// function scopeExample() {
//     let localVar = "I am local to this function";
//     console.log(localVar); // Accessible here
// }

// console.log(localVar); 

// let z = 10 ; 
// console.log(z);

// function scopeExample() {
//     console.log(localVar); 
//     let localVar = "I am local to this function";

// }
// scopeExample()

// function scopeExample() {
//     console.log(localVar);
//     var localVar = "I am local to this function";

// }
// scopeExample()


//global variable

// let z = " anywhere "
// function hello(x){
//     console.log("outside",z)
// }

// function hello(x) {
//     let z = "local variable";
//     console.log("inside", z); // This will log the local variable
// }
// hello();
// console.log("outside", z); // This will log the global variable

// x = "kkkk"
// function hello(x) {
//     let z = "local variable";
//     console.log("inside", x); // This will log the local variable
// }
// hello("jjj");

// (function() {
//     console.log("This is an IIFE function!");
// })();


//recursion 

// function gett(nr){
    
//     if(nr > 0)
//     gett(--nr);
//     console.log(nr);
// }

// gett(3);

// function logRecursive(n) {
//     if (n > 0) {
//         console.log("Started function with n =", n);
//         logRecursive(n - 1);}
//         else{
//         console.log("Done with recursion for n =", n);}
    
//         console.log("Ended function as n =", n);
    
// }

// logRecursive(3);


// function outerFunction(outerVariable) {
//     console.log("Outer function variable:", outerVariable);

//     function innerFunction(innerVariable) {
//         console.log("Inner function variable:", innerVariable);
//         console.log("Accessing outer variable from inner function:", outerVariable);
//     }

//     return innerFunction;
// }

// const innerFunc = outerFunction("Outer Value");
// innerFunc("Inner Value");


// Anonymous function assigned to a variable
// let anonymousFunction = function() {
//     console.log("This is an anonymous function!");
// };
// anonymousFunction();

// Anonymous function used as an argument

// function doFlexibleStuff(executeStuff) {
//     executeStuff();

//     console.log("Executing stuff...");
    
// }
// functionVariable = 10;
// doFlexibleStuff(functionVariable);

// function displayMessageAfterDelay() {
//     setTimeout(() => {
//         console.log("This message is displayed after 2 seconds");
//     }, 2000);
// }

// displayMessageAfterDelay();

// function displayMessageAfterDelay() {
//     setInterval(() => {
//         console.log("This message is displayed after 2 seconds");
//     }, 2000);
// }

// displayMessageAfterDelay();