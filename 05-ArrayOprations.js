// Array basics
const arr = [10, 20, "30"];
console.log("arr:", arr);
console.log("index 0:", arr[0]);

// Accessing & assigning elements (mutates original)
arr[1] = 99;
console.log("after assignment arr:", arr); // [10, 99, "30"]

// Iterating with for...of (values)
let sum = 0;
for (const value of arr) {
  console.log("for...of value:", value);
  if (typeof value === "number") sum += value; // side effect example
}
console.log("sum of numbers:", sum);

// Transforming with map (returns new array)
const doubledNumbers = arr.map((v) => {
  if (typeof v === "number") return v * 2;
  return v; // keep non-numbers as-is
});
console.log("mapped result:", doubledNumbers);
console.log("original still:", arr); // unchanged by map

// Immutability principle: map doesn't change array reference
const originalRef = arr;
const newRef = doubledNumbers;
console.log("same reference?", originalRef === newRef); // false


// Mutating objects inside map (pitfall)
const users = [{ name: "Alice" }, { name: "Bob" }];

// bad: mutates original objects
const mutated = users.map((u) => {
  u.name = u.name.toUpperCase();
  return u;
});
console.log("mutated result:", mutated);
console.log("original users (also changed):", users);

// good: create new objects instead
const users2 = [{ name: "Carol" }, { name: "Dave" }];
const safe = users2.map((u) => ({ ...u, name: u.name.toUpperCase() }));
console.log("safe result:", safe);
console.log("original users2 (unchanged):", users2);

// for...of vs map summary
const nums = [1, 2, 3];


// Enterprise-style example: API response -> UI model
const apiUsers = [
  { id: 1, full_name: "Alice A.", is_active: true },
  { id: 2, full_name: "Bob B.", is_active: false },
];

const uiUsers = apiUsers.map((u) => ({
  id: u.id,
  name: u.full_name,
  status: u.is_active ? "ACTIVE" : "PASSIVE",
}));

console.log("apiUsers:", apiUsers);
console.log("uiUsers (mapped):", uiUsers);
