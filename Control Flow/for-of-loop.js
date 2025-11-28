/**
 * 🚀 For...of Loop - JavaScript Implementation
 * Comprehensive examples of for...of loops in JavaScript
 */

// ===================================
// 1. Basic for...of with Arrays
// ===================================
console.log("=== 1. Basic for...of with Arrays ===");

const fruits = ["apple", "banana", "cherry", "date"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry, date

// ===================================
// 2. for...of with Strings
// ===================================
console.log("\n=== 2. for...of with Strings ===");

const message = "Hello";

for (const char of message) {
  console.log(char);
}
// Output: H, e, l, l, o

// ===================================
// 3. for...of with Array Destructuring
// ===================================
console.log("\n=== 3. for...of with Array Destructuring ===");

const users = [
  ["John", 30],
  ["Jane", 25],
  ["Bob", 35],
];

for (const [name, age] of users) {
  console.log(`${name} is ${age} years old`);
}

// With objects in arrays
const employees = [
  { name: "Alice", role: "Developer" },
  { name: "Bob", role: "Designer" },
  { name: "Charlie", role: "Manager" },
];

for (const { name, role } of employees) {
  console.log(`${name} works as a ${role}`);
}

// ===================================
// 4. for...of with Object.entries()
// ===================================
console.log("\n=== 4. for...of with Object.entries() ===");

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// ===================================
// 5. for...of with Object.keys()
// ===================================
console.log("\n=== 5. for...of with Object.keys() ===");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log("Keys:");
for (const key of Object.keys(car)) {
  console.log(`  ${key}`);
}

console.log("\nValues:");
for (const value of Object.values(car)) {
  console.log(`  ${value}`);
}

// ===================================
// 6. for...of with Set
// ===================================
console.log("\n=== 6. for...of with Set ===");

const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 4, 3]);

console.log("Unique numbers in Set:");
for (const num of uniqueNumbers) {
  console.log(`  ${num}`);
}
// Output: 1, 2, 3, 4, 5 (duplicates removed)

// ===================================
// 7. for...of with Map
// ===================================
console.log("\n=== 7. for...of with Map ===");

const userMap = new Map([
  ["user1", { name: "John", age: 30 }],
  ["user2", { name: "Jane", age: 25 }],
  ["user3", { name: "Bob", age: 35 }],
]);

// Iterate entries
console.log("Map entries:");
for (const [id, user] of userMap) {
  console.log(`  ${id}: ${user.name}, ${user.age}`);
}

// Iterate keys only
console.log("\nMap keys:");
for (const key of userMap.keys()) {
  console.log(`  ${key}`);
}

// Iterate values only
console.log("\nMap values:");
for (const value of userMap.values()) {
  console.log(`  ${value.name}`);
}

// ===================================
// 8. for...of with TypedArray
// ===================================
console.log("\n=== 8. for...of with TypedArray ===");

const typedArray = new Uint8Array([10, 20, 30, 40, 50]);

console.log("TypedArray values:");
for (const value of typedArray) {
  console.log(`  ${value}`);
}

// ===================================
// 9. for...of with Array Methods (entries)
// ===================================
console.log("\n=== 9. for...of with Array.entries() ===");

const colors = ["red", "green", "blue"];

// Get index and value
for (const [index, color] of colors.entries()) {
  console.log(`Index ${index}: ${color}`);
}

// ===================================
// 10. Break and Continue
// ===================================
console.log("\n=== 10. Break and Continue ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using break
console.log("Using break (stop at 5):");
for (const num of numbers) {
  if (num > 5) break;
  process.stdout.write(`${num} `);
}
console.log();

// Using continue
console.log("Using continue (skip even):");
for (const num of numbers) {
  if (num % 2 === 0) continue;
  process.stdout.write(`${num} `);
}
console.log();

// ===================================
// 11. Real-World Examples
// ===================================
console.log("\n=== 11. Real-World Examples ===");

// Sum of array
const values = [10, 20, 30, 40, 50];
let sum = 0;
for (const value of values) {
  sum += value;
}
console.log(`Sum: ${sum}`); // 150

// Find item in array
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Tablet", price: 399 },
];

let foundProduct = null;
for (const product of products) {
  if (product.name === "Phone") {
    foundProduct = product;
    break;
  }
}
console.log("Found product:", foundProduct);

// Filter with for...of
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for (const num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log("Even numbers:", evens);

// ===================================
// 12. for...of with Generators
// ===================================
console.log("\n=== 12. for...of with Generators ===");

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

console.log("Generator values:");
for (const num of numberGenerator()) {
  console.log(`  ${num}`);
}

// Range generator
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

console.log("\nRange 1-5:");
for (const num of range(1, 5)) {
  process.stdout.write(`${num} `);
}
console.log();

// ===================================
// 13. for...of with NodeList (DOM)
// ===================================
console.log("\n=== 13. for...of with DOM-like structures ===");

// Simulating DOM NodeList behavior
const nodeList = [
  { tagName: "DIV", id: "container" },
  { tagName: "P", id: "paragraph" },
  { tagName: "SPAN", id: "highlight" },
];

for (const node of nodeList) {
  console.log(`<${node.tagName.toLowerCase()} id="${node.id}">`);
}

// ===================================
// 14. for...of vs for...in
// ===================================
console.log("\n=== 14. for...of vs for...in ===");

const arr = ["a", "b", "c"];

console.log("for...of (values):");
for (const value of arr) {
  console.log(`  ${value}`);
}

console.log("\nfor...in (indices):");
for (const index in arr) {
  console.log(`  ${index}`);
}

// ===================================
// 15. Async Iteration
// ===================================
console.log("\n=== 15. Async Iteration ===");

async function processItems() {
  const items = [1, 2, 3];

  // Sequential processing
  for (const item of items) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(`Processed item: ${item}`);
  }
}

// Run async function
processItems().then(() => {
  console.log("\n✅ All for...of loop examples completed!");
});
