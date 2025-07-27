//Ex 1.
function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}

checkLuckyNumber(7)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

checkLuckyNumber(2)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

checkLuckyNumber(-7)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

//Ex 2.

function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

const start = Date.now();

const promises = files.map((file) => processFile(file.name, file.time));

Promise.all(promises)
  .then((results) => {
    const totalTime = (Date.now() - start) / 1000;
    console.log(`\n All files processed in ${totalTime.toFixed(2)} seconds`);
    console.log("Results:", results);
  })
  .catch((error) => {
    const totalTime = (Date.now() - start) / 1000;
    console.error(
      `\n Error after ${totalTime.toFixed(2)} seconds: ${error.message}`
    );
  });

//Ex 3.
// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 },
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        if (!inventory[item] || inventory[item].stock <= 0) {
          reject(new Error(`${item} out of stock`));
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let sum = 0;
      for (let item of items) {
        sum += item.price;
      }
      const tax = sum * 0.08;
      resolve(sum, tax, sum + tax);
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error("Payment failed. Please try again."));
      }
      resolve({
        transactionId: Math.floor(Math.random() * 1000000),
        amount,
        status: "success",
      });
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach((item) => {
        inventory[item].stock -= 1;
      });
      resolve("Inventory updated");
    }, 300);
  });
}

function checkout(itemNames) {
  return checkInventory(itemNames)
    .then((validItems) => calculateTotal(validItems))
    .then((priceDetails) => {
      return processPayment(priceDetails.total).then((paymentResult) => {
        return updateInventory(itemNames).then(() => ({
          payment: paymentResult,
          items: itemNames,
          summary: priceDetails,
        }));
      });
    });
}

Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
