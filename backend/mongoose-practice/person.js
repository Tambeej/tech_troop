const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://bejella_db_user:Rm9S!VeT*8$fPrR@cluster0.7qwzo1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/peopleDB ', { useNewUrlParser: true })

// mongoose
//   .connect("mongodb://127.0.0.1:27017/peopleDB", {
//     useNewUrlParser: true,
//   })
  .catch((err) => console.log(err));
const Schema = mongoose.Schema;
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: {
    city: String,
    street: String,
    apartment: Number,
  },
});
const Person = mongoose.model("person", personSchema);
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 });
p1.save();

// const computerSchema  = new Schema({
//   maker: String,
//   price: Number,
// });
// const Computer = mongoose.model("computer", computerSchema);
// let c1 = new Computer({ maker: "Apple", price: 1075 });
// c1.save();
// let c2 = new Computer({ maker: "HP", price: 75 });
// c2.save()
// let c3 = new Computer({ maker: "Dell", price: 900 });
// c3.save()

// Computer.find({}).then(function (people) {
//     console.log(people)
// })

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())
