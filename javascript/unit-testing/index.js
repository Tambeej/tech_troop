//Ex 1.

//should return true if n is even, false otherwise
function isEven(n) {
  return n % 2 == 0 ? true : false;
}

//Ex 2.

//should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
}

//Ex 3.

function simplify(str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
}

//Ex 4.

function validate(arr) {
  let falsy = 0;
  let truthy = 0;
  for (let item of arr) {
    if (item === false) {
      falsy++;
    }
    if (item === true) {
      truthy++;
    }
  }
  if (truthy + falsy === 0) {
    throw new Error("Need at least one boolean");
  }
  return truthy > falsy;
}
module.exports = { removeAtLeastOne, isEven, simplify, validate };
