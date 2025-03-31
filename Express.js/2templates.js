// templating - it is like a blueprint.
// EJS EMBEDED JS TEMPLATES is a templating engine that allows you to generate HTML markup with plain JavaScript. It is often used in Node.js applications to render dynamic content on the server side before sending it to the client. EJS provides a simple syntax for embedding JavaScript code within HTML, making it easy to create dynamic web pages. It is commonly used with Express.js to render views and templates based on data passed from the server.

// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
const express = require("express");
const path = require("path"); // to join paths
const app = express();

app.set("view engine", "ejs"); // Set the view engine to EJS
app.set("views", path.join(__dirname, "./views")); // Set the views directory

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//  all the templates must be under views folder

app.get("/", (req, res) => {
  //   res.send("this is home");
  res.render("1.ejs");
});

// Interpolation Syntax - Interpolation refers to embedding expressions into marked up text.

// <% 'Scriptlet' tag, for control-flow, no output
// <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%= Outputs the value into the template (HTML escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

// sending database value to ejs template
app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
  res.render("rolldice.ejs", { dice });
});

//example for using ejs template
app.get("/ig/:username", (req, res) => {
  //   let { username } = req.params; // destructuring
  //   const followers = ["alice", "bob", "charlie"]; // array of followers
  //   res.render("ig.ejs", { username, followers });
  //   to get data from database we require it

  const instadata = require("./data.json"); // importing data from data.json file
  let username = req.params.username; // getting username from url
  //   console.log(req.params);
  let data = instadata[username]; // assigning data to variable
  res.render("ig.ejs", { data });
});

// using conditions in ejs
// we use <% if() {} %> to check the condition and <% } %> to close the condition - used in rolldice
// we use <% for() {} %> to loop through the array and <% } %> to close the loop - used in ig

// serving static files
// use write app.use(express.statioc());
app.use(express.static(path.join(__dirname, "public")));

// if we want to create a sub template we use includes
// to use this we write code in views/<foldername> directory
// take example of including head of page
// in includes folder/
