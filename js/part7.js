// this keyword

// let student = {
//   name: "Ahmed",
//   age: 19,
//   eng: 99,
//   phy: 98,
//   maths: 100,
//   getavg() {
//     console.log(this.eng + this.phy + this.maths);
//   },
// };

// try & catch
// The try statement allows you to define a block of code to be tested for errors while it
// is being executed.
// The catch statement allows you to define a block of code to be executed, if an error
// occurs in the try block.

// console.log("adseaw");
// console.log("adseaw");
// try {
//   console.log(a);
// } catch (err) {
//   console.log("an error occurred");
//   console.log(err);
// }
// console.log("adseaw");
// console.log("adseaw");
// console.log("adseaw");

// Arrow Functions
// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(5, 6);

// const hello = () => {
//   console.log("hello");
// };

// const mul = (a, b) => a * b; // we can skip return keyword if we want just one value it is called impplicit return

// set Timeout function is used to set timer
// setTimeout( function, timeout ) milliseconds

// console.log("setTimeout");
// setTimeout(() => {
//   console.log("Print");
// }, 3000);
// console.log("aEDFas");

// setlnterval( function, timeout )
// setInterval works so many times after the same interval
// to stop the execution we have to write clearInterval(Id);

// let id = setInterval(() => {
//   console.log("Printy");
// }, 2000);
// console.log(id);

// this with Arrow Functions
// arrow functions scope is scope of its oparent.

// let id = setInterval(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

// practise q1:
// let arrayAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum / arr.length);
// };
// arr = [1, 2, 3, 4, 5];
// arrayAverage(arr);

// practise q4:
let length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback);

