const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let namesIndex in names) {
  people.push({ name: names[namesIndex], age: ages[namesIndex] });
  console.log(people[namesIndex]);
}
for (let person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
