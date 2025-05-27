const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

Chat.insertMany([
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "ahmed",
    to: "john",
    msg: "Let's meet at 5pm for coffee.",
    created_at: new Date(),
  },
  {
    from: "sara",
    to: "mike",
    msg: "Happy birthday! Have a great year ahead.",
    created_at: new Date(),
  },
  {
    from: "lisa",
    to: "emma",
    msg: "Can you share the project files?",
    created_at: new Date(),
  },
  {
    from: "tom",
    to: "alex",
    msg: "I'll be late to the meeting.",
    created_at: new Date(),
  },
  {
    from: "jane",
    to: "mark",
    msg: "Did you finish the assignment?",
    created_at: new Date(),
  },
  {
    from: "rohan",
    to: "simran",
    msg: "Let's go for a movie this weekend.",
    created_at: new Date(),
  },
  {
    from: "emma",
    to: "lisa",
    msg: "Thanks for your help yesterday!",
    created_at: new Date(),
  },
  {
    from: "alex",
    to: "tom",
    msg: "No worries, see you at the meeting.",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "I'll send the sheets by tonight.",
    created_at: new Date(),
  },
]);
