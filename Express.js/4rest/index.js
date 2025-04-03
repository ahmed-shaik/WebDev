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
  { id: uuid4(), username: "ahmed", content: "This is post 1" },
  { id: uuid4(), username: "pardhu", content: "This is post 2" },
  { id: uuid4(), username: "vara", content: "This is post 3" },
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
  let id = uuid4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id == p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

// Create id for Posts
// UUID Package

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let con = req.body.content;
  let post = posts.find((p) => id == p.id);
  post.content = con;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  console.log(post);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
