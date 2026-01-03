// ================================
// Arrow Functions vs function keyword
// Console-visible example calls
// ================================


// function keyword → has its own `this`
const user1 = {
  name: "Alice",
  greet: function () {
    console.log("user1:", this.name);
  },
};
user1.greet(); // Alice


// arrow function → NO own `this`
const user2 = {
  name: "Bob",
  greet: () => {
    console.log("user2:", this.name);
  },
};
user2.greet(); // undefined (lexical this, not user2)


// arrow inside function → keeps parent's `this`
const user3 = {
  name: "Carol",
  greet: function () {
    setTimeout(() => {
      console.log("user3:", this.name);
    }, 0);
  },
};
user3.greet(); // Carol


// function keyword inside async → loses `this`
const user4 = {
  name: "Dave",
  greet: function () {
    setTimeout(function () {
      console.log("user4:", this.name);
    }, 0);
  },
};
user4.greet(); // undefined (or global this)


// syntax comparison
const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b;

console.log("add1:", add1(2, 3)); // 5
console.log("add2:", add2(2, 3)); // 5
console.log("add3:", add3(2, 3)); // 5


// returning object (parentheses required)
const getUser = () => ({ name: "Alice" });
console.log("getUser:", getUser());


// single parameter (no parentheses)
const square = x => x * x;
console.log("square:", square(4)); // 16


// no parameters
const sayHello = () => "Hello";
console.log("sayHello:", sayHello());


// arguments object comparison
function normalFunc() {
  console.log("normalFunc arguments:", arguments);
}
normalFunc(1, 2, 3);

const arrowFunc = () => {
  console.log("arrowFunc has no arguments object");
};
arrowFunc(1, 2, 3);


// constructor behavior
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
console.log("Person instance:", alice.name);

const PersonArrow = (name) => {
  this.name = name;
};
// new PersonArrow("Bob"); // TypeError


// common arrow use case
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log("doubled:", doubled); // [2, 4, 6]