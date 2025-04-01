// REST - Representational State Transfer
// REST is an architectural style that defines a set of constraints to be used for creating web services.

// CRUD - Create, Read, Update, Delete
// CRUD operations

// GET retrieves resources.                - Read
// POST submits new data to the server     - Create
// PUT updates existing data               - Update
// PATCH update existing data partially    - Update
// DELETE removes data                     - Delete

// GET  /posts  -  to get data for all posts
// POST /posts  -  to add a new post
// GET  /posts/:id  -  to get data for a single post
// PATCH /posts:id -  to update specific post
// DELETE /posts/:id -  to delete a post

const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // to parse form data

let posts = [
  { id: "1a", username: "ahmed", content: "This is post 1" },
  { id: "2b", username: "pardhu", content: "This is post 2" },
  { id: "3c", username: "vara", content: "This is post 3" },
];

app.get("/", (req, res) => {
  res.send("server working");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
