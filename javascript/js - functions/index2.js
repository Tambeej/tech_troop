//Ex 1.
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += capitalizeProfession(person.profession);
  summary += `from ${connectCountryCity(person.city, person.country)}. `;
  summary += `${capitalize(person.name)} loves to say "${capitalizeCatchphrase(
    person.catchphrase
  )}.".`;
  return summary;
};

const getAge = function (age) {
  if (age < 21) {
    return "an Underaged";
  }
  if (age > 55) {
    return "a 55+";
  }
  return age;
};
const capitalizeProfession = function (profession) {
  return capitalize(profession);
};
const capitalizeCatchphrase = function (catchphrase) {
  return capitalize(catchphrase);
};
const connectCountryCity = function (city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`;
};

console.log(getSummary(people_info[2]));

//Ex 2.

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function (sentence) {
  for (let char of specialChars) {
    sentence = sentence.split(`${char}`).join(" ");
  }
  return sentence.toLowerCase();
};

const countWords = function (sentence) {
  cleanSentence = cleanText(sentence);
  let sentenceArr = cleanSentence.split(" ");
  for (let word of sentenceArr) {
    addToCounter(word);
  }
};

const addToCounter = function (word) {
  wordCounts[word] = wordCounts[word] ? wordCounts[word] + 1: 1;
};

countWords(story);

console.log(wordCounts);