# 🚀 Function Declaration

A **comprehensive guide** to function declarations in JavaScript — the traditional and most common way to define functions.

---

## What is a Function Declaration?

A **function declaration** defines a named function using the `function` keyword. It's hoisted to the top of its scope, meaning you can call it before it's defined in the code.

---

## 🌟 1. Basic Syntax

```js
function functionName(parameters) {
  // Function body
  return value;
}
```

### Example:

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
```

---

## 🌟 2. Key Characteristics

### ✔ Named function:

```js
function add(a, b) {
  return a + b;
}

console.log(add.name); // "add"
```

### ✔ Hoisted:

```js
// Can call before declaration
console.log(multiply(5, 3)); // 15

function multiply(x, y) {
  return x * y;
}
```

### ✔ Creates a binding:

```js
function sayHello() {
  console.log("Hello!");
}

// Function name is bound in the current scope
console.log(typeof sayHello); // "function"
```

---

## 🌟 3. Function Declaration vs Function Expression

### Function Declaration:

```js
function declared() {
  return "I'm declared";
}
```

**Properties:**

- ✅ Hoisted
- ✅ Must have a name
- ✅ Can be called before definition
- ✅ Creates a binding in current scope

### Function Expression:

```js
const expressed = function () {
  return "I'm expressed";
};
```

**Properties:**

- ❌ Not hoisted
- ❌ Name is optional
- ❌ Cannot be called before definition
- ✅ Assigned to a variable

---

## 🌟 4. Parameters and Arguments

### Basic parameters:

```js
function introduce(name, age) {
  console.log(`I'm ${name} and I'm ${age} years old.`);
}

introduce("Alice", 25);
// "I'm Alice and I'm 25 years old."
```

### Multiple parameters:

```js
function calculateArea(length, width, height) {
  return length * width * height;
}

console.log(calculateArea(10, 5, 3)); // 150
```

### No parameters:

```js
function getTimestamp() {
  return Date.now();
}

console.log(getTimestamp());
```

---

## 🌟 5. Return Values

### Explicit return:

```js
function square(num) {
  return num * num;
}

console.log(square(5)); // 25
```

### Multiple return statements:

```js
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(getGrade(85)); // "B"
```

### Early return:

```js
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
```

### Implicit return (undefined):

```js
function noReturn() {
  console.log("No return statement");
}

console.log(noReturn()); // undefined
```

---

## 🌟 6. Function Hoisting

Function declarations are **hoisted** — moved to the top of their scope during compilation.

```js
// This works!
console.log(add(2, 3)); // 5

function add(a, b) {
  return a + b;
}
```

**What happens internally:**

```js
// During compilation, JavaScript does this:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

### Hoisting with var:

```js
console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(myFunc()); // Works! (function is hoisted)
function myFunc() {
  return "Hello";
}
```

---

## 🌟 7. Scope

### Function creates its own scope:

```js
function testScope() {
  const localVar = "I'm local";
  console.log(localVar);
}

testScope(); // "I'm local"
console.log(localVar); // ReferenceError
```

### Accessing outer scope:

```js
const outerVar = "I'm outer";

function accessOuter() {
  console.log(outerVar); // Can access
}

accessOuter(); // "I'm outer"
```

### Nested functions:

```js
function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(outerVar); // Can access outer
    console.log(innerVar); // Can access own
  }

  inner();
  // console.log(innerVar); // Error! Can't access inner
}

outer();
```

---

## 🌟 8. Real-World Examples

### Calculator functions:

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 5)); // 2
```

### Validation function:

```js
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
```

### Data processing:

```js
function processUsers(users) {
  const activeUsers = [];

  for (let user of users) {
    if (user.active) {
      activeUsers.push(user);
    }
  }

  return activeUsers;
}

const users = [
  { name: "John", active: true },
  { name: "Jane", active: false },
  { name: "Bob", active: true },
];

console.log(processUsers(users));
// [{ name: "John", active: true }, { name: "Bob", active: true }]
```

### Helper functions:

```js
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(2)}%`;
}

console.log(formatCurrency(1234.5)); // "$1234.50"
console.log(formatDate(new Date())); // "11/25/2025"
console.log(formatPercentage(0.756)); // "75.60%"
```

---

## 🌟 9. Recursive Function Declarations

