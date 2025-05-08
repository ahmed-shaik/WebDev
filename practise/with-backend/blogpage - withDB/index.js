const express = require("express");
const path = require("path");
const { v4: uuid4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(methodOverride("_method"));

const Post = require("./Post");

app.listen(port, () => {
  console.log("server started at port 8080");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find(); // Fetch all posts from MongoDB
  res.render("posts.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", async (req, res) => {
  const { title, author, content } = req.body;

  // Handle the array of content
  const combinedContent = content
    .map((item) => {
      if (item.startsWith("http://") || item.startsWith("https://")) {
        return `<img src="${item}" alt="Blog Image" style="max-width: 100%;" />`;
      } else {
        return `<p>${item}</p>`;
      }
    })
    .join("\n");

  const newPost = {
    id: uuid4(),
    title,
    author,
    content: combinedContent,
  };

  await Post.create(newPost);
  res.redirect("/posts");
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({ id }); // assuming your custom uuid is stored in the "id" field

    if (!post) {
      return res.status(404).send("Post not found");
    }

    res.render("show.ejs", { post });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/posts/:id/edit", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({ id });

    if (!post) {
      return res.status(404).send("Post not found");
    }

    res.render("edit.ejs", { post });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const updatedContent = req.body.content;

  try {
    const updatedPost = await Post.findOneAndUpdate(
      { id },
      { content: updatedContent },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }

    res.redirect("/posts");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findOneAndDelete({ id }); // match custom 'id' field, not '_id'
    res.redirect("/posts");
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Something went wrong while deleting the post.");
  }
});

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://coolbadboyvk18:ahmed9639.@blogcluster.6v7c2rx.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
