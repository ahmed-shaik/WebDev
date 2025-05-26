// in this chapter we see how to use mongodb in plain js

// Mongoose
// A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment

// It is an ODM (Object Data Modeling) Library.

const mongoose = require("mongoose");

// main()
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// Models
// Model in mongoose is a class with which we construct documents.

// const User = new mongoose.model("User", userSchema);
// User in js becomes  ----->  users in mongodb

// const user1 = new User({
//   name: "ahmed",
//   email: "ahmed@gmail.com",
//   age: 41,
// });
// const user2 = new User({
//   name: "Eve",
//   email: "aEve@gmail.com",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 50,
//   },
//   {
//     name: "Peter",
//     email: "peter@gmail.com",
//     age: 30,
//   },
//   {
//     name: "Bruce",
//     email: "bruce@gmail.com",
//     age: 47,
//   },
// ]).then((data) => {
//   console.log(data);
// });

// FIND
// Model.find() //returns a Query Object (thennable)

// *Mongoose Queries are not promises. But they have a .then( )

// User.find({ age: { $gt: 47 } }).then((data) => {
//   console.log(data);
// });

// User.findOne({ age: { $gt: 47 } }).then((data) => {
//   console.log(data);
// });
// User.findById("68331338f270b3cd9e88b759").then((data) => {
//   console.log(data);
// });

// Update
// User.updateOne({ _id: "68331338f270b3cd9e88b759" }, { age: 20 }).then(
//   //no need to use set op
//   (data) => {
//     console.log(data);
//   }
// );

// User.updateMany({ age: { $gt: 47 } }, { age: 50 }).then((data) => {
//   console.log(data);
// });

// this update method return meta data

// so we use findOneAndUpdate

// User.findOneAndUpdate(
//   { _id: "68331338f270b3cd9e88b759" },
//   { age: 28 },
//   { new: true } // this option returns the updated document
// ).then((data) => {
//   console.log(data);
// });

// User.findByInandUpdate()

// User.deleteOne({ name: "Bruce" }).then((data) => {
//   console.log(data);
// });

// User.deleteMany({ age: { $gt: 40 } }).then((data) => {
//   console.log(data);
// });

// Model. findByldAndDelete()
// Model.findOneAndDelete( )

// Books.js to implement books collection from amazon
main()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  // title: String,
  // aurthor: String,
  // price: Number
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  aurthor: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Cant be less than 1"],
  },
  discounbt: {
    type: Number,
    default: 0,
  },
  categeory: {
    type: String,
    enum: ["fictional", "non-fictional"],
  },
  genre: [String],
});

const Book = new mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics 2",
//   aurthor: "RD Sharma",
//   price: 1200,
//   genre: ["sfd", "feda"],
// });

// book1
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// rules in the schema does not apply fro update

Book.findByIdAndUpdate(
  "68345d0b4244eed8c4a54545",
  { price: -23 },
  { runValidators: true },
  { new: true }
)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
