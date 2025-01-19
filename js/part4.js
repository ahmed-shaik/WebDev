//Loops

// for(initialisation; condition; updation) {
//do something
//}
// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

// for (let i = 1; i <= 15; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// break;

// lopps with array
// let fruits = ["apple", "banana", "orange", "mango"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for of
// let fruits = ["apple", "banana", "orange", "mango"];
// for (a of fruits) {
//   console.log(a);
// }

req = prompt("Please enter your request: ");
todo = [];
while (true) {
  if (req == "quit") {
    console.log("quiotting app");
    break;
  }
  if (req == "list") {
    console.log("--------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
      console.log("--------------");
    }
  } else if ((req = "add")) {
    let task = prompt("PLease enter the task you want to add");
    todo.push(task);
    console.log("Task added");
  } else if ((req = "delete")) {
    let i = console.log("Enter the index of the task you want to delete");
    todo.splice(i, 1);
    console.log("Task deleted");
  } else {
    console.log("wrong request");
  }
  req = prompt("P;ease enter your request: ");
}
