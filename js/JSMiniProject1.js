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
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");

let start = false;
let l = 0;

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("Game started");
    start = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  l++;
  h2.innerText = `level ${l}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randBtn = document.querySelector(`.${btns[randIdx]}`);
  gameSeq.push(btns[randIdx]);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game over!, Press any key to restart";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  l = 0;
}
