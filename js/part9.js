// // DOM (Document Object Model)
// // The DOM represents a document with a logical tree.
// // It allows us to manipulatelchange webpage content (HTML elements).

// // Selecting Elements

// // getEIementById
// // Returns the Element as an object or null (if not found)
// let obj = document.getElementById("mainImg");
// // console.dir(obj);

// // getElementByClassName
// // Returns the Elements as an HTML Collection or empty collection (if not found)
// let obj1 = document.getElementsByClassName("boxlinl");
// // console.dir(obj1);

// // getEIementByTagName
// // Returns the Elements as an HTML Collection or empty collection (if not found)
// let obj2 = document.getElementsByTagName("p");

// // Query Selectors
// // Allows us to use any CSS selector
// document.querySelector("p"); //Selects first p element
// document.querySelector("#myld"); //Selects first element with id =myld
// document.querySelector(".myClass"); // Selects first element with class = myClass

// document.querySelectorAll("p"); // Selects all p elements

// // Using Properties & Methods
// // innerText
// // Shows the visible text contained in a node

// // textContent
// // Shows all the full text

// // innerHTML
// // Shows the full markup
// let para = document.querySelector("p");
// // console.log(para.textContent);

// para.innerText = "I am peter parker";
// para.innerHTML = "i am <b>peter parker</b>";

// // Manipulating Attributes
// // obj.getAttribute( attr )
// // obj.setAttribute( attr, val )
// let img = document.querySelector("img");
// let imgId = img.getAttribute("id");
// // console.log(imgId);
// img.setAttribute("id", "abedhy");

// // Manipulating Style
// // style Property - it chamges inline style
// // obj.style
// let head = document.querySelector("h1");
// head.style.color = "orange";
// head.style.backgroundColor = "purple";

// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "purple";
// }

// // using classList
// // obj.cIassList
// // classList.add( ) to add new classes
// // classList.remove( ) to remove classes
// // classList.contains( ) to check if class exists
// // classList.toggle( ) to toggle between add & remove
// // console.log(head.classList);
// head.classList.add("green");
// head.classList.remove("green");

// // Navigation
// // parentEIement
// // children -return html collection
// // previousEIementSibling I nextEIementSibIing
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
// console.log(h4.childElementCount);
// console.log(h4.previousElementSibling);
// console.log(h4.nextElementSibling);

// // Adding Elements
// // document.createEIement('p')
// // appendChild(element)
// // append(element)  - add in last
// // prepend(element) - add at first
// // insertAdjacentElement(where, element)
// //      beforebegin : Before the targetEtement itself.
// //      'afterbegin' : Just inside the targetEIement , before its first child.
// //      'beforeend' : Just inside the targetEtement , after its last child.
// //      'afterend' : After the targetEtement itself.

// let newP = document.createElement("p");
// console.dir(newP);
// newP.innerText = "Hi I am new P ";
// let body = document.querySelector("body");
// body.appendChild(newP);

// let box = document.querySelector(".box");
// box.appendChild(newP);

// let btn = document.createElement("button");
// btn.innerText = "click me";
// newP.append("Hello ");
// newP.append(btn);
// newP.prepend(btn);

// //insertAdjacentElement
// let p = document.querySelector("p");
// p.insertAdjacentElement("beforebegin", btn);

// //Removing Elements
// // removeChiId( element )
// // remove( element )
// body.removeChild(btn);
// btn.remove();

// practise question
let p = document.createElement("p");
// p.innerText = "Hey I am Red";
// p.style.color = "red"; //do this with the ccs file and use classList.add here
// //css
// //.red {
// // color:red;
// // }
// // js
// // p.classLst.add("red");

// let body = document.querySelector("body");
// body.appendChild(p);

// let h3 = document.createElement("h3");
// h3.innerText = "I am Blue H3";
// h3.style.color = "blue";
// body.appendChild(h3);

// let div = document.createElement("div");
// div.style.backgroundColor = "pink";
// div.style.border = "2px solid black";
// body.appendChild(div); //can also use append

// let h1 = document.createElement("h1");
// h1.innerText = "I am in  a div";
// div.appendChild(h1); //can also use append

// let p1 = document.createElement("p");
// p1.innerText = "Me too";
// div.appendChild(p1);

//assignment
let inp = document.createElement("input");
document.querySelector("body").append(inp);

let button = document.createElement("button");
document.querySelector("body").append(button);
button.innerText = "click me";

inp.setAttribute("placeholder", "User Name");
inp.setAttribute("innerText", "CLick Me");
