/**
 * 🚀 forEach() Method - JavaScript Implementation
 * Comprehensive examples of forEach in JavaScript
 */

// ===================================
// 1. Basic forEach
// ===================================
console.log("=== 1. Basic forEach ===");

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output: apple, banana, cherry

// ===================================
// 2. forEach with Arrow Function
// ===================================
console.log("\n=== 2. forEach with Arrow Function ===");

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

// One-liner
console.log("\nOne-liner:");
numbers.forEach((num) => console.log(num * 2));

// ===================================
// 3. forEach with Index
// ===================================
console.log("\n=== 3. forEach with Index ===");

const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`Index ${index}: ${color}`);
});

// ===================================
// 4. forEach with All Parameters
// ===================================
console.log("\n=== 4. forEach with All Parameters ===");

const letters = ["a", "b", "c"];

letters.forEach((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
});

// ===================================
// 5. forEach with thisArg
// ===================================
console.log("\n=== 5. forEach with thisArg ===");

const multiplier = {
  factor: 3,
  multiply(arr) {
    arr.forEach(function (num) {
      console.log(num * this.factor);
    }, this); // Pass 'this' as second argument
  },
};

multiplier.multiply([1, 2, 3]); // 3, 6, 9

// ===================================
// 6. Modifying Original Array
// ===================================
console.log("\n=== 6. Modifying Original Array ===");

const scores = [10, 20, 30, 40, 50];

console.log("Original:", scores);

scores.forEach((score, index, arr) => {
  arr[index] = score * 2;
});

console.log("Modified:", scores); // [20, 40, 60, 80, 100]

// ===================================
// 7. forEach Cannot Break Early
// ===================================
console.log("\n=== 7. forEach Cannot Break Early ===");

// ❌ This won't work as expected
const nums = [1, 2, 3, 4, 5];
console.log("Attempting to 'break' (doesn't work):");

nums.forEach((num) => {
  if (num > 3) return; // Only skips current iteration, doesn't break
  console.log(num);
});
// Output: 1, 2, 3

console.log("\n💡 Use for...of or regular for loop if you need to break");

// ===================================
// 8. forEach with Objects
// ===================================
console.log("\n=== 8. forEach with Objects ===");

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

// Destructuring
console.log("\nWith destructuring:");
users.forEach(({ name, age }) => {
  console.log(`${name} is ${age} years old`);
});

// ===================================
// 9. forEach on Sparse Arrays
// ===================================
console.log("\n=== 9. forEach on Sparse Arrays ===");

const sparseArray = [1, , 3, , 5]; // Missing elements

console.log("Sparse array:");
sparseArray.forEach((val, index) => {
  console.log(`Index ${index}: ${val}`);
});
// Only logs existing elements, skips holes

// ===================================
// 10. Real-World Examples
// ===================================
console.log("\n=== 10. Real-World Examples ===");

// Sum of array
let sum = 0;
[1, 2, 3, 4, 5].forEach((num) => {
  sum += num;
});
console.log(`Sum: ${sum}`); // 15

// Counting occurrences
const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const counts = {};

items.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});

console.log("Counts:", counts);
// { apple: 3, banana: 2, cherry: 1 }

// Logging with formatting
const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Phone", price: 599.99 },
  { name: "Tablet", price: 399.99 },
];

console.log("\nProduct List:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}: $${product.price.toFixed(2)}`);
});

// ===================================
// 11. forEach vs map
// ===================================
console.log("\n=== 11. forEach vs map ===");

const original = [1, 2, 3];

// forEach doesn't return anything
const forEachResult = original.forEach((x) => x * 2);
console.log("forEach returns:", forEachResult); // undefined

// map returns a new array
const mapResult = original.map((x) => x * 2);
console.log("map returns:", mapResult); // [2, 4, 6]

// ===================================
// 12. forEach with Async Operations
// ===================================
console.log("\n=== 12. forEach with Async (Caution!) ===");

// ❌ forEach doesn't wait for async operations
async function badAsync() {
  const items = [1, 2, 3];

  console.log("forEach with async (wrong):");
  items.forEach(async (item) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log(`  Processed: ${item}`);
  });
  console.log("Done (but items aren't processed yet!)");
}

// ✅ Use for...of for async operations
async function goodAsync() {
  const items = [1, 2, 3];

  console.log("\nfor...of with async (correct):");
  for (const item of items) {
    await new Promise((r) => setTimeout(r, 100));
    console.log(`  Processed: ${item}`);
  }
  console.log("Done (items are actually processed!)");
}

badAsync();
setTimeout(() => goodAsync(), 500);

// ===================================
// 13. Chaining (Limited)
// ===================================
console.log("\n=== 13. Method Comparison ===");

const data = [1, 2, 3, 4, 5];

// forEach - no chaining (returns undefined)
data.forEach((x) => console.log(x));

// Chain-friendly alternatives
const result = data
  .filter((x) => x > 2)
  .map((x) => x * 2)
  .reduce((sum, x) => sum + x, 0);

console.log("Chained result:", result); // 24

// ===================================
// 14. forEach on Other Iterables
// ===================================
console.log("\n=== 14. forEach on Other Iterables ===");

// Map.forEach
const userMap = new Map([
  ["user1", "John"],
  ["user2", "Jane"],
  ["user3", "Bob"],
]);

console.log("Map forEach:");
userMap.forEach((value, key) => {
  console.log(`  ${key}: ${value}`);
});

// Set.forEach
const uniqueItems = new Set([1, 2, 3, 2, 1]);

console.log("\nSet forEach:");
uniqueItems.forEach((value) => {
  console.log(`  ${value}`);
});

// ===================================
// 15. Performance Considerations
// ===================================
console.log("\n=== 15. Performance Considerations ===");

const largeArray = new Array(10000).fill(1);

console.time("forEach");
largeArray.forEach((x) => x * 2);
console.timeEnd("forEach");

console.time("for loop");
for (let i = 0; i < largeArray.length; i++) {
  largeArray[i] * 2;
}
console.timeEnd("for loop");

console.time("for...of");
for (const x of largeArray) {
  x * 2;
}
console.timeEnd("for...of");

// ===================================
// 16. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 16. Best Practices Summary ===");

  console.log(`
✅ USE forEach when:
   - You need to iterate and perform side effects
   - You don't need to break early
   - You don't need the return value

❌ AVOID forEach when:
   - You need to break or return early
   - You're working with async/await
   - You need to chain methods
   - You need to transform data (use map instead)

💡 ALTERNATIVES:
   - for...of: for early breaks and async
   - map: for transforming data
   - filter: for filtering elements
   - reduce: for aggregating values
`);

  console.log("✅ All forEach examples completed!");
}, 1500);
