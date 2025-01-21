// Array Methods
// • forEach
// • map
// • filter
// • some
// • every
// • reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let print = function (el) {
  console.log(el);
};

// arr.forEach(print);
// arr.forEach(function (el) {
//   console.log(el);
// });

// map
// let num = arr.map(function (el) {
//   return el * 2;
// });
let num = arr.map((el) => {
  return el * 2;
});
// console.log(num);

//filter
let fil = arr.filter((el) => {
  return el % 2 == 0;
});

//every
// Every Returns true if every element of array gives true for some function. Else returns false.
[2, 4, 6, 8].every((el) => el % 2 == 0);

//reduce
let max = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

// Default Parameters
// Giving a default value to the arguments

// function func (a, b = 2) {
//     //do something
// }

// Spread
// Expands an iterable into multiple values
Math.min(1, 2, 3, 1, 2, 3, 0);
Math.min(1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0);
let a = [1, 2, 3, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 0];
Math.min(...a);
// console.log(...a);
let newA = [...a];

//rest
function sun(...args) {
  // console.log(args[i]);
  return args.reduce((sum, el) => sum + el);
}

// Destructuring
// Storing values of array into multiple variables
let names = ["tony", "bruce", "peter"];
let [winner, runner] = names;
console.log(winner, runner);
