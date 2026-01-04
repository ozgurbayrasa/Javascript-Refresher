// creation with curly braces {}
const user = {
  name: "Alice",
  age: 24,

  // method shorthand (no `function` keyword)
  greet() {
    console.log("Hi, I'm " + this.name); // `this` refers to `user`
  },

  // regular method (with function keyword)
  haveBirthday: function () {
    this.age += 1;
    console.log(this.name + " is now " + this.age);
  },
};

user.greet();
user.haveBirthday();

// property access: dot notation
console.log("Name:", user.name);

// property access: bracket notation
console.log("Age:", user["age"]);

// bracket notation for dynamic keys
const key = "name";
console.log("Dynamic key:", user[key]);

// add/update properties
user.city = "Istanbul";
user["job"] = "Software Engineer";
console.log("Updated user:", user);

// example: arrow function as a method (why it's risky for `this`)
const badExample = {
  name: "Bob",
  greet: () => {
    console.log("badExample:", this.name); // `this` is NOT `badExample`
  },
};

badExample.greet(); // usually undefined

// simple key-value inspection
console.log("keys:", Object.keys(user));
console.log("values:", Object.values(user));
console.log("entries:", Object.entries(user));