/**
 * 🚀 Pure and Impure Functions - JavaScript Implementation
 * Comprehensive examples of pure and impure functions
 */

// ===================================
// 1. Pure Function Definition
// ===================================
console.log("=== 1. Pure Function Definition ===");

// PURE: Same input always gives same output, no side effects
function add(a, b) {
  return a + b;
}

console.log("add(2, 3):", add(2, 3)); // Always 5
console.log("add(2, 3):", add(2, 3)); // Always 5
console.log("add(2, 3):", add(2, 3)); // Always 5

// ===================================
// 2. Impure Function Examples
// ===================================
console.log("\n=== 2. Impure Function Examples ===");

// IMPURE: Modifies external state
let total = 0;
function addToTotal(amount) {
  total += amount; // Side effect!
  return total;
}

console.log("addToTotal(5):", addToTotal(5)); // 5
console.log("addToTotal(5):", addToTotal(5)); // 10 (different result!)
console.log("total:", total); // External state modified

// IMPURE: Depends on external state
let multiplier = 2;
function multiplyWithExternal(n) {
  return n * multiplier; // Depends on external variable
}

console.log("\nmultiply(5):", multiplyWithExternal(5)); // 10
multiplier = 3;
console.log("multiply(5):", multiplyWithExternal(5)); // 15 (different result!)

// ===================================
// 3. Side Effects Examples
// ===================================
console.log("\n=== 3. Side Effects Examples ===");

// IMPURE: Console logging
function logAndReturn(value) {
  console.log("Value:", value); // Side effect
  return value;
}

// IMPURE: DOM manipulation
function updateDOM(element, text) {
  // element.textContent = text; // Side effect (if in browser)
  console.log(`Would update DOM: ${text}`);
  return true;
}

// IMPURE: API calls
async function fetchData(url) {
  // const response = await fetch(url); // Side effect
  console.log(`Would fetch: ${url}`);
  return { data: "mock" };
}

// IMPURE: Random values
function randomAdd(a) {
  return a + Math.random(); // Unpredictable output
}

console.log("randomAdd(5):", randomAdd(5));
console.log("randomAdd(5):", randomAdd(5)); // Different!

// IMPURE: Current time
function getTimeStamped(message) {
  return `[${Date.now()}] ${message}`; // Depends on current time
}

console.log(getTimeStamped("Hello"));
console.log(getTimeStamped("Hello")); // Different timestamp!

// ===================================
// 4. Pure Function Examples
// ===================================
console.log("\n=== 4. Pure Function Examples ===");

// Array operations (pure)
function double(arr) {
  return arr.map((x) => x * 2); // Returns new array
}

const original = [1, 2, 3];
const doubled = double(original);
console.log("Original:", original); // [1, 2, 3] unchanged
console.log("Doubled:", doubled); // [2, 4, 6]

// String operations (pure)
function uppercase(str) {
  return str.toUpperCase();
}

console.log("uppercase('hello'):", uppercase("hello"));

// Object operations (pure)
function updateName(user, newName) {
  return { ...user, name: newName }; // Returns new object
}

const user = { name: "John", age: 30 };
const updated = updateName(user, "Jane");
console.log("Original user:", user);
console.log("Updated user:", updated);

// ===================================
// 5. Converting Impure to Pure
// ===================================
console.log("\n=== 5. Converting Impure to Pure ===");

// IMPURE: Mutates input
function sortArrayImpure(arr) {
  return arr.sort((a, b) => a - b); // Mutates original!
}

// PURE: Returns new sorted array
function sortArrayPure(arr) {
  return [...arr].sort((a, b) => a - b); // Copy first
}

const numbers = [3, 1, 4, 1, 5, 9];
console.log("Before impure sort:", [...numbers]);
sortArrayImpure(numbers);
console.log("After impure sort:", numbers); // Mutated!

const numbers2 = [3, 1, 4, 1, 5, 9];
console.log("\nBefore pure sort:", numbers2);
const sorted = sortArrayPure(numbers2);
console.log("After pure sort:", numbers2); // Unchanged
console.log("Sorted copy:", sorted);

// IMPURE: Uses Date.now()
function createItemImpure(name) {
  return { name, createdAt: Date.now() }; // Unpredictable
}

// PURE: Timestamp as parameter
function createItemPure(name, timestamp) {
  return { name, createdAt: timestamp };
}

console.log("\nPure item:", createItemPure("Item", 1234567890));

// ===================================
// 6. Referential Transparency
// ===================================
console.log("\n=== 6. Referential Transparency ===");

// Pure functions are referentially transparent
// Can replace function call with its result

function square(x) {
  return x * x;
}

// These are equivalent:
const result1 = square(5) + square(5);
const result2 = 25 + 25; // Can replace with result

