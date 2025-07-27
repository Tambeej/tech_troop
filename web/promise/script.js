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
          processedAt: new Date().toLocaleTimeString()
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
  { name: "report.docx", time: 1000 }
];
