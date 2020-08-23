var { numArray } = require("./variables");

let newArray = numArray.map((ele) => ele * 2); // It will return new array. The source value remains same.

console.log(numArray);
console.log(newArray);
