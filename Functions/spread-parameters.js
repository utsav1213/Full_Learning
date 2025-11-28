/**
 * 🚀 Spread Parameters - JavaScript Implementation
 * Comprehensive examples of spread operator with functions
 */

// ===================================
// 1. Basic Spread in Function Calls
// ===================================
console.log("=== 1. Basic Spread in Function Calls ===");

function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log("add(...numbers):", add(...numbers)); // 6

// Compare with apply
console.log("add.apply(null, numbers):", add.apply(null, numbers)); // 6

// ===================================
// 2. Math Functions
// ===================================
console.log("\n=== 2. Math Functions ===");

const values = [5, 2, 9, 1, 7, 3];

console.log("Max:", Math.max(...values)); // 9
console.log("Min:", Math.min(...values)); // 1

// Without spread (old way)
console.log("Max (apply):", Math.max.apply(null, values)); // 9

// ===================================
// 3. Combining Arrays
// ===================================
console.log("\n=== 3. Combining with Spread ===");

function greetAll(greeting, ...names) {
  return names.map((name) => `${greeting}, ${name}!`);
}

const team1 = ["Alice", "Bob"];
const team2 = ["Charlie", "Diana"];

console.log("All teams:", greetAll("Hello", ...team1, ...team2));

// ===================================
// 4. Spread with Constructors
// ===================================
console.log("\n=== 4. Spread with Constructors ===");

const dateArgs = [2024, 11, 25]; // December 25, 2024
const date = new Date(...dateArgs);
console.log("Date:", date.toDateString());

// Array constructor
const arrayArgs = [1, 2, 3, 4, 5];
const newArray = new Array(...arrayArgs);
console.log("New array:", newArray);

// ===================================
// 5. Spread vs Rest
// ===================================
console.log("\n=== 5. Spread vs Rest ===");

// REST: Collects arguments INTO array (in parameter position)
function collectAll(...items) {
  console.log("Rest (collecting):", items);
}

// SPREAD: Expands array INTO arguments (in argument position)
function spreadAll(a, b, c) {
  console.log("Spread (expanding):", a, b, c);
}

collectAll(1, 2, 3); // Rest: [1, 2, 3]
spreadAll(...[1, 2, 3]); // Spread: 1 2 3

// ===================================
// 6. Partial Function Application
// ===================================
console.log("\n=== 6. Partial Application ===");

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const firstTwo = [2, 3];
const lastTwo = [4, 5];

console.log("Multiply:", multiply(...firstTwo, ...lastTwo)); // 2*3*4*5 = 120

// ===================================
// 7. Array Copy and Modification
// ===================================
console.log("\n=== 7. Array Operations ===");

function processItems(...items) {
  return items.map((item, i) => `${i + 1}. ${item}`);
}

const original = ["apple", "banana"];
const additional = ["cherry", "date"];

// Spread both arrays into function
console.log("All items:", processItems(...original, ...additional));

// ===================================
// 8. String to Characters
// ===================================
console.log("\n=== 8. String to Characters ===");

function joinWithDashes(...chars) {
  return chars.join("-");
}

const word = "Hello";
console.log("Dashed:", joinWithDashes(...word)); // H-e-l-l-o

// ===================================
// 9. Set Operations
// ===================================
console.log("\n=== 9. Set Operations ===");

function findUnique(...values) {
  return [...new Set(values)];
}

console.log("Unique:", findUnique(1, 2, 2, 3, 3, 3, 4, 4, 4, 4));

// Combine arrays and find unique
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log("All unique:", findUnique(...arr1, ...arr2, ...arr3));

// ===================================
// 10. Object Spread in Functions
// ===================================
console.log("\n=== 10. Object Spread ===");

function createConfig(defaults, ...overrides) {
  return Object.assign({}, defaults, ...overrides);
}

const defaultConfig = { debug: false, timeout: 3000 };
const userConfig = { debug: true };
const envConfig = { timeout: 5000 };

console.log("Final config:", createConfig(defaultConfig, userConfig, envConfig));

// ===================================
// 11. Logging Utilities
// ===================================
console.log("\n=== 11. Logging Utilities ===");

function log(level, ...messages) {
  console.log(`[${level.toUpperCase()}]`, ...messages);
}

const debugInfo = ["User:", { id: 1, name: "John" }];
log("info", ...debugInfo);
log("error", "Connection failed", { code: 500 });

// ===================================
// 12. Event Handling
// ===================================
console.log("\n=== 12. Event Handling ===");

function emitEvent(eventName, ...handlers) {
  console.log(`Emitting: ${eventName}`);
  handlers.forEach((handler, i) => {
    console.log(`  Handler ${i + 1}:`, handler);
  });
}

const handlers = ["handleClick", "trackAnalytics", "updateUI"];
emitEvent("click", ...handlers);

// ===================================
// 13. Function Composition
// ===================================
console.log("\n=== 13. Function Composition ===");

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const operations = [square, double, addOne];
const composed = compose(...operations);

console.log("Composed(5):", composed(5)); // ((5+1)*2)^2 = 144

// ===================================
// 14. Variadic Wrappers
// ===================================
console.log("\n=== 14. Variadic Wrappers ===");

function wrap(fn) {
  return function (...args) {
    console.log("Before call:", args);
    const result = fn(...args);
    console.log("After call:", result);
    return result;
  };
}

const wrappedAdd = wrap((a, b) => a + b);
wrappedAdd(3, 4);

// ===================================
// 15. Merging Function Results
// ===================================
console.log("\n=== 15. Merging Results ===");

function fetchUsers() {
  return [{ id: 1, name: "John" }];
}

function fetchAdmins() {
  return [{ id: 2, name: "Admin" }];
}

function fetchGuests() {
  return [{ id: 3, name: "Guest" }];
}

function mergeResults(...fetchers) {
  return fetchers.flatMap((fn) => fn());
}

console.log("All users:", mergeResults(fetchUsers, fetchAdmins, fetchGuests));

// ===================================
// 16. Best Practices
// ===================================
console.log("\n=== 16. Best Practices ===");

console.log(`
✅ USE SPREAD when:
   - Passing array elements as separate arguments
   - Using Math.max/min with arrays
   - Calling constructors with array data
   - Combining arrays in function calls

❌ DON'T:
   - Confuse with rest parameters (opposite operations)
   - Use on very large arrays (stack overflow risk)
   - Overuse when simpler solutions exist

💡 SPREAD vs REST:
   - SPREAD: Expands array → individual elements
   - REST: Collects elements → array
   - SPREAD: In function CALL arguments
   - REST: In function DEFINITION parameters
`);

console.log("✅ All spread parameter examples completed!");
