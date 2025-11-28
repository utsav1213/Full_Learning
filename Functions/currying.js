/**
 * 🚀 Currying - JavaScript Implementation
 * Comprehensive examples of currying in JavaScript
 */

// ===================================
// 1. Basic Currying
// ===================================
console.log("=== 1. Basic Currying ===");

// Non-curried function
function addNormal(a, b, c) {
  return a + b + c;
}

// Manually curried function
function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Normal:", addNormal(1, 2, 3)); // 6
console.log("Curried:", addCurried(1)(2)(3)); // 6

// Arrow function version
const addArrow = (a) => (b) => (c) => a + b + c;
console.log("Arrow curried:", addArrow(1)(2)(3)); // 6

// ===================================
// 2. Curry Helper Function
// ===================================
console.log("\n=== 2. Curry Helper Function ===");

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log("All at once:", curriedMultiply(2, 3, 4)); // 24
console.log("Step by step:", curriedMultiply(2)(3)(4)); // 24
console.log("Mixed 1:", curriedMultiply(2, 3)(4)); // 24
console.log("Mixed 2:", curriedMultiply(2)(3, 4)); // 24

// ===================================
// 3. Partial Application with Currying
// ===================================
console.log("\n=== 3. Partial Application ===");

const greet = curry((greeting, name, punctuation) => {
  return `${greeting}, ${name}${punctuation}`;
});

// Create specialized functions
const sayHello = greet("Hello");
const sayHelloToJohn = greet("Hello", "John");
const sayHelloToJohnExcitedly = greet("Hello", "John", "!");

console.log(sayHello("World", "!")); // "Hello, World!"
console.log(sayHelloToJohn("!")); // "Hello, John!"
console.log(sayHelloToJohnExcitedly); // "Hello, John!"

// ===================================
// 4. Practical Examples
// ===================================
console.log("\n=== 4. Practical Examples ===");

// Discount calculator
const calculatePrice = curry((discount, tax, price) => {
  const discounted = price * (1 - discount / 100);
  return discounted * (1 + tax / 100);
});

// Create specialized calculators
const withTax = calculatePrice(0, 10); // No discount, 10% tax
const blackFriday = calculatePrice(50, 10); // 50% discount, 10% tax
const clearance = calculatePrice(75, 10); // 75% discount, 10% tax

console.log("Original $100 with tax:", withTax(100).toFixed(2));
console.log("Black Friday $100:", blackFriday(100).toFixed(2));
console.log("Clearance $100:", clearance(100).toFixed(2));

// ===================================
// 5. String Operations
// ===================================
console.log("\n=== 5. String Operations ===");

const format = curry((template, ...values) => {
  return template.replace(/{(\d+)}/g, (match, index) => {
    return values[index] !== undefined ? values[index] : match;
  });
});

const userTemplate = format("User: {0}, Age: {1}");
console.log(userTemplate("John", 30)); // "User: John, Age: 30"

const logTemplate = format("[{0}] {1}: {2}");
const infoLog = logTemplate("INFO");
const errorLog = logTemplate("ERROR");

console.log(infoLog("App", "Started")); // "[INFO] App: Started"
console.log(errorLog("DB", "Connection failed")); // "[ERROR] DB: Connection failed"

// ===================================
// 6. Array Operations
// ===================================
console.log("\n=== 6. Array Operations ===");

// Curried map
const map = curry((fn, arr) => arr.map(fn));

// Curried filter
const filter = curry((predicate, arr) => arr.filter(predicate));

// Curried reduce
const reduce = curry((reducer, initial, arr) => arr.reduce(reducer, initial));

// Create specialized functions
const doubleAll = map((x) => x * 2);
const getEvens = filter((x) => x % 2 === 0);
const sum = reduce((acc, x) => acc + x, 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Double all:", doubleAll(numbers));
console.log("Get evens:", getEvens(numbers));
console.log("Sum:", sum(numbers));

// Compose operations
const doubleEvens = (arr) => doubleAll(getEvens(arr));
console.log("Double evens:", doubleEvens(numbers));

// ===================================
// 7. Validation Functions
// ===================================
console.log("\n=== 7. Validation Functions ===");

const validate = curry((rules, value) => {
  const errors = [];

  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      errors.push(result);
    }
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
});

