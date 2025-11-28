/**
 * 🚀 Arguments Object - JavaScript Implementation
 * Comprehensive examples of the arguments object
 */

// ===================================
// 1. Basic Arguments Object
// ===================================
console.log("=== 1. Basic Arguments Object ===");

function showArguments() {
  console.log("arguments:", arguments);
  console.log("Type:", typeof arguments);
  console.log("Length:", arguments.length);
}

showArguments(1, 2, 3, "hello", true);

// ===================================
// 2. Accessing Arguments
// ===================================
console.log("\n=== 2. Accessing Arguments ===");

function accessArgs() {
  console.log("First:", arguments[0]);
  console.log("Second:", arguments[1]);
  console.log("Third:", arguments[2]);
  console.log("Fourth:", arguments[3]); // undefined if not passed
}

accessArgs("a", "b", "c");

// ===================================
// 3. Iterating Over Arguments
// ===================================
console.log("\n=== 3. Iterating Over Arguments ===");

function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Sum:", sumAll(1, 2, 3, 4, 5)); // 15

// ===================================
// 4. Arguments is Array-Like
// ===================================
console.log("\n=== 4. Array-Like Object ===");

function checkArrayLike() {
  console.log("Is array:", Array.isArray(arguments)); // false
  console.log("Has length:", "length" in arguments); // true
  console.log("Has forEach:", typeof arguments.forEach); // undefined
  console.log("Has map:", typeof arguments.map); // undefined
  console.log("Can index:", arguments[0]); // works
}

checkArrayLike("test");

// ===================================
// 5. Converting to Array
// ===================================
console.log("\n=== 5. Converting to Array ===");

function convertToArray() {
  // Method 1: Array.from
  const arr1 = Array.from(arguments);
  console.log("Array.from:", arr1);

  // Method 2: Spread operator
  const arr2 = [...arguments];
  console.log("Spread:", arr2);

  // Method 3: Array.prototype.slice
  const arr3 = Array.prototype.slice.call(arguments);
  console.log("slice.call:", arr3);

  // Now we can use array methods
  const doubled = arr1.map((x) => x * 2);
  console.log("Doubled:", doubled);
}

convertToArray(1, 2, 3);

// ===================================
// 6. Arguments vs Named Parameters
// ===================================
console.log("\n=== 6. Arguments vs Named Parameters ===");

function mixedParams(a, b, c) {
  console.log("Named a:", a);
  console.log("Named b:", b);
  console.log("Named c:", c);
  console.log("arguments[0]:", arguments[0]);
  console.log("arguments[3]:", arguments[3]); // Extra argument
  console.log("arguments.length:", arguments.length);
}

mixedParams(1, 2, 3, 4, 5);

// ===================================
// 7. Modifying Arguments
// ===================================
console.log("\n=== 7. Modifying Arguments ===");

function modifyArgs(x) {
  console.log("Before - x:", x, "arguments[0]:", arguments[0]);

  arguments[0] = 100;
  console.log("After modifying arguments[0] - x:", x);

  x = 200;
  console.log("After modifying x - arguments[0]:", arguments[0]);
}

// In non-strict mode, named params and arguments are linked
modifyArgs(10);

// In strict mode, they would be independent

// ===================================
// 8. Arguments.callee (Deprecated)
// ===================================
console.log("\n=== 8. Arguments.callee (Deprecated) ===");

// Note: callee is deprecated and doesn't work in strict mode
function factorial(n) {
  if (n <= 1) return 1;
  // Old way (don't use):
  // return n * arguments.callee(n - 1);
  return n * factorial(n - 1); // Proper way
}

console.log("5! =", factorial(5));

// ===================================
// 9. Rest Parameters (Modern Alternative)
// ===================================
console.log("\n=== 9. Rest Parameters (Modern) ===");

// Old way with arguments
function oldSum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

// Modern way with rest
function newSum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log("Old sum:", oldSum(1, 2, 3, 4, 5));
console.log("New sum:", newSum(1, 2, 3, 4, 5));

// ===================================
// 10. Arguments in Arrow Functions
// ===================================
console.log("\n=== 10. Arrow Functions ===");

// Arrow functions DON'T have their own 'arguments'
const arrowFunc = (...args) => {
  // console.log(arguments); // Would error or use outer scope
  console.log("Arrow with rest:", args);
};

arrowFunc(1, 2, 3);

// Arrow in regular function inherits 'arguments'
function outer() {
  const inner = () => {
    console.log("Arrow using outer arguments:", [...arguments]);
  };
  inner();
}

outer("a", "b", "c");

// ===================================
// 11. Use Cases
// ===================================
console.log("\n=== 11. Use Cases ===");

// Variadic function (any number of args)
function format(template) {
  let result = template;
  for (let i = 1; i < arguments.length; i++) {
    result = result.replace(`{${i - 1}}`, arguments[i]);
  }
  return result;
}

console.log(format("Hello, {0}! You have {1} messages.", "John", 5));

// Function with optional parameters
function log(message) {
  const prefix = arguments[1] || "[INFO]";
  const timestamp = arguments[2] || new Date().toISOString();
  console.log(`${timestamp} ${prefix} ${message}`);
}

log("Application started");
log("Error occurred", "[ERROR]");
log("Custom time", "[DEBUG]", "2024-01-01");

// ===================================
// 12. Comparing Approaches
// ===================================
console.log("\n=== 12. Comparing Approaches ===");

console.log(`
╔════════════════════════════════════════════════════════════╗
║           ARGUMENTS OBJECT vs REST PARAMETERS             ║
╠════════════════════════════════════════════════════════════╣
║ ARGUMENTS OBJECT:                                          ║
║   • Array-like, not real Array                            ║
║   • Contains ALL arguments                                ║
║   • Available in regular functions only                   ║
║   • Can access arguments[i]                               ║
║   • Has length property                                    ║
║   • Legacy approach                                        ║
║                                                            ║
║ REST PARAMETERS:                                           ║
║   • Real Array with all methods                           ║
║   • Contains only "rest" of arguments                     ║
║   • Works in all function types                           ║
║   • Cleaner, more readable                                ║
║   • Modern approach (ES6+)                                ║
╠════════════════════════════════════════════════════════════╣
║ RECOMMENDATION:                                            ║
║   Use REST PARAMETERS for new code                        ║
║   Know ARGUMENTS for legacy code understanding            ║
╚════════════════════════════════════════════════════════════╝
`);

// ===================================
// 13. Best Practices
// ===================================
console.log("\n=== 13. Best Practices ===");

console.log(`
✅ DO:
   - Use rest parameters (...args) for new code
   - Convert arguments to array if methods needed
   - Understand arguments for legacy code

❌ DON'T:
   - Use arguments.callee (deprecated)
   - Modify arguments directly
   - Use arguments in arrow functions (won't work)
   - Rely on arguments when rest params work

💡 CONVERTING:
   Array.from(arguments)    - Most readable
   [...arguments]           - Shortest
   Array.prototype.slice.call(arguments) - Legacy
`);

console.log("✅ All arguments object examples completed!");
