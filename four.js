let { numArray } = require("./variables");

const addArray = numArray.reduce((a, b) => a + b, 0);
const subArray = numArray.reduce((a, b) => a - b, 0);
const arrayToObject = numArray.reduce((a, b) => ({ ...a, [b]: b }), {});

console.log(numArray);
console.log(addArray);
console.log(subArray);
console.log(arrayToObject);
