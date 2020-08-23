var { numArray } = require("./variables");

const multipleBy2 = (n) => n * 2; //function that multiply params by 2
const multipleBy3 = (n) => n * 3; //function that multiply params by 3

const multipleBy2Array = numArray.map(multipleBy2); // Returns new array
const multipleBy3Array = numArray.map(multipleBy3); //Returns new array

console.log(numArray); //we can get the source at any point
console.log(multipleBy2Array);
console.log(multipleBy3Array);
