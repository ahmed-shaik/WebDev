// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  content: String, // Contains HTML string
});

module.exports = mongoose.model("Post", postSchema);
