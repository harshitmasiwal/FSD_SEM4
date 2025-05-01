// class ClassName {
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("hello","world");
// console.log(obj)


// class Dog {
//     constructor(name, breed, age) {
//         this.name = name;
//         this.breed = breed;
//         this.age = age;
//     }


// }

// let myDog = new Dog("Buddy", "Golden Retriever", 3);
// console.log(myDog.name);


// class Temp {
//     constructor(userName) {
//         this.userName = userName;
//     }

//     greet() {
//         console.log(`Hello ${this.userName}, from Temp class!`);
//     }
// }

// let tempInstance = new Temp("harshit");
// tempInstance.greet();
// let x = tempInstance.greet();
// console.log(x)

// class Person {
//     #name; // Private field

//     constructor(name) {
//         this.#name = name;
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(newName) {
//         this.#name = newName;
//     }
// }

// let person = new Person("harshit");
// console.log(person.getName()); 
// person.setName("masiwal");
// console.log(person.getName()); 




// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getDetails() {
//         return `${this.year} ${this.make} ${this.model}`;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(make, model, year, type) {
//         super(make, model, year);
//         this.type = type; // e.g., cruiser, sport, touring
//     }

//     getDetails() {
//         return `$uctor(make, model, year, doors) {
//         super(make, model, year);
//         this.doors = doors; 
//     }

//     getDetails() {
//         return `${super.getDetails()} - Doors: ${this.doors}`;
//     }
// }

// let bike = new Motorcycle("Harley-Davidson", "Street 750", 2020, "Cruiser");
// console.log(bike.getDetails());

// let sedan = new Car("Toyota", "Camry", 2021, 4);
// console.log(sedan.gns passed as arguments to other functions, allowing code to be executed after an operation is completed. 
// They are commonly used in asynchronous programming, such as handling events or performing tasks after a delay.

// function fetchData(callback) {
//     callback();
// }

// function sayhi(){
//     console.log("hii");
// }

// fetchData(sayhi);


// function getGrade(score) {
//     switch (true) {
//         case score >= 90:
//             return "A";
//         case score >= 80:
//             return "B";
//         case score >= 70:
//             return "C";
//         case score >= 60:
//             return "D";
//         default:
//             return "F";
//     }
// }

// console.log(getGrade(95)); 
// console.log(getGrade(85)); 
// console.log(getGrade(75));
// console.log(getGrade(65)); 
// console.log(getGrade(50));



// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     if (callback) {
//         callback(grade);
//     }
//     return grade;
// }

// function printGrade(grade) {
//     console.log(`The grade is: ${grade}`);
// }

// console.log(getGrade(95, printGrade)); 
// console.log(getGrade(85, printGrade)); 
// console.log(getGrade(75, printGrade));
// console.log(getGrade(65, printGrade)); 
// console.log(getGrade(50, printGrade));

//prommises

// Promises
// Promises are used to handle asynchronous operations in JavaScript. 
// They represent a value that may be available now, or in the future, or never.

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve("The number is greater than 10.");
//         } else {
//             reject("The number is 10 or less.");
//         }
//     });
// }

// checkNumber(2)
//     .then((message) => {
//         console.log("Resolved:", message);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });

// checkNumber(5)
//     .then((message) => {
//         console.log("Resolved:", message);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//     alert(result); // 1
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 2
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) {
  
//     alert(result); // 4
  
//   });

//   const p = {
//     then: onFulfilled => {
//     // Prints "then(): function () { [native code] }"
//     console.log('then():', onFulfilled.toString());
//     // Only one entry in the stack:
//     // Error
//     // at Object.then (/examples/chapter3.test.js:8:21)
//     console.log(new Error().stack);
//     onFulfilled('Hello, World!');
//     }
//    };
//    console.log(await p); // Prints "He