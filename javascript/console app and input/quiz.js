import promptSync from "prompt-sync";
const prompt = promptSync();

const questionArray = [
  "What is 2 + 2",
  "What is the capital of France",
  "What year is it",
];
const answerArray = [4, "Paris", 2025];
let userAnswers = 0;

function quiz() {
  for (let i = 0; i < questionArray.length; i++) {
    const answer = prompt(`Question ${i + 1}: ${questionArray[i]}? `);
    if (answer.toLowerCase() == answerArray[i].toLowerCase()) {
      userAnswers += 1;
    }
  }
  console.log(`Final Score: ${userAnswers}/${questionArray.length} correct!`);
}

quiz();
