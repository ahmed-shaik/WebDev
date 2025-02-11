// call stack
// Breakpoints

// JavaScript is single threaded
// writing the code in order from top to bottom is called sycnchronous
// using setTimeout() like function make js asynchronous. this asychronous nature of js brings a lot of problems along with it.

// callback hell
h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);
// setTimeout(() => {
//   h1.style.color = "blue";
// }, 4000);

// but this not advisable to it like this

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// changeColor("red", 1000);
// changeColor("green", 1000);
// changeColor("blue", 1000);

// this is also not advisable because the second fun must execute after first fun
// to soe the relation we se the below method

// function changeColor(color, delay, nextColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColor) nextColor();
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("blue", 1000);
//   });
// });

// Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.

// function saveToDb(data, success, failure) {
//   let speed = Math.floor(Math.random() * 10) + 1;
//   if (speed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// saveToDb(
//   "Hello",
//   () => {
//     console.log("Data saved successfully");
//     saveToDb(
//       "Hello",
//       () => {
//         console.log("Data saved successfully again");
//       },
//       () => {
//         console.log("Failed to save data again");
//       }
//     );
//   },
//   () => {
//     console.log("Failed to save data");
//   }
// );

// Promises
// resolve & reject
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed > 4) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

let request = saveToDb("Hi");
// console.log(request);
request
  .then(() => {
    console.log("Data saved successfully");
    return saveToDb("hello");
  })
  .then(() => {
    console.log("Data 2 saved");
  })
  .catch(() => {
    console.log("Failed to save data");
  });
