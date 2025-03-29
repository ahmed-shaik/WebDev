// JavaScript Runtime Environment
// It is used for server side programming.
// *Node.js is not a language, library or framework.

// it is used to run js outside the browser

// node fileName.js

// process : This object provides information about, and control over, the current Node.js process.
// process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched.

// require() a built-in function to include external modules that exist in separate files.
// module.exports a special object
// module.exports - used to use the functions from the other files
// const val = require("./for(first)usageofmodulexportex-1");
// console.log(val);
// console.log(val.sum(1, 2));
// const value = require("./dummyfoldef_for_moduleexports_in_firts.jsFile");
// console.log(value);

// npm(Node package manager) is standard packade for Node.js
// npm install <package_name> - to install a package

// node_modules - The node_modules folder contains every installed dependency for your project.
// package-lock.json - It records the exact version of every installed dependency, including its sub-dependencies and their versions.

const figlet = require("figlet"); // figlet is a package that allows you to create text banners in various fonts using ASCII characters.

figlet("Ahmed", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// packagejson - The package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies
// if node_module is deleted by mistake then we can reinstall it using (npm install) - this install every package in package.json file

// when creating a new project we can use (npm init) - this will create a package.json file

// npm install -g <- package name -> - this will install the package globally, so it can be used in any project on your system
// npm link <- package name -> - this will create a symbolic link to the package, so it can be used in any project on your system

// import - import is used to include modules in the current file
// export - export is used to export modules from the current file
// to import a module, using import we should create a package.json file and set the type to module
// "type": "module" - this will allow us to use import and export in the current file
// and we use export to variables and functions to make them available for import in other files
// import { sum } from "./math.js"

// We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
// Loading is synchronous for 'require' but can be asynchronous for 'import'.
