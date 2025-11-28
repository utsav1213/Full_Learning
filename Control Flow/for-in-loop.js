// ==========================================
// JavaScript for...in Loop Examples
// ==========================================

// 1. Basic for...in with Objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("Iterating over object properties:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 2. Getting Keys and Values
const user = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
};

console.log("\nGetting keys:");
for (let key in user) {
  console.log(key);
}

console.log("\nGetting values:");
for (let key in user) {
  console.log(user[key]);
}

// 3. for...in with Arrays (NOT RECOMMENDED)
const colors = ["red", "green", "blue"];
console.log("\nfor...in with array (not recommended):");
for (let index in colors) {
  console.log(`Index: ${index}, Value: ${colors[index]}, Type: ${typeof index}`);
}

// 4. Checking Own Properties with hasOwnProperty
const child = Object.create({ inherited: "parent property" });
child.own = "child property";

console.log("\nWithout hasOwnProperty:");
for (let key in child) {
  console.log(key);
}

console.log("\nWith hasOwnProperty:");
for (let key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key);
  }
}

// 5. Order of Iteration
const obj = {
  3: "three",
  1: "one",
  2: "two",
  b: "letter b",
  a: "letter a",
};

console.log("\nOrder of iteration (integer keys first, then string keys):");
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// 6. Count Properties
const product = { name: "Laptop", price: 1000, brand: "Dell" };
let count = 0;

for (let key in product) {
  if (product.hasOwnProperty(key)) {
    count++;
  }
}
console.log("\nNumber of properties:", count);

// 7. Convert Object to Array
const scores = { math: 90, english: 85, science: 92 };
const entries = [];

for (let subject in scores) {
  entries.push([subject, scores[subject]]);
}
console.log("\nObject to array:", entries);

// 8. Clone an Object
const original = { a: 1, b: 2, c: 3 };
const clone = {};

for (let key in original) {
  if (original.hasOwnProperty(key)) {
    clone[key] = original[key];
  }
}
console.log("\nOriginal:", original);
console.log("Clone:", clone);

// 9. Filter Object Properties
const userData = {
  name: "John",
  age: 30,
  password: "secret",
  email: "john@example.com",
};

const safeUser = {};

for (let key in userData) {
  if (key !== "password" && userData.hasOwnProperty(key)) {
    safeUser[key] = userData[key];
  }
}
console.log("\nFiltered user (no password):", safeUser);

console.log("\nfor...in loop examples completed!");
