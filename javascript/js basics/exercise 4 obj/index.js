const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};
const hasOven = kitchen.hasOven;
const fridge = kitchen.fridge;
const fridgePrice = fridge.price;
const fridgeWorks = fridge.works;
const fridgeItems = fridge.items;

if (hasOven) {
  if (fridgeWorks) {
    console.log(
      `Geraldine's ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.`
    );
  } else {
    console.log(
      `Geraldine's ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${fridgePrice/2} to fix the fridge.`
    );
  }
} else {
  if (fridgeWorks) {
    console.log(
      `Geraldine's ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.`
    );
  } else {
    console.log(
      `Geraldine's ${fridgeItems[1].name} expired ${fridgeItems[1].expiryDate} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay ${fridgePrice/2} to fix the fridge.`
    );
  }
}
