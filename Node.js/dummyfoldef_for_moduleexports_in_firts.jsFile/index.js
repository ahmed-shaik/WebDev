// to send all the info in the directory to other file out of the directory we need to create a file called index.js in the directory and then we can use it in other files by using require("./directory_name").

const apple = require("./apple.js");
const banana = require("./banana.js");
let fruits = [apple, banana];
module.exports = fruits;
