// this file is used ftfor example for the module.exports in first file.
// const sum = (a, b) => {
//   return a + b;
// };
// const diff = (a, b) => {
//   return a - b;
// };

// const g = 10;
// const PI = 3.14;

// module.exports = 11222;
// let obj = {
//   sum: sum,
//   diff: diff,
//   g: g,
//   PI: PI,
// };
// module.exports = obj;

// module.exports = {
//   sum: sum,
//   diff: diff,
//   g: g,
//   PI: PI,
// };

module.exports.sum = (a, b) => {
  return a + b;
};
module.exports.diff = (a, b) => {
  return a - b;
};

module.exports.g = 10;
module.exports.PI = 3.14;

// or
exports.sum = (a, b) => {
  return a + b;
};
exports.diff = (a, b) => {
  return a - b;
};

exports.g = 10;
exports.PI = 3.14;
