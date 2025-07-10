//Ex 1.

const findFactorial = function (number) {
  if (number == 1) {
    return number;
  }
  return findFactorial(number - 1) * number;
};

console.log(findFactorial(5));

//Ex 2.

const reverseAddEmptyString = function (string) {
  return reverseString(string, "");
};

const reverseString = function (string, newString) {
  if (string.length == 1) {
    return string + newString;
  }
  return reverseString(string.slice(1), string.slice(0, 1) + newString);
};

console.log(reverseAddEmptyString("Yellow"));

//Ex 3.

const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  if (arr1.length == 0) {
    return;
  }
  let current = arr1.shift();
  arr2.push(current);
  return swap(arr1, arr2);
};

swap(arr1, arr2);
console.log(arr1);
console.log(arr2);
