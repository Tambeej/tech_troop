import promptSync from "prompt-sync";
const prompt = promptSync();
let currentBalnce = 100;

function deposit(amount) {
  if (amount < 0) {
    console.log("You tried to deposit less than 0");
    return;
  }
  currentBalnce += amount;
}

function withdraw(amount) {
  if (amount < 0) {
    console.log("You tried to withdraw less than 0");
    return;
  }
  if (currentBalnce - amount < 0) {
    console.log("You have overdraft");
  }
  currentBalnce -= amount;
}

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
      const depositAmount = parseInt(prompt(">"));
      deposit(depositAmount);
    } else if (answer == 3) {
      console.log("How much do you want to withdraw from your bank account?");
      const withdrawAmount = parseInt(prompt(">"));
      withdraw(withdrawAmount);
    }
    console.log(
      "Menu:\n1) Check Balance, \n2) Deposit, \n3) Withdraw, \n4) Exit"
    );
    answer = parseInt(prompt(">"));
  }
  console.log("Bye Bye!");
}

bankSystem();
