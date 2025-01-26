// Event bubling
// when we create nested element in html and add event listeners to all of the then automatically parents event will also be triggred
// to stop this we use event.stopPropagation() method
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   let li = document.createElement("li");
//   let button = document.createElement("button");
//   li.innerText = inp.value;
//   button.innerText = "delete";
//   button.classList.add("del");
//   ul.appendChild(li);
//   li.appendChild(button);
//   inp.value = "";
// });

// // the below things doesnt work for new elements so we use event delegation instead
// // let delBtn = document.querySelectorAll(".del");
// // for (del of delBtn) {
// //   del.addEventListener("click", function () {
// //     let par = this.parentElement;
// //     par.remove();
// //   });
// // }

// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     event.target.parentElement.remove();
//   }
// });

//
//simon says game
