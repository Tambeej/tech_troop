const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

const keys = Object.keys(dictionary);

for (let key of keys) {
  console.log(`Words that begin with  ${key}:`);
  for (word of dictionary[key]) {
    console.log(`    ${word}`);
  }
}
