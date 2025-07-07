let year = 2023;
let bool = false;
if (year % 100 === 0) {
  if(year % 4 === 0){
    console.log("leap");
    bool = true
  }
}
if (!bool){
  if(year % 4 === 0){
    console.log("leap");
    bool = true
  }
}
if (!bool){
  console.log("not leap");
  }

    