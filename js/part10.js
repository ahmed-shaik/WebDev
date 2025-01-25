// 3 ways to perform activities
// in line, using onclick etc, and eventlistener
//Mouse events
// onclick (when an element is clicked)
// onmouseenter (when mouse enters an element)

// let btn = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("onclick");
// };

// btn.onmouseenter = function () {
//   console.log("onmouseenter");
// };

// addEventListener
// element.addEventListener( event, callback )
// for (b of btn) {
//   b.addEventListener("click", function () {
//     console.log("onclick");
//   });
//   b.addEventListener("click", function () {
//     alert("onclick");
//   });
//   b.addEventListener("mousemove", function () {
//     document.querySelector("body").style.backgroundColor = "blue";
//   });
// }

// activity
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let h2 = document.querySelector("h2");
//   let color = generateColors();
//   h2.innerText = color;
//   let div = document.querySelector("div");
//   div.style.backgroundColor = color;
// });
// function generateColors() {
//   let one = Math.floor(Math.random() * 255) + 1;
//   let two = Math.floor(Math.random() * 255) + 1;
//   let three = Math.floor(Math.random() * 255) + 1;
//   return `rgb(${one}, ${two}, ${three})`;
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("para was clicked");
// });

// this in Event Listeners
// When 'this' is used in a callback of event handler of something, it refers to that something.
// function changeCotor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }
// p.addEventListener(" click", changeCotor);
// hl.addEventListener(" click", changeColor);
// h3.addEventListener(" click", changeColor);

// keyboard events
// let inp = document.querySelector("input");
// // inp.addEventListener("keydown", () => {
// //   console.log("kEY WAS pRESSED");
// // });
// inp.addEventListener("keyup", function (event) {
//   //   console.log(event); //code key
//   console.log("kEY WAS released", event.key, event.code);
// });

// form event
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   alert("Form Submitted");
  let inp = this.elements[0]; //document.querySelector("input");
  console.log(inp.value);
});

// change event
// The change event occurs when the value of an element has been changed (only works on <input>, <textarea>
// and <select> elements).

// input event
// The input event fires when the value of an <input> , <select> , or <textarea> element has been changed.
