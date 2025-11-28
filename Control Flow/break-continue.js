/**
 * 🚀 Break and Continue - JavaScript Implementation
 * Comprehensive examples of break and continue statements
 */

// ===================================
// 1. Basic Break
// ===================================
console.log("=== 1. Basic Break ===");

// Exit loop when condition is met
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5!");
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, Breaking at 5!

// ===================================
// 2. Basic Continue
// ===================================
console.log("\n=== 2. Basic Continue ===");

// Skip iteration when condition is met
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9

// ===================================
// 3. Break in While Loop
// ===================================
console.log("\n=== 3. Break in While Loop ===");

let count = 0;
while (true) {
  count++;
  console.log(`Count: ${count}`);
  
  if (count === 5) {
    console.log("Breaking out of infinite loop!");
    break;
  }
}

// ===================================
// 4. Continue in While Loop
// ===================================
console.log("\n=== 4. Continue in While Loop ===");

let num = 0;
while (num < 10) {
  num++;
  
  if (num % 3 !== 0) {
    continue; // Skip non-multiples of 3
  }
  
  console.log(`Multiple of 3: ${num}`);
}
// Output: 3, 6, 9

// ===================================
// 5. Break in Nested Loops (Inner Only)
// ===================================
console.log("\n=== 5. Break in Nested Loops (Inner Only) ===");

for (let i = 0; i < 3; i++) {
  console.log(`Outer loop i = ${i}`);
  
  for (let j = 0; j < 5; j++) {
    if (j === 2) {
      console.log("  Breaking inner loop at j = 2");
      break; // Only breaks inner loop
    }
    console.log(`  Inner loop j = ${j}`);
  }
}

// ===================================
// 6. Continue in Nested Loops
// ===================================
console.log("\n=== 6. Continue in Nested Loops ===");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue; // Skip when j = 1
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// ===================================
// 7. Break with Search
// ===================================
console.log("\n=== 7. Break with Search ===");

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

let foundUser = null;
for (const user of users) {
  if (user.name === "Charlie") {
    foundUser = user;
    break; // Stop searching once found
  }
}

console.log("Found:", foundUser);

// ===================================
// 8. Continue with Filtering
// ===================================
console.log("\n=== 8. Continue with Filtering ===");

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const positives = [];

for (const num of numbers) {
  if (num < 0) {
    continue; // Skip negative numbers
  }
  positives.push(num);
}

console.log("Positive numbers:", positives);

// ===================================
// 9. Break in Switch Statement
// ===================================
console.log("\n=== 9. Break in Switch Statement ===");

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Middle of week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}

// ===================================
// 10. Early Exit Pattern
// ===================================
console.log("\n=== 10. Early Exit Pattern ===");

function processItems(items) {
  for (const item of items) {
    if (!item) {
      console.log("Found null/undefined, stopping processing");
      break;
    }
    console.log(`Processing: ${item}`);
  }
}

processItems(["a", "b", "c", null, "d", "e"]);

// ===================================
// 11. Skip Invalid Data
// ===================================
console.log("\n=== 11. Skip Invalid Data ===");

const data = [
  { value: 10 },
  { value: null },
  { value: 20 },
  { value: undefined },
  { value: 30 },
  { value: NaN },
  { value: 40 },
];

let sum = 0;
for (const item of data) {
  if (item.value == null || Number.isNaN(item.value)) {
    console.log("Skipping invalid value");
    continue;
  }
  sum += item.value;
  console.log(`Added ${item.value}, sum = ${sum}`);
}
console.log(`Final sum: ${sum}`);

// ===================================
// 12. Performance Optimization
// ===================================
console.log("\n=== 12. Performance Optimization ===");

// Find first match and stop
const largeArray = Array.from({ length: 1000 }, (_, i) => i);
let searchResult = -1;
let iterations = 0;

for (const num of largeArray) {
  iterations++;
  if (num === 500) {
    searchResult = num;
    break;
  }
}

console.log(`Found ${searchResult} after ${iterations} iterations`);
console.log(`Saved ${largeArray.length - iterations} unnecessary iterations`);

// ===================================
// 13. Multiple Conditions
// ===================================
console.log("\n=== 13. Multiple Conditions ===");

const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 599, inStock: false },
  { name: "Tablet", price: 399, inStock: true },
  { name: "Watch", price: 199, inStock: true },
  { name: "Headphones", price: 149, inStock: false },
];

console.log("Available products under $500:");
for (const product of products) {
  // Skip if not in stock
  if (!product.inStock) {
    continue;
  }
  
  // Skip if too expensive
  if (product.price >= 500) {
    continue;
  }
  
  console.log(`  ${product.name}: $${product.price}`);
}

// ===================================
// 14. Break vs Return
// ===================================
console.log("\n=== 14. Break vs Return ===");

function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Exit function and return value
    }
  }
  return -1;
}

function findAndProcess(arr, target) {
  let found = false;
  
  for (const item of arr) {
    if (item === target) {
      found = true;
      break; // Exit loop but continue function
    }
  }
  
  // Additional processing after loop
  if (found) {
    console.log(`Found ${target}!`);
  } else {
    console.log(`${target} not found`);
  }
}

console.log("Index of 30:", findNumber([10, 20, 30, 40], 30));
findAndProcess([10, 20, 30, 40], 25);

// ===================================
// 15. Using with forEach (Doesn't Work!)
// ===================================
console.log("\n=== 15. Break/Continue with forEach ===");

console.log("❌ break and continue DON'T work with forEach!");

const nums = [1, 2, 3, 4, 5];

// This won't break the loop
nums.forEach((num) => {
  if (num === 3) {
    return; // Only exits callback, not the loop!
  }
  console.log(num);
});

console.log("\n✅ Use for...of or regular for loop instead:");
for (const num of nums) {
  if (num === 3) break;
  console.log(num);
}

// ===================================
// 16. Best Practices
// ===================================
console.log("\n=== 16. Best Practices Summary ===");

console.log(`
✅ USE break when:
   - Searching for a specific item
   - Exit early to save processing time
   - Error condition requires loop termination
   - Processing until a condition is met

✅ USE continue when:
   - Skipping invalid or unwanted items
   - Filtering in a loop
   - Avoiding deep nesting

❌ AVOID when:
   - Using forEach (doesn't work as expected)
   - Making code harder to understand
   - Can be replaced with better array methods

💡 ALTERNATIVES:
   - Array.find() instead of loop with break
   - Array.filter() instead of loop with continue
   - Array.some() / Array.every() for condition checks
`);

console.log("✅ All break and continue examples completed!");
