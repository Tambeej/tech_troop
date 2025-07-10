class UniqueArray {
  constructor() {
    this.array = [];
    this.arrayMap = {};
  }

  add(item) {
    if (item in this.arrayMap) {
      return;
    }
    this.array.push(item);
    this.arrayMap[item] = this.array.length - 1;
  }

  showAll() {
    console.log(this.array);
  }
  exists(item) {
    if (this.arrayMap[item] || this.arrayMap[item] == 0) {
      return true;
    }
    return false;
  }
  get(index) {
    if (this.array[index] || this.array[index] == 0) {
      return this.array[index];
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2));
uniqueStuff.showAll();
