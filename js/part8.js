// Array Methods
// • forEach - The forEach method allows you to go through each element in an array and perform some action with it. It does not return anything; it just "loops" through the array and runs the action for every element.
// • map - The map method is used to transform the items in an array. It creates a new array by applying a function to each item of the original array.
// • filter - The filter method is used to create a new array with only the items that pass a certain condition (test). If the condition is true for an item, that item is included in the new array.
// • some - The some method checks if at least one item in the array passes a condition. It returns true if one item meets the condition, and false if no items meet it.
// • every - The every method checks if all items in the array pass a condition. It returns true if every item meets the condition, and false if at least one item doesn't.
// • reduce - The reduce method takes an array and reduces it to a single value by applying a function. It allows you to "accumulate" a value as you go through the array.
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

// array.reduce((accumulator, currentValue) => {
//   // Do something with accumulator and currentValue
// }, initialValue);

//     initialValue (optional): This is the value that accumulator starts with. If you don't provide this, the first item of the array will be used as the initial value, and the loop will start with the second item.

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
