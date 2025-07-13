let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, "rabbit"];
vegetableArr = vegetableArr.filter((item) => item !== "rabbit");

console.log(meatArr);
console.log(vegetableArr);

var firstPiece = { id: 101, name: "Ofri" };

var seoncdPiece = { country: "Israel" };

let passport = { ...firstPiece, ...seoncdPiece };
console.log(passport);

let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

const missingData = employeesArr.filter((map) => {
  //   return Object.values(map).some(value => value === null || typeof value === 'undefined');
  return Object.values(map).some((value) => (value ?? null) === null);
});

console.log(missingData);
