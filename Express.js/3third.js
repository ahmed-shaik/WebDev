// Get & Post Requests

// GET
// > Used to GET some response
// > Data sent in query strings
// (limited, string data & visible in URL)

// POST
// > Used to POST something (for Createl Writel Update)
// > Data sent via request body (any type of data)

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`This is running on 3000 port`);
});

app.get("/register", (req, res) => {
  //   res.send("Standard get response");

  // because we are know req is in query
  let { user, pass } = req.query;
  res.send(`User: ${user}, Pass: ${pass}`);
});
// Handling Post requests
// • Set up POST request route to get some response
// • Parse POST request data
app.use(express.urlencoded({ extended: true })); // it is used to parse form data

app.use(express.json()); // it is used to parse JSON data
app.post("/register", (req, res) => {
  //   res.send("Standard post response");
  console.log(req.body);
  let { user, pass } = req.body;
  res.send(`User: ${user}, Pass: ${pass}`);
});

// Object Oriented Programming
// To structure our code
// • prototypes
// Object Prototypes

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// It is like a single template object that all objects inherit methods and properties from without having
// their own copy.
// Every object in JavaScript has a built-in property, which is called its prototype.

// arr.__proto_ (reference)
Array.prototype; // reference to the prototype of the array object
String.prototype; // reference to the prototype of the string object

// Factory Functions
// A function that create objects
function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };
  return person;
}
// this is not effective way to create objects because it creates every thing in the memory for each object;

// • New Operator
// Constructors — doesn't return anything & start with capital
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person("John", 25);

// • constructors
// classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

// Inheritance
// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

// • keywords (extends, super)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // call the constructor of the parent class
    this.subject = subject;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call the constructor of the parent class
    this.grade = grade;
  }
}
