var { numArray } = require("./variables");

console.log(numArray);

let newArray = numArray.forEach((ele) => {
  return ele * 2;
});

console.log(newArray); // foreach will not return anything. It just execute the function.

numArray.forEach((ele, index) => {
  numArray[index] = ele * 2;
});
//After the execution of first forEach the values inside the source get changed. This is main problem of forEach. It will mutate the source value. It is not recommended. Mutate the value is not advisable.
console.log(numArray);

numArray.forEach((ele, index) => {
  numArray[index] = ele * 5;
});

console.log(numArray);
