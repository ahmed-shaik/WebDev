const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method")); // to use PUT and DELETE methods in forms

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // to parse form data

// mongodb
// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me your exam sheets",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error in saving chat1", err);
//   });

main()
  .then(() => {
    console.log("connection to mongodb is sucessfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// express

// index
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

// create new post
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  const chat1 = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  chat1
    .save()
    .then((data) => {
      console.log("its saved");
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(chat1);
  res.redirect("/chats");
});

// edit
app.get("/chats/:id/edit", async (req, res) => {
  let chat = await Chat.findById(req.params.id);
  // console.log(chat);
  res.render("edit.ejs", { chat });
});

// upadate
app.put("/chats/:id", async (req, res) => {
  let { from, to, msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    req.params.id,
    {
      msg: msg,
    },
    {
      runValidators: true,
      new: true, // to return the updated document
    }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Destroy
app.delete("/chats/:id", async (req, res) => {
  let deletedChat = await Chat.findByIdAndDelete(req.params.id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("root is working");
});
app.listen(8080, () => {
  console.log("running at port: 8080");
});
