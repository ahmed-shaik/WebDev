// Library V/S Framework
// Library - A library is a collection of pre-written code that can be used to perform specific tasks.
// Framework - A framework is a set of pre-written code that provides a structure for developing software applications.

// Express.js is a web application framework for Node.js, designed for building web applications and APIs. It simplifies the process of creating server-side applications by providing a robust set of features and tools.
// It is used for server side programming.

// what does express do
// 1. it listens for incoming requests from clients (like web browsers or mobile apps).
// 2. It parses the data.
// 3. match response with routes.
// 4. send the response back to the client.

const express = require("express");
const app = express();
// console.dir(app);

// *Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   //   res.send("This is a basic response");
//   const code =
//     "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Mango</li></ul>";
//   res.send(code);
// });

// how to send a request. we have two params req and res
// req - request object - contains information about the request made by the client.
// res - response object - used to send a response back to the client.
//  req is a text response but express parses it into object

// Routing
// Routing is the process of defining how an application responds to a client request for a specific endpoint (URI) and HTTP method (GET, POST, PUT, DELETE, etc.).
// it is process of selecting a path for traffic in a network or between or across multiple networks.

app.get("/", (req, res) => {
  res.send("This is the home page");
});

// app.get("/apple", (req, res) => {
//   res.send("This is an apple page");
// });

// app.get("/banana", (req, res) => {
//   res.send("This is a banana page");
// });

// app.get("*", (req, res) => {
//   res.send("404 Page Not Found");
// });

// app.get("/:username/:id", (req, res) => {
//   console.log(req.params);
//   res.send("This is a POST request");
// });

// Nodemon - To automatically restart server with code changes

// Path Parameters - Path parameters are used to pass data in the URL. They are defined in the route using a colon (:) followed by a parameter name. For example, /user/:id is a route with a path parameter id.
// they are used because we cant create many routes for each user. we can create a single route and pass the user id as a parameter.

app.get("/:user/:id", (req, res) => {
  console.log(req.params);
  res.send("This is a get request");
});

// query string - Query strings are used to pass data in the URL after the question mark (?). They are defined using key-value pairs separated by ampersands (&). For example, /user?id=1&name=John is a route with query strings id and name.

app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  res.send(`search results for ${q}`);
});
