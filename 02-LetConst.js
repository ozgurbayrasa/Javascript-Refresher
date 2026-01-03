// var → function scoped
if (true) {
  var a = 1;
}
console.log(a); // accessible outside of block above


// let / const → block scoped
if (true) {
  let b = 2;
  const c = 3;
}
// console.log(b) // error -> block scoped (let / const)
// console.log(c) // error -> block scoped (let / const)


// var → redeclare allowed
var x = 10;
var x = 20;
console.log(x);


// let → redeclare not allowed
let y = 10;
// let y = 20 // error


// reassignment of let 
y = 30; // ok

const z = 5;
// z = 6 // error -> const cannot be reassigned


// const → must be initialized
const n = 100;


// var hoisting
console.log(h); // undefined
var h = 50;


// let / const hoisting (TDZ)
// console.log(t) // error -> Temporal Dead Zone
let t = 10;


// const is not immutable
// However, reference variables may be modified!
const user = { name: "Alice" };
user.name = "Bob";
console.log(user.name);


// var bug example:
// one shared variable `i` is used across all iterations
// callbacks run after the loop finishes
// final value of i is 3 for every callback
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3 3 3
}

// correct way:
// `let` creates a new binding for each iteration
// each callback keeps its own `j` value
// values are preserved per loop step
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0 1 2
}


// preferred usage
const API_URL = "/api";
let isLoading = true;
isLoading = false;
