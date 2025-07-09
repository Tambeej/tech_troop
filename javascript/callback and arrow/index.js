//Ex 1.

const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = function (callback) {
  callback();
};

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

//Ex 2.

const returnTime = function (time) {
  console.log("The current time is: " + time);
};

const getTime = function (callback) {
  const time = new Date();
  callback(time);
};
getTime(returnTime);

//Ex 3.

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = (data) => data;

displayData(console.error, logData, "I like to party");

//Ex 4.

const add = (a, b, c) => a + b + c;

console.log(add(1, 2, 3));

//Ex 5.

const capitalize = (word) =>
  (word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase());

console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia

//Ex 6.

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = (temp) => `it's ${determineWeather(temp)}`;

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"