// Rules
const minLength = curry((min, value) => {
  return value.length >= min ? true : `Min length is ${min}`;
});

const maxLength = curry((max, value) => {
  return value.length <= max ? true : `Max length is ${max}`;
});

const pattern = curry((regex, message, value) => {
  return regex.test(value) ? true : message;
});

// Create validators
const validateUsername = validate([
  minLength(3),
  maxLength(20),
  pattern(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters"),
]);

const validatePassword = validate([
  minLength(8),
  maxLength(50),
  pattern(/[A-Z]/, "Must contain uppercase"),
  pattern(/[a-z]/, "Must contain lowercase"),
  pattern(/[0-9]/, "Must contain number"),
]);

console.log("Valid username:", validateUsername("john123"));
console.log("Invalid username:", validateUsername("ab"));
console.log("Valid password:", validatePassword("Password1"));
console.log("Invalid password:", validatePassword("weak"));

// ===================================
// 8. Event Handlers
// ===================================
console.log("\n=== 8. Event Handlers ===");

const handleEvent = curry((action, element, event) => {
  console.log(`${action} on ${element}:`, event.type);
});

const handleClick = handleEvent("Click");
const handleSubmit = handleEvent("Submit");

// Simulate events
handleClick("button")({ type: "click", target: "button" });
handleSubmit("form")({ type: "submit", target: "form" });

// ===================================
// 9. Data Transformation Pipeline
// ===================================
console.log("\n=== 9. Data Transformation Pipeline ===");

// Curried transformations
const prop = curry((key, obj) => obj[key]);
const sortBy = curry((key, arr) => [...arr].sort((a, b) => a[key] - b[key]));
const take = curry((n, arr) => arr.slice(0, n));

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "Diana", age: 28 },
];

// Get youngest 2 users' names
const getNames = map(prop("name"));
const sortByAge = sortBy("age");
const takeTwo = take(2);

const youngestTwo = getNames(takeTwo(sortByAge(users)));
console.log("Youngest 2:", youngestTwo);

// ===================================
// 10. Comparison: Currying vs Partial
// ===================================
console.log("\n=== 10. Currying vs Partial Application ===");

// Partial application
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function calculate(a, b, c, d) {
  return a + b * c - d;
}

// With partial application
const partialCalc = partial(calculate, 10, 5);
console.log("Partial (10, 5, 3, 2):", partialCalc(3, 2)); // 10 + 5*3 - 2 = 23

// With currying
const curriedCalc = curry(calculate);
const curriedWith10 = curriedCalc(10);
const curriedWith10And5 = curriedWith10(5);
console.log("Curried (10)(5)(3)(2):", curriedWith10And5(3)(2)); // Same result

console.log(`
DIFFERENCES:
- Partial: Fix some arguments, get function for rest
- Curry: Transform into chain of single-arg functions

CURRYING:
- Always produces unary (single-arg) functions
- Arguments must be applied in order
- More flexible for composition

PARTIAL APPLICATION:
- Can fix any number of arguments
- Arguments applied left to right
- More straightforward for most cases
`);

// ===================================
// 11. Function Composition with Curry
// ===================================
console.log("\n=== 11. Composition with Curry ===");

// Compose function
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe function
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

// Curried utilities
const add = curry((a, b) => a + b);
const multiply = curry((a, b) => a * b);
const subtract = curry((a, b) => a - b);

// Create processing pipeline
const processNumber = pipe(
  add(10), // Add 10
  multiply(2), // Multiply by 2
  subtract(5) // Subtract 5 (note: this subtracts 5 from current value)
);

console.log("Process 5:", processNumber(5)); // ((5 + 10) * 2) - 5 = 25

// ===================================
// 12. Best Practices
// ===================================
console.log("\n=== 12. Best Practices ===");

console.log(`
✅ USE CURRYING when:
   - Building reusable utility functions
   - Creating function pipelines
   - Need to partially apply arguments
   - Functional programming patterns

❌ AVOID when:
   - Simple, one-time functions
   - Performance is critical (slight overhead)
   - Code readability suffers
   - Team unfamiliar with pattern

💡 TIPS:
   - Put most variable argument last
   - Use arrow functions for concise syntax
   - Combine with compose/pipe for pipelines
   - Document curried functions well
`);

console.log("✅ All currying examples completed!");
