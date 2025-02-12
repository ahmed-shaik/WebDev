// async await
// async function greet() {
//   return "hello";
// }
// //async function returns promise if executed normally else throws error
// greet()
//   .then((result) => {
//     console.log("It was a success");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("IT was a failure");
//     console.log(err);
//   });
// let hi = async () => {
//   return 5;
// };

// Await Keyword
// pauses the execution of its surrounding async function until the promise is settled
// (resolved or rejected)
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   try {
//     await getNum();
//     await getNum();
//     await getNum();
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("Done");
//   console.log("Done");
//   console.log("Done");
//   console.log("Done");
// }
//if there some work to do after these functions and any await fails then the work will not be done.
// we use try and catch to handle rejections with await

//
//
//
// API
// Application programming interface
// Some Random APIs
// https://catfact.ninja/fact   (sends random cat facts)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)
//
// JSON
// JavaScript Object Notation www.json.org

// Accessing Data from JSON

// JSON.parse( data ) Method
// To parse a string data into a JS object

// JSON.stringify( json ) Method
// To parse a JS object data into JSON

// let json =
//   '{"fact": "Approximately 1/3 of cat owners think their pets are able to read their minds." , "length": 78}';
// let data = JSON.parse(json);
// console.log(JSON.parse(json));

// Testing API requests
// Tools

// • Hoppscoth
// • Postman
