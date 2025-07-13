import readline from "readline";

let name, email, age, favoriteColor;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name: ", (answer) => {
  name = answer;
  rl.question("Email: ", (answer) => {
    email = answer;
    rl.question("Age: ", (answer) => {
      age = answer;
      rl.question("Favorite Color: ", (answer) => {
        favoriteColor = answer;
        rl.close();
        console.log(`Registration Summary:
Name: ${name}
Email: ${email}
Age: ${age}
Favorite Color: ${favoriteColor}`);
      });
    });
  });
});
