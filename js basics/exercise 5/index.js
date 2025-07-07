let customerType = "Regular";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

if ((customerType == "VIP")) {
  console.log(purchaseAmount * 0.8);
}
if ((customerType == "premium")) {
  if (dayOfWeek == 6 || dayOfWeek == 5) {
    console.log(purchaseAmount * 0.85);
  } else {
    console.log(purchaseAmount * 0.9);
  }
}
if ((customerType == "Regular")) {
  if (purchaseAmount > 100) {
    console.log(purchaseAmount * 0.9);
  } else if (purchaseAmount > 50) {
    console.log(purchaseAmount * 0.95);
  } else if (purchaseAmount < 50) {
    console.log(purchaseAmount);
  }
}