console.log("square(5) + square(5):", result1);
console.log("25 + 25:", result2);
console.log("Are equal:", result1 === result2);

// ===================================
// 7. Memoization Benefits
// ===================================
console.log("\n=== 7. Memoization Benefits ===");

// Pure functions can be safely memoized
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Cache hit:", key);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    console.log("Computed:", key);
    return result;
  };
}

function expensivePure(n) {
  return n * n;
}

const memoizedSquare = memoize(expensivePure);
console.log("First call:", memoizedSquare(10));
console.log("Second call:", memoizedSquare(10)); // Cached!
console.log("Third call:", memoizedSquare(10)); // Cached!

// ===================================
// 8. Testing Pure Functions
// ===================================
console.log("\n=== 8. Testing Pure Functions ===");

// Pure functions are easy to test
function calculateTax(amount, rate) {
  return amount * rate;
}

// Simple, predictable tests
const testCases = [
  { args: [100, 0.1], expected: 10 },
  { args: [200, 0.15], expected: 30 },
  { args: [0, 0.2], expected: 0 },
];

testCases.forEach(({ args, expected }, i) => {
  const result = calculateTax(...args);
  const passed = result === expected;
  console.log(`Test ${i + 1}: ${passed ? "✓ PASS" : "✗ FAIL"}`);
});

// ===================================
// 9. Functional Composition
// ===================================
console.log("\n=== 9. Functional Composition ===");

// Pure functions compose well
const addOne = (x) => x + 1;
const doubleIt = (x) => x * 2;
const subtractThree = (x) => x - 3;

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const composed = compose(subtractThree, doubleIt, addOne);

console.log("composed(5):", composed(5)); // ((5 + 1) * 2) - 3 = 9

// ===================================
// 10. Handling Side Effects
// ===================================
console.log("\n=== 10. Handling Side Effects ===");

// Separate pure logic from side effects
function calculateTotal(items) {
  // Pure: just calculation
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function formatPrice(amount) {
  // Pure: just formatting
  return `$${amount.toFixed(2)}`;
}

function displayTotal(items) {
  // Impure: combines pure functions with side effect
  const total = calculateTotal(items);
  const formatted = formatPrice(total);
  console.log("Total:", formatted); // Side effect
  return formatted;
}

const cart = [
  { name: "Apple", price: 1.5, quantity: 3 },
  { name: "Banana", price: 0.75, quantity: 5 },
];

displayTotal(cart);

// ===================================
// 11. Immutable Data Patterns
// ===================================
console.log("\n=== 11. Immutable Data Patterns ===");

// Array operations (pure)
const addItem = (arr, item) => [...arr, item];
const removeItem = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
const updateItem = (arr, index, item) => [...arr.slice(0, index), item, ...arr.slice(index + 1)];

const items = ["a", "b", "c"];
console.log("Original:", items);
console.log("Add 'd':", addItem(items, "d"));
console.log("Remove index 1:", removeItem(items, 1));
console.log("Update index 1:", updateItem(items, 1, "B"));
console.log("Original unchanged:", items);

// Object operations (pure)
const setProperty = (obj, key, value) => ({ ...obj, [key]: value });
const removeProperty = (obj, key) => {
  const { [key]: _, ...rest } = obj;
  return rest;
};

const person = { name: "John", age: 30 };
console.log("\nOriginal:", person);
console.log("Set city:", setProperty(person, "city", "NYC"));
console.log("Remove age:", removeProperty(person, "age"));
console.log("Original unchanged:", person);

// ===================================
// 12. Summary
// ===================================
console.log("\n=== 12. Summary ===");

console.log(`
╔════════════════════════════════════════════════════════════╗
║              PURE vs IMPURE FUNCTIONS                      ║
╠════════════════════════════════════════════════════════════╣
║ PURE FUNCTIONS:                                            ║
║   ✓ Same input → Same output (deterministic)              ║
║   ✓ No side effects                                        ║
║   ✓ Don't modify external state                           ║
║   ✓ Don't depend on external state                        ║
║   ✓ Referentially transparent                             ║
║                                                            ║
║ BENEFITS OF PURE:                                          ║
║   • Easy to test                                           ║
║   • Easy to reason about                                   ║
║   • Safe to memoize/cache                                  ║
║   • Safe to parallelize                                    ║
║   • Easy to compose                                        ║
║                                                            ║
║ IMPURE (SIDE EFFECTS):                                     ║
║   • Console logging                                        ║
║   • DOM manipulation                                       ║
║   • Network requests                                       ║
║   • Database operations                                    ║
║   • File system operations                                 ║
║   • Random values                                          ║
║   • Current time                                           ║
║   • Modifying external variables                           ║
╚════════════════════════════════════════════════════════════╝
`);

console.log("✅ All pure/impure function examples completed!");
