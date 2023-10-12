

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    introduce() {
      console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, age, rollNumber) {
      super(firstName, lastName, age); // Calling  parent class constructor using super
      if (rollNumber <= 0) {
        throw new Error("\nRoll number must be greater than zero");
      }
      this.rollNumber = rollNumber;
    }
  
    introduce() {
      super.introduce(); // Call the parent class's introduce method
      console.log(`I am a student with roll number ${this.rollNumber}`);
    }
  }
  
  try {
    const person = new Person("Sanika", "Rane", 20);
    person.introduce();
  
    const student1 = new Student("Vaishnavi", "Desai", 19, 13);
    student1.introduce();
  
    // This will generate an exception due to an erroneous roll number
    const student2 = new Student("Parnika", "P", 4, 0);
  } catch (error) {
    console.error(error.message);
  }
  