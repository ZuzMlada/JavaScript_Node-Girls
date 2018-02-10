//Step 1-4:

console.log("Hello World!")
console.log("🐉woooooo")
console.log(100)

//checking datatype:
console.log(typeof 100)
console.log(typeof 'woooo')
console.log(typeof "🐉woooooo")
console.log(typeof false)


//Variable defining
var ja = 'zuzmla'

console.log(ja)

var cislo = 100
var toto = false

console.log(toto)
console.log(`${cislo} world ${ja}`)

//5.If/Else statement
var happy = false;
if (happy === true) {
  console.log("Hello world!");
} else {
  console.log(':(')
}


var x = 14
if (x%2 ===1) {
  console.log ("odd")
} else if (x%2 ===0) {
  console.log("even")
}

//6.For Loop
//this will print out even numbers to 100
for (var i=0; i<=100; i+=2){
console.log(i)
}

//7. Functions
var x = 8
var y = 5


function add(x,y) {
  return x+y
}
add (x,y)

function multiply (x,y) {
  return x*y
}
multiply (x,y)

//calling write function+we are selecting the number
function writeeventill(x){
  for (var i=0; i<=x; i++) {
    if (i % 2 === 0){
      console.log(i);
    }
  }
}


//8.Arrays
var animals = ["tiger", "lion", "pug"]
console.log(animals[2])
console.log(animals.length)
console.log(animals)

for (var i=0; i<(animals.length); i++) {
  console.log(animals[i])
}


//9. Object
var person = {
  firstName: "Wonder",
  lastName: "Woman",
  occupation:  "DC Hero",
  age: 30,
  alive: true
}
console.log(person.occupation);
console.log ("Hi, my name is " +person.firstName + person.lastName + ".")

/*Challenge 1
age difference function:*/

var youngest = {
  name: "Roman Jr",
  age: 28
}
var oldest = {
  name: "Roman Sr",
  age: 55
}
function ageDiff (youngest, oldest) {
  return (oldest.age - youngest.age)
}

ageDiff (youngest, oldest)

/*Challenge 2
looping thru array of writers*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];


for (var i=0; i<(writers.length); i++) {
  console.log("Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ". I am " + writers[i].age + " years old, and I work as a writer.")
}

//only if they are alive:
for (var i=0; i<(writers.length); i++) {
  if (writers[i].alive === true)
  {
  console.log("Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ". I am " + writers[i].age + " years old, and I work as a writer.")
}
}

//Challenge 3:
var x = 13;
var y = 27;

function add () {
  return x + y
}
add(x, y)

/* Challenge 4:
loop 0-100:
multiples of 3 print “Fizz”, of 5 print "Buzz", if both then "BuzzFizz"
*/
for (var i=0; i<=100; i++){
  if (i%3 === 0) {
    if (i%5 === 0) {
      console.log('BuzzFizz');
    } else
    console.log ('Fizz');
  }else if (i%5 === 0) {
    console.log('Buzz');
  }else
    console.log(i);
}

/* Challenge 5:
function,to find a position of the word in array: */

var haystack = ['hay', 'rabbit', 'needle', 'hat']
function findNeedle() {
  for (i = 0 ; i <=haystack.length; i++) {
    if (haystack[i] === "needle") {
      console.log ("Found needle at position " + i)
    }
  }
}

findNeedle()
