// Functions
function hello() {
  console.log("hello");
}
function rollADice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
// rollADice();

// function funcName(arg1, arg2.. ) {
//      do something
// }
function printName(name) {
  console.log(name); // return name;
}
// printName("Ahmed");

// lexical scope
// a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// The opposite is NOT true.

// const variable = function(argl, arg2..) {
//      do or return something
// }

const sum = function (a, b) {
  return a + b;
};

function multipleGreet(func, count) {
  //higher order Functon
  for (let i = 1; i <= count; i++) {
    func();
  }
}
const greet = function () {
  console.log("Hello");
};
multipleGreet(greet, 5);

function oddOrEvenFactory(request) {
  if (request == "odd") {
    return function (n) {
      console.log(n % 2 != 0);
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Answer");
  }
}
//Methods
// Actions that can be performed on an object.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
