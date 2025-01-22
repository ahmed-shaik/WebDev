// DOM (Document Object Model)
// The DOM represents a document with a logical tree.
// It allows us to manipulatelchange webpage content (HTML elements).

// Selecting Elements

// getEIementById
// Returns the Element as an object or null (if not found)
let obj = document.getElementById("mainImg");
// console.dir(obj);

// getElementByClassName
// Returns the Elements as an HTML Collection or empty collection (if not found)
let obj1 = document.getElementsByClassName("boxlinl");
// console.dir(obj1);

// getEIementByTagName
// Returns the Elements as an HTML Collection or empty collection (if not found)
let obj2 = document.getElementsByTagName("p");

// Query Selectors
// Allows us to use any CSS selector
document.querySelector("p"); //Selects first p element
document.querySelector("#myld"); //Selects first element with id =myld
document.querySelector(".myClass"); // Selects first element with class = myClass

document.querySelectorAll("p"); // Selects all p elements

// Using Properties & Methods
// innerText
// Shows the visible text contained in a node

// textContent
// Shows all the full text

// innerHTML
// Shows the full markup
let para = document.querySelector("p");
// console.log(para.textContent);

para.innerText = "I am peter parker";
para.innerHTML = "i am <b>peter parker</b>";

// Manipulating Attributes
// obj.getAttribute( attr )
// obj.setAttribute( attr, val )
let img = document.querySelector("img");
let imgId = img.getAttribute("id");
// console.log(imgId);
img.setAttribute("id", "abedhy");

// Manipulating Style
// style Property - it chamges inline style
// obj.style
let head = document.querySelector("h1");
head.style.color = "orange";
head.style.backgroundColor = "purple";

let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "purple";
}

// using classList
// obj.cIassList
// classList.add( ) to add new classes
// classList.remove( ) to remove classes
// classList.contains( ) to check if class exists
// classList.toggle( ) to toggle between add & remove
// console.log(head.classList);
head.classList.add("green");
head.classList.remove("green");

// Navigation
// parentEIement
// children
// previousEIementSibling I nextEIementSibIing
