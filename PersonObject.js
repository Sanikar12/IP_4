function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//arrow function as a non member ES6 method
class PersonWithArrowFunction {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Member Function (inside the class)
    myAge(age) {
        this.age = age;
        console.log(`I am ${this.age} years old`);
    }
}

// Define introduce as an arrow function outside the class
const introduce = (person) => {
    console.log(`I am ${person.firstname} ${person.lastname}`);
};

// Method 3: Using ES6 Class with Arrow Function (member function)
class PersonArrow {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Member Function (inside the class)
    myAge(age) {
        this.age = age;
    }

    introduce = () => {
        console.log(`I am ${this.firstname} ${this.lastname}, and I'm still ${this.age} years old.`);
    }
};

//anonymous class
const anonym = class{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}


console.log("Method 1: Using Function Keyword");
const person1 = new Person("Sanika", "Rane");
console.log(`Hello,I am ${person1.firstname}`);

console.log("\nMethod 2: Arrow function as non member");
const person2 = new PersonWithArrowFunction("Payoshni", "Khekale");
introduce(person2)
 age = person2.myAge(21);


console.log("\nMethod 3: Arrow function as member");
const person3 = new PersonArrow("Vaishnavi", "Chaudhary");
person3.myAge(20);
person3.introduce();

console.log("\nMethod 4: anonymous function");
const person4 = new anonym("Parnika","Parab");
console.log(`I am ${person4.firstname} ${person4.lastname}`)