Functions can call themselves:

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### Countdown:

```js
function countdown(num) {
  if (num <= 0) {
    console.log("Done!");
    return;
  }
  console.log(num);
  countdown(num - 1);
}

countdown(5);
// 5, 4, 3, 2, 1, "Done!"
```

---

## 🌟 10. Function as First-Class Citizens

Functions can be passed as arguments:

```js
function executeOperation(operation, a, b) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(executeOperation(add, 5, 3)); // 8
console.log(executeOperation(multiply, 5, 3)); // 15
```

---

## 🌟 11. Named Function Benefits

### Self-documenting code:

```js
// Clear what this function does
function calculateMonthlyPayment(principal, rate, months) {
  return (principal * rate) / (1 - Math.pow(1 + rate, -months));
}
```

### Better stack traces:

```js
function fetchUserData() {
  throw new Error("Failed to fetch");
}

// Error stack will show "fetchUserData" in the trace
```

### Recursion requires names:

```js
function traverse(node) {
  console.log(node.value);
  if (node.children) {
    node.children.forEach((child) => traverse(child));
  }
}
```

---

## 🌟 12. Function Declaration Rules

### ✅ Must have a name:

```js
function myFunction() {
  // Valid
}
```

### ❌ Cannot be anonymous:

```js
function () {
  // SyntaxError: Function statements require a name
}
```

### ✅ Can be declared in any scope:

```js
// Global scope
function globalFunc() {}

if (true) {
  // Block scope (in strict mode, block-scoped)
  function blockFunc() {}
}

function outer() {
  // Function scope
  function innerFunc() {}
}
```

---

## 🌟 13. Best Practices

### ✅ Use descriptive names:

```js
// ❌ Bad
function fn(x) {
  return x * 2;
}

// ✅ Good
function doubleNumber(number) {
  return number * 2;
}
```

### ✅ Keep functions focused:

```js
// ❌ Bad - does too much
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendEmail(user);
  logActivity(user);
  updateCache(user);
}

// ✅ Good - single responsibility
function validateUser(user) {
  // Only validation
}

function saveUser(user) {
  // Only saving
}
```

### ✅ Use early returns:

```js
// ✅ Good
function getDiscount(user) {
  if (!user) return 0;
  if (!user.isPremium) return 0;
  if (user.age < 18) return 10;
  return 20;
}
```

### ✅ Avoid side effects when possible:

```js
// ✅ Pure function - no side effects
function add(a, b) {
  return a + b;
}

// ⚠️ Impure - has side effects
let total = 0;
function addToTotal(amount) {
  total += amount; // Modifies external state
}
```

---

## 🌟 14. Common Patterns

### Factory function:

```js
function createUser(name, email) {
  return {
    name,
    email,
    createdAt: Date.now(),
  };
}

const user = createUser("John", "john@example.com");
```

### Validator function:

```js
function isPositive(num) {
  return typeof num === "number" && num > 0;
}

function isInRange(value, min, max) {
  return value >= min && value <= max;
}
```

### Formatter function:

```js
function formatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
```

---

## 🧠 Deep CS Understanding

### How Function Declarations Work:

1. **Compilation Phase:**

   - Function is registered in the environment
   - Memory allocated for function object
   - Function is hoisted to top of scope

2. **Execution Phase:**
   - Function can be called by name
   - Creates execution context when invoked
   - Parameters bound to arguments
   - Return value sent back to caller

### Memory:

- Function declaration creates one function object
- Stored in memory for the lifetime of the scope
- Each call creates new execution context
- Variables are on the call stack

### Performance:

- Function declarations are fast
- JIT compilers optimize hot functions
- Inline caching improves repeated calls
- Same performance as function expressions

---

## 🏆 FINAL SUMMARY

### ✔ Function declarations use `function` keyword

### ✔ Must have a name

### ✔ Are hoisted to top of scope

### ✔ Can be called before definition

### ✔ Create their own scope

### ✔ Can have parameters and return values

### ✔ Support recursion

### ✔ Are first-class citizens

### ✔ Best for: reusable, named functions

### ✔ Traditional and most common way to define functions

---

## 🚀 Related Topics

- Function expressions
- Arrow functions
- Function hoisting
- Function scope
- Parameters vs arguments
- Return values
- First-class functions
- Pure functions
