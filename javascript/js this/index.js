//Ex 1.
const feedFunction = function () {
  if (this.hungry) {
    this.hungry = false;
    console.log("Im no longer hungry!");
  }
};

const person = {
  hungry: true,

  feed: feedFunction,
};

person.feed();

//Ex 2.
const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

//Ex 3.

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const flyAirplane = function () {
  if (this.fuel < 2) {
    return "on the ground!";
  } else {
    return "flying!";
  }
};

const airplane = {
  fly: flyAirplane,
  fuel: 0,
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());

//Ex 4.

const steal = function (stolenCoins) {
  this.coinCount -= stolenCoins;
};

const tipJar = {
  coinCount: 20,
  stealCoins: steal,
  tip: function () {
    this.coinCount += 1;
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

//Ex 5.
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that.",
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//Ex 6.

const buy = function (amount, drinkType) {
  this.money -= amount * this.drinkRequirements[drinkType].price;
  this.beans+=amount;
};
const coffeeShop = {
  beans: 40,
  money: 100,
  buyBeans: buy,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 10, price: 5 },
    doubleShot: { beanRequirement: 10, price: 5 },
    frenchPress: { beanRequirement: 10, price: 5 },
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]) {
      if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
        console.log("Sorry, we're all out of beans");
      } else {
        console.log(`${drinkType} is ready!`);
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      }
    } else {
      console.log(`Sorry, we don't make ${drinkType}`);
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyBeans(10, "latte");
console.log(coffeeShop.money);
console.log(coffeeShop.beans);
