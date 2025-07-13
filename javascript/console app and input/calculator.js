console.log("Args", process.argv);
const number1 = process.argv[2];
const operation = process.argv[3];
const number2 = process.argv[4];

if (isStringNumeric(number1) && isStringNumeric(number2)) {
  if (operation == "+") {
    console.log(`result: ${number1 + number2}`);
  } else if (operation == "-") {
    console.log(`result: ${number1 - number2}`);
  } else if (operation == "*") {
    console.log(`result: ${number1 * number2}`);
  } else if (operation == "/") {
    if (number2 == 0) {
      console.log("cant devide by zero");
    } else {
      console.log(`result: ${number1 / number2}`);
    }
  } else {
    console.log("Invalid operation");
  }
} else {
  console.log("You need to enter only numbers");
}

function isStringNumeric(str) {
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
