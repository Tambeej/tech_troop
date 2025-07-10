//Ex 1.

const StringFormatter = function () {
  const capitalizeFirst = (a) =>
    a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase();

  const toSkewerCase = (a) => a.replace(" ", "-");

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const formatter = StringFormatter();
console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box

//Ex 2.

const Bank = function () {
  let money = 500;
  const depositCash = (amount) => {
    money += amount;
  };
  const checkBalance = () => {
    console.log(money);
  };
  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance();

//Ex 3.

const SongsManager = function () {
  let prefix = "https://www.youtube.com/watch?v=";
  let songs = {};
  const songUrl = (id) => prefix + id;
  const removePrefix = (url) => url.replace(prefix, "");
  const addSong = (name, url) => (songs[name] = removePrefix(url));
  const getSong = (name) => prefix + songs[name];
  return {
    songUrl: songUrl,
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax"));
