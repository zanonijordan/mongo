const mongoose = require('mongoose')

//Conexao
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true})

//Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})
// //----------------------Criaçao da collection Fruit
const Fruit = mongoose.model('Fruit', fruitSchema)

//--------------------Criaòao do documento
// const fruit = new Fruit({
//   name: 'Pinepple',
//   rating: 7,
//   review: 'Pretty good as a fruit.'
// })

const banana = new Fruit({
  name: 'banana',
  rating: 8,
  review: 'excelente fruit'
})
// ------------------FruitSave
banana.save()


// -----------------------------------------Person
// --------Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'no name entry!']
  },
  age: Number,
  favouriteFruit: fruitSchema // relation with the fruit collection
})

// --------------------------Person collection
const Person = mongoose.model('Person', personSchema)
// ------------------------------New Person

const person = new Person({
  name: 'Carlos',
  age: 12,
  favouriteFruit: banana
})

// ---------------------save
person.save()

// ------------------------function
// Person.find(function(err, people){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(people);
//   }
// })
//
// Fruit.find((err,fruits)=>{
//   if(err){
//     console.log(err);
//   } else{
//     console.log(fruits);
//     mongoose.connection.close()
//   }
// })

// -------------------------------Delete
 // Person.deleteOne({_id: "63168d87d5d9aa501f96290f"},function(err){
 // if(err){
 //   console.log(err);
 // } else {
 //   console.log('Id deleted');
 // }
 // })
