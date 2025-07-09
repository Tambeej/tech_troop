let temperature = 14;
let weather = "cloudy";
if (weather == "sunny") {
  if (temperature > 24) {
    console.log("Go to the beach");
  }
  if (temperature <= 24 && temperature >= 15) {
    console.log("Go for a walk");
  }
  if (temperature < 15) {
    console.log("Stay inside and read");
  }
}
if (weather == "rainy") {
    console.log("Watch a movie indoors");
}
if (weather == "cloudy") {
    if(temperature>21){
    console.log("Go hiking");
}else {
    console.log("Visit a museum");
}
}

