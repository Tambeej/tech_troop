import promptSync from "prompt-sync";
const prompt = promptSync();
let currentBalnce = 100;
function bankSystem() {
  console.log(
    "Menu:\n1) Check Balance, \n2) Deposit, \n3) Withdraw, \n4) Exit"
  );
  let answer = parseInt(prompt(">"));
  while (answer !== 4) {
    if (answer === 1) {
      console.log(currentBalnce);
    } else if (answer === 2) {
      console.log("How much do you want to deposite to your bank account?");
      const deposit = parseInt(prompt(">"));
      currentBalnce += deposit;
    } else if (answer == 3) {
      console.log("How much do you want to withdraw from your bank account?");
      const withdraw = parseInt(prompt(">"));
      currentBalnce -= withdraw;
    }
    console.log(
      "Menu:\n1) Check Balance, \n2) Deposit, \n3) Withdraw, \n4) Exit"
    );
    answer = parseInt(prompt(">"));
  }
  console.log("Bye Bye!");
}

bankSystem();
