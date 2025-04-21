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




class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type; // e.g., cruiser, sport, touring
    }

    getDetails() {
        return `${super.getDetails()} - Type: ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors; 
    }

    getDetails() {
        return `${super.getDetails()} - Doors: ${this.doors}`;
    }
}

let bike = new Motorcycle("Harley-Davidson", "Street 750", 2020, "Cruiser");
console.log(bike.getDetails());

let sedan = new Car("Toyota", "Camry", 2021, 4);
console.log(sedan.getDetails());