# 🚀 Pure and Impure Functions

A **comprehensive guide** to pure and impure functions in JavaScript — understanding function purity and side effects.

---

## What are Pure Functions?

A **pure function** is a function that:

1. Always returns the same output for the same input
2. Has no side effects (doesn't modify external state)
3. Doesn't depend on external mutable state

---

## 🌟 1. Pure Functions

### Basic example:

```js
// ✅ Pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
console.log(add(2, 3)); // Always returns 5
```

### Characteristics:

```js
// ✅ Pure - only depends on inputs
function multiply(x, y) {
  return x * y;
}

// ✅ Pure - no side effects
function square(n) {
  return n * n;
}

// ✅ Pure - creates new array
function double Array(arr) {
  return arr.map(x => x * 2);
}
```

---

## 🌟 2. Impure Functions

### Basic example:

```js
let counter = 0;

// ❌ Impure - modifies external state
function increment() {
  counter++;
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2 (different output!)
```

### Common impure behaviors:

```js
// ❌ Modifies input
function addItem(array, item) {
  array.push(item); // Mutates input
  return array;
}

// ❌ Depends on external state
let tax = 0.1;
function calculateTotal(price) {
  return price + price * tax;
}

// ❌ Has side effects
function logAndAdd(a, b) {
  console.log("Adding:", a, b); // Side effect!
  return a + b;
}

// ❌ Uses random/date
function generateId() {
  return Date.now() + Math.random();
}
```

---

## 🌟 3. Comparing Pure vs Impure

### Same result with pure function:

```js
// ✅ Pure version
function addPure(a, b) {
  return a + b;
}

console.log(addPure(2, 3)); // 5
console.log(addPure(2, 3)); // 5
console.log(addPure(2, 3)); // 5
```

### Different results with impure function:

```js
let result = 0;

// ❌ Impure version
function addImpure(a, b) {
  result = a + b;
  return result;
}

console.log(addImpure(2, 3)); // 5
result = 10; // External change
console.log(addImpure(2, 3)); // 5 (but result is now 5, not expected)
```

---

## 🌟 4. Side Effects

### What are side effects?

Side effects are any changes to state outside the function:

- Modifying global variables
- Modifying input arguments
- Console logging
- DOM manipulation
- Network requests
- File I/O
- Database updates

### Examples of side effects:

```js
// ❌ Modifying global
let count = 0;
function increment() {
  count++; // Side effect
}

// ❌ Mutating input
function addProperty(obj) {
  obj.newProp = "value"; // Side effect
  return obj;
}

// ❌ Console output
function calculate(a, b) {
  console.log("Calculating..."); // Side effect
  return a + b;
}

// ❌ DOM manipulation
function updateUI(text) {
  document.getElementById("output").textContent = text; // Side effect
}

// ❌ Network request
function fetchData(url) {
  fetch(url); // Side effect
}
```

---

## 🌟 5. Converting Impure to Pure

### Example 1: Avoid mutating input

```js
// ❌ Impure - mutates array
function addItem(array, item) {
  array.push(item);
  return array;
}

// ✅ Pure - creates new array
function addItem(array, item) {
  return [...array, item];
}
```

### Example 2: Avoid external dependencies

```js
let taxRate = 0.1;

// ❌ Impure - depends on external state
function calculateTotal(price) {
  return price + price * taxRate;
}

// ✅ Pure - takes all inputs as parameters
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}
```

### Example 3: Avoid modifying global state

```js
let total = 0;

// ❌ Impure - modifies global
function addToTotal(value) {
  total += value;
  return total;
}

// ✅ Pure - returns new total
function addToTotal(currentTotal, value) {
  return currentTotal + value;
}
```

---

## 🌟 6. Array Operations: Pure vs Impure

### Mutating (impure) methods:

```js
const numbers = [1, 2, 3];

// ❌ These methods mutate the original array
numbers.push(4); // Adds to end
numbers.pop(); // Removes from end
numbers.shift(); // Removes from beginning
numbers.unshift(0); // Adds to beginning
numbers.splice(1, 1); // Removes/adds elements
numbers.sort(); // Sorts in place
numbers.reverse(); // Reverses in place
```

### Non-mutating (pure) alternatives:

```js
const numbers = [1, 2, 3];

// ✅ These methods return new arrays
const added = [...numbers, 4]; // Instead of push
const removed = numbers.slice(0, -1); // Instead of pop
const shifted = numbers.slice(1); // Instead of shift
const unshifted = [0, ...numbers]; // Instead of unshift
const spliced = [...numbers.slice(0, 1), ...numbers.slice(2)]; // Instead of splice
const sorted = [...numbers].sort(); // Instead of sort
const reversed = [...numbers].reverse(); // Instead of reverse

console.log(numbers); // Still [1, 2, 3]
```

---

## 🌟 7. Object Operations: Pure vs Impure

### Mutating (impure):

```js
const person = { name: "John", age: 30 };

// ❌ Mutates original object
person.age = 31;
person.email = "john@example.com";
delete person.age;
```

### Non-mutating (pure):

```js
const person = { name: "John", age: 30 };

// ✅ Creates new objects
const updated = { ...person, age: 31 };
const withEmail = { ...person, email: "john@example.com" };
const { age, ...withoutAge } = person;

console.log(person); // Still { name: "John", age: 30 }
```

### Deep updates (pure):

```js
const user = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

// ✅ Pure deep update
const updated = {
  ...user,
  address: {
    ...user.address,
    city: "Boston",
  },
};

console.log(user.address.city); // Still "New York"
console.log(updated.address.city); // "Boston"
```

---

## 🌟 8. Benefits of Pure Functions

### 1. Predictable:

```js
// Always know what you'll get
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
```

### 2. Testable:

```js
// Easy to test
function double(x) {
  return x * 2;
}

// Test
console.assert(double(5) === 10);
console.assert(double(0) === 0);
console.assert(double(-3) === -6);
```

### 3. Cacheable (memoizable):

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveOperation = memoize(function (n) {
  // Only calculated once for each input
  return n * n;
});
```

### 4. Parallelizable:

```js
// Pure functions can run in parallel safely
const results = await Promise.all([calculate(1), calculate(2), calculate(3)]);
```

### 5. Easier to reason about:

```js
// ✅ Pure - easy to understand
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// ❌ Impure - hard to predict
let suffix = "";
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}${suffix}`;
}
```

