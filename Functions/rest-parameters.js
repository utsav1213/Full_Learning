/**
 * 🚀 Rest Parameters - JavaScript Implementation
 * Comprehensive examples of rest parameters in JavaScript
 */

// ===================================
// 1. Basic Rest Parameters
// ===================================
console.log("=== 1. Basic Rest Parameters ===");

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("sum(1, 2, 3):", sum(1, 2, 3)); // 6
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15
console.log("sum():", sum()); // 0

// ===================================
// 2. Rest with Regular Parameters
// ===================================
console.log("\n=== 2. Rest with Regular Parameters ===");

function greetAll(greeting, ...names) {
  return names.map((name) => `${greeting}, ${name}!`);
}

console.log(greetAll("Hello", "John", "Jane", "Bob"));
// ["Hello, John!", "Hello, Jane!", "Hello, Bob!"]

function logAll(first, second, ...rest) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

logAll("a", "b", "c", "d", "e");

// ===================================
// 3. Rest is a Real Array
// ===================================
console.log("\n=== 3. Rest is a Real Array ===");

function showType(...args) {
  console.log("Array.isArray:", Array.isArray(args));
  console.log("Type:", typeof args);
  console.log("Has map:", typeof args.map === "function");
  console.log("Has filter:", typeof args.filter === "function");
}

showType(1, 2, 3);

// ===================================
// 4. vs Arguments Object
// ===================================
console.log("\n=== 4. vs Arguments Object ===");

// Using arguments (old way)
function oldSum() {
  const args = Array.from(arguments);
  return args.reduce((acc, num) => acc + num, 0);
}

// Using rest (modern way)
function newSum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Old sum:", oldSum(1, 2, 3, 4, 5)); // 15
console.log("New sum:", newSum(1, 2, 3, 4, 5)); // 15

console.log(`
DIFFERENCES:
- arguments: array-like object, not real array
- rest: real Array with all methods
- arguments: available in all functions
- rest: only with ...syntax
- arguments: contains all arguments
- rest: only "rest" of arguments after named params
`);

// ===================================
// 5. Array Methods with Rest
// ===================================
console.log("\n=== 5. Array Methods with Rest ===");

function findMax(...numbers) {
  return Math.max(...numbers);
}

function findMin(...numbers) {
  return Math.min(...numbers);
}

function average(...numbers) {
  if (numbers.length === 0) return 0;
  return sum(...numbers) / numbers.length;
}

console.log("Max:", findMax(3, 7, 2, 9, 1)); // 9
console.log("Min:", findMin(3, 7, 2, 9, 1)); // 1
console.log("Average:", average(10, 20, 30)); // 20

// ===================================
// 6. Filtering and Mapping
// ===================================
console.log("\n=== 6. Filtering and Mapping ===");

function filterPositive(...numbers) {
  return numbers.filter((n) => n > 0);
}

function doubleAll(...numbers) {
  return numbers.map((n) => n * 2);
}

function squareAll(...numbers) {
  return numbers.map((n) => n * n);
}

console.log("Positive:", filterPositive(-1, 2, -3, 4, -5, 6));
console.log("Doubled:", doubleAll(1, 2, 3, 4, 5));
console.log("Squared:", squareAll(1, 2, 3, 4, 5));

// ===================================
// 7. Combining Arrays
// ===================================
console.log("\n=== 7. Combining Arrays ===");

function mergeArrays(...arrays) {
  return arrays.flat();
}

function mergeUnique(...arrays) {
  return [...new Set(arrays.flat())];
}

console.log("Merge:", mergeArrays([1, 2], [3, 4], [5, 6]));
console.log("Unique:", mergeUnique([1, 2, 3], [2, 3, 4], [3, 4, 5]));

// ===================================
// 8. Object Operations
// ===================================
console.log("\n=== 8. Object Operations ===");

function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

console.log("Merged:", mergeObjects(obj1, obj2, obj3));

// ===================================
// 9. Function Composition
// ===================================
console.log("\n=== 9. Function Composition ===");

function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const composed = compose(square, double, addOne);
const piped = pipe(addOne, double, square);

console.log("Compose(5):", composed(5)); // ((5+1)*2)^2 = 144
console.log("Pipe(5):", piped(5)); // ((5+1)*2)^2 = 144

// ===================================
// 10. Partial Application
// ===================================
console.log("\n=== 10. Partial Application ===");

function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name, punctuation) {
  return `${greeting}, ${name}${punctuation}`;
}

const sayHello = partial(greet, "Hello");
const sayHelloJohn = partial(greet, "Hello", "John");

console.log(sayHello("World", "!"));
console.log(sayHelloJohn("!"));

// ===================================
// 11. Event Handler
// ===================================
console.log("\n=== 11. Event Handler ===");

function createHandler(action, ...defaultArgs) {
  return function (...eventArgs) {
    console.log(`Action: ${action}`);
    console.log(`Default args:`, defaultArgs);
    console.log(`Event args:`, eventArgs);
  };
}

const clickHandler = createHandler("click", "button", "primary");
clickHandler("event1", "event2");

// ===================================
// 12. Logging Utility
// ===================================
console.log("\n=== 12. Logging Utility ===");

function createLogger(prefix) {
  return function (...messages) {
    console.log(`[${prefix}]`, ...messages);
  };
}

const appLog = createLogger("APP");
const dbLog = createLogger("DB");
const apiLog = createLogger("API");

appLog("Application started");
dbLog("Connected to database");
apiLog("Request received", "GET", "/users");

// ===================================
// 13. Arrow Functions with Rest
// ===================================
console.log("\n=== 13. Arrow Functions with Rest ===");

const multiply = (...nums) => nums.reduce((a, b) => a * b, 1);
const join = (...strings) => strings.join(" ");
const first = (first, ...rest) => first;
const last = (...args) => args[args.length - 1];

console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Join:", join("Hello", "World", "!"));
console.log("First:", first(1, 2, 3, 4, 5));
console.log("Last:", last(1, 2, 3, 4, 5));

// ===================================
// 14. Destructuring with Rest
// ===================================
console.log("\n=== 14. Destructuring with Rest ===");

function processItems([first, second, ...rest]) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

processItems([1, 2, 3, 4, 5]);

function processUser({ name, age, ...extra }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Extra:", extra);
}

processUser({ name: "John", age: 30, role: "admin", active: true });

// ===================================
// 15. Best Practices
// ===================================
console.log("\n=== 15. Best Practices ===");

console.log(`
✅ DO:
   - Use rest parameters instead of arguments
   - Place rest parameter last
   - Use descriptive names (...items, ...users)
   - Combine with spread for flexibility

❌ DON'T:
   - Put rest parameter anywhere but last
   - Confuse with spread operator (context matters)
   - Overuse when fixed params are clearer

💡 PATTERNS:
   - Variadic functions (any number of args)
   - Function composition helpers
   - Logging and debugging utilities
   - Array/object merging functions
`);

console.log("✅ All rest parameter examples completed!");
