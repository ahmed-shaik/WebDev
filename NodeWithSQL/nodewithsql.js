//we use faker to generate fake data

// const faker = require("@faker-js/faker");

// const getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// console.log(getRandomUser());

// MySQL2 Package
// To connect Node with MySQL
// connection.end(); II to close connection

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "MySQL",
});

// const q = "show tables";
// const q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let user = ["123", "123_newuser", "abd@gmail.com", "abc"];
// users = [
//   ["123b", "123_newuserb", "abd@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abd@gmail.comc", "abcc"],
// ];
// let user2 = ["123b", "123_newuserb", "abd@gmail.comb", "abcb"];
// let user3 = ["123c", "123_newuserc", "abd@gmail.comc", "abcc"];
// try {
//   connection.query(q, [users], (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     // console.log(res[0]);
//     // console.log(res[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// mysql -u root -p
// too run in cli

// source schema.sql --> to a saved file

// const faker = require("@faker-js/faker").faker;

// const getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(), // before version 9.1.0, use userName()
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// const q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];

// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     // console.log(res[0]);
//     // console.log(res[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// Routing
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let q = "select count(*) from user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      // res.send(result[0]["count(*)"]);
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.get("/users", (req, res) => {
  let q = "select id, username, email from user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
  }
});

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: fromPass, username: newUsername } = req.body;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (fromPass != user.password) {
        res.send("wrong pass");
      } else {
        let q2 = `update user set username = '${newUsername}' where id= '${id}' `;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      res.send(user);
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
