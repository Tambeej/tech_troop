// Ex 1.

const isEven = function (num) {
  return num % 2 == 0;
};

const number = 3;
console.log(isEven(number));

//Ex 2.

const oddNums = function (arr) {
  for (let num of arr) {
    if (!isEven(num)) {
      console.log(num);
    }
  }
};

const arrary = [1, 2, 3];
oddNums(arrary);

//Ex 3.

function checkExists(arr, num) {
  for (let arrNum of arr) {
    if (arrNum == num) {
      return true;
    }
  }
  return false;
}

console.log(checkExists(arrary, number));

//Ex 4.

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2));

//Ex 5.
const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

const increaseByNameLength = function (money, name) {
  return money * name.length;
};

const makeRegal = function (name) {
  return `His Royal Highness, ${name}`;
};

turnToKing("martin luther", 100);

//EX 6.

const inThree = function (num) {
  return num * num * num;
};

const allNumsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const armstrong = function () {
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let h = 0; h <= 9; h++) {
        let currentNumber = i * 100 + j * 10 + h;
        if ((inThree(i) + inThree(j) + inThree(h)) == currentNumber) {
          console.log(currentNumber);
        }
      }
    }
  }
};

armstrong();
