const express = require("express");
const path = require("path");
const { v4: uuid4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuid4(),
    title: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile programming language used for web development. It allows developers to create interactive and dynamic web applications. " +
      "It was originally developed for client-side scripting but has evolved to support backend development with Node.js. " +
      "With features like event-driven programming, closures, and asynchronous capabilities, JavaScript remains one of the most widely used languages in the world.",
    author: "John Doe",
  },
  {
    id: uuid4(),
    title: "Understanding Node.js",
    content:
      "Node.js is a runtime environment that allows JavaScript to run outside the browser. It is built on Chrome's V8 engine and enables developers to build scalable network applications. " +
      "It is event-driven and uses a non-blocking I/O model, making it lightweight and efficient. " +
      "Popular frameworks like Express.js make backend development with Node.js even more powerful and easy to use.",
    author: "Jane Smith",
  },
  {
    id: uuid4(),
    title: "CSS Grid vs Flexbox",
    content:
      "Both CSS Grid and Flexbox are powerful layout tools. Grid is best for 2D layouts, while Flexbox is ideal for 1D layouts. " +
      "CSS Grid allows precise placement of elements in rows and columns, making it great for complex designs. " +
      "On the other hand, Flexbox is best suited for aligning items along a single axis, making it useful for navigation bars, forms, and dynamic UI components.",
    author: "Alice Johnson",
  },
  {
    id: uuid4(),
    title: "What is Express.js?",
    content:
      "Express.js is a minimalist web framework for Node.js. It simplifies handling routes, middleware, and API requests, making backend development more efficient. " +
      "Express provides robust features like routing, template engines (like EJS), and middleware support. " +
      "It is widely used in building RESTful APIs and full-stack applications alongside frontend technologies like React and Angular.",
    author: "Bob Williams",
  },
  {
    id: uuid4(),
    title: "How to Use Fetch API",
    content:
      "The Fetch API allows JavaScript to make HTTP requests. It is commonly used to retrieve data from APIs asynchronously, replacing the older XMLHttpRequest. " +
      "With Fetch, developers can handle API calls using promises and async/await, making the code cleaner and more readable. " +
      "A typical Fetch request includes fetching JSON data, handling errors, and displaying the response dynamically on a webpage.",
    author: "Charlie Brown",
  },
  {
    id: uuid4(),
    title: "Responsive Web Design Principles",
    content:
      "Responsive design ensures that web applications work across different devices and screen sizes. It involves flexible grids, media queries, and mobile-first design. " +
      "Using techniques like fluid layouts, percentage-based widths, and viewport-based units, developers can create websites that adapt seamlessly. " +
      "Frameworks like Bootstrap simplify responsive design, but CSS Flexbox and Grid are also great for custom layouts.",
    author: "David Lee",
  },
  {
    id: uuid4(),
    title: "Understanding Promises in JavaScript",
    content:
      "Promises in JavaScript handle asynchronous operations. They have three states: pending, resolved, and rejected. " +
      "Promises allow developers to execute non-blocking code, making them essential for handling API requests and delays. " +
      "The introduction of async/await has further simplified working with promises, making asynchronous code look more synchronous and readable.",
    author: "Ella Scott",
  },
  {
    id: uuid4(),
    title: "Building a Simple API with Node.js",
    content:
      "APIs allow applications to communicate. Using Express.js, we can create a simple REST API to handle CRUD operations. " +
      "A basic API consists of routes that handle GET, POST, PUT, and DELETE requests. " +
      "Middleware functions like body-parser help process JSON requests, while tools like Postman are used for testing API endpoints.",
    author: "Franklin Harris",
  },
  {
    id: uuid4(),
    title: "JavaScript ES6 Features",
    content:
      "ES6 introduced new features like let/const, arrow functions, template literals, destructuring, and promises. " +
      "These modern JavaScript features improve readability and efficiency. " +
      "For example, arrow functions simplify function syntax, template literals allow string interpolation, and destructuring helps extract values from arrays and objects easily.",
    author: "Grace Miller",
  },
  {
    id: uuid4(),
    title: "What is Asynchronous JavaScript?",
    content:
      "JavaScript is single-threaded, but it handles asynchronous operations using callbacks, promises, and async/await. " +
      "Asynchronous programming allows tasks like fetching data, waiting for user input, or executing timers without blocking the main thread. " +
      "Understanding async concepts is crucial for working with APIs, event listeners, and real-time applications.",
    author: "Henry Adams",
  },
];

app.listen(port, () => {
  console.log("server started at port 8080");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let post = req.body;
  post.id = uuid4();
  console.log(post);
  posts.push(post);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id == p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let con = req.body.content;
  let post = posts.find((p) => id == p.id);
  post.content = con;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