---

## 🌟 9. When Impure Functions are Necessary

### I/O operations:

```js
// Necessary impure functions
function readFile(filename) {
  // File I/O is inherently impure
  return fs.readFileSync(filename);
}

function saveToDatabase(data) {
  // Database operations are impure
  db.insert(data);
}
```

### User interface:

```js
function updateDisplay(message) {
  // DOM manipulation is impure but necessary
  document.getElementById("output").textContent = message;
}
```

### Logging:

```js
function logError(error) {
  // Logging is a side effect but useful
  console.error(error);
}
```

### Strategy: Isolate impure code

```js
// ✅ Pure core logic
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ Impure wrapper for I/O
function displayTotal(items) {
  const total = calculateTotal(items); // Pure
  document.getElementById("total").textContent = total; // Impure
}
```

---

## 🌟 10. Real-World Examples

### Pure utility functions:

```js
// ✅ Pure string utilities
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split("").reverse().join("");
const truncate = (str, length) => str.slice(0, length) + "...";

// ✅ Pure math utilities
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
```

### Pure data transformations:

```js
// ✅ Pure transformations
const users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 35, active: true },
];

const getActiveUsers = (users) => users.filter((u) => u.active);
const getUserNames = (users) => users.map((u) => u.name);
const getAverageAge = (users) => average(users.map((u) => u.age));

// All functions are pure and composable
const activeUserNames = getUserNames(getActiveUsers(users));
```

### Pure validation:

```js
// ✅ Pure validators
const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isStrongPassword = (str) =>
  str.length >= 8 && /[A-Z]/.test(str) && /[0-9]/.test(str);
const isValidAge = (age) => age >= 0 && age <= 150;

// Composable
const isValidUser = (user) =>
  isEmail(user.email) &&
  isStrongPassword(user.password) &&
  isValidAge(user.age);
```

---

## 🌟 11. Testing Pure vs Impure Functions

### Testing pure functions (easy):

```js
// ✅ Pure function
function add(a, b) {
  return a + b;
}

// Simple to test
test("add function", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 1)).toBe(0);
});
```

### Testing impure functions (harder):

```js
// ❌ Impure function
let count = 0;
function increment() {
  count++;
  return count;
}

// Must reset state between tests
test("increment function", () => {
  count = 0; // Reset
  expect(increment()).toBe(1);
  expect(increment()).toBe(2);
  count = 0; // Reset again
});
```

---

## 🌟 12. Functional Programming with Pure Functions

### Function composition:

```js
// ✅ Pure functions compose beautifully
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const calculate = compose(square, addOne, double);

console.log(calculate(5)); // (5 * 2 + 1) ^ 2 = 121
```

### Pipeline:

```js
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const processData = pipe(
  (data) => data.filter((x) => x > 0),
  (data) => data.map((x) => x * 2),
  (data) => data.reduce((a, b) => a + b, 0)
);

console.log(processData([1, -2, 3, -4, 5])); // (1 + 3 + 5) * 2 = 18
```

---

## 🌟 13. Best Practices

### ✅ Prefer pure functions:

```js
// ✅ Pure
function calculateDiscount(price, percent) {
  return price * (percent / 100);
}
```

### ✅ Isolate side effects:

```js
// Pure core
function processData(data) {
  return data.map((x) => x * 2);
}

// Impure wrapper
function processAndSave(data) {
  const processed = processData(data); // Pure
  saveToDatabase(processed); // Impure
  return processed;
}
```

### ✅ Use const for immutability:

```js
const data = [1, 2, 3];
// data = [4, 5, 6]; // Error!

const person = { name: "John" };
// person = { name: "Jane" }; // Error!
```

### ✅ Document side effects:

```js
/**
 * Fetches user data from API
 * @sideeffects Makes network request
 */
function fetchUser(id) {
  return fetch(`/api/users/${id}`);
}
```

---

## 🧠 Deep CS Understanding

### Referential Transparency:

- Pure functions exhibit referential transparency
- Function call can be replaced with its return value
- Enables algebraic reasoning about code
- Basis for compiler optimizations

### Memoization:

- Only works with pure functions
- Cache results based on inputs
- Trades memory for speed
- Automatic in some functional languages

### Parallelization:

- Pure functions safe to parallelize
- No shared state to synchronize
- Can execute in any order
- Enables efficient concurrency

### Debugging:

- Pure functions easier to debug
- No hidden state to track
- Reproducible behavior
- Can test in isolation

---

## 🏆 FINAL SUMMARY

### ✔ Pure functions: same input → same output

### ✔ Pure functions: no side effects

### ✔ Impure functions: modify external state

### ✔ Side effects: I/O, mutations, global changes

### ✔ Pure functions: predictable, testable, cacheable

### ✔ Prefer pure functions when possible

### ✔ Isolate impure code to boundaries

### ✔ Pure functions enable functional programming

### ✔ Immutability supports purity

### ✔ Some impurity necessary for real applications

---

## 🚀 Related Topics

- Functional programming
- Immutability
- Side effects
- Higher-order functions
- Function composition
- Memoization
- Referential transparency
- Testing strategies
