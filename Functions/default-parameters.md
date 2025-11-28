# 🚀 Default Parameters

A **comprehensive guide** to default function parameters in JavaScript — providing fallback values when arguments are not supplied.

---

## What are Default Parameters?

**Default parameters** allow you to initialize function parameters with default values if no value or `undefined` is passed. This is an ES6 (ES2015) feature.

---

## 🌟 1. Basic Syntax

### Simple default:

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet()); // "Hello, Guest!"
```

### Multiple defaults:

```js
function createUser(name = "Anonymous", age = 18, role = "user") {
  return { name, age, role };
}

console.log(createUser()); // { name: "Anonymous", age: 18, role: "user" }
console.log(createUser("John")); // { name: "John", age: 18, role: "user" }
console.log(createUser("Jane", 25)); // { name: "Jane", age: 25, role: "user" }
console.log(createUser("Bob", 30, "admin")); // { name: "Bob", age: 30, role: "admin" }
```

---

## 🌟 2. Default vs Undefined

### Undefined triggers default:

```js
function test(value = "default") {
  return value;
}

console.log(test(undefined)); // "default"
console.log(test(null)); // null
console.log(test(0)); // 0
console.log(test("")); // ""
console.log(test(false)); // false
```

### Only `undefined` triggers default, not other falsy values:

```js
function setDefault(value = 100) {
  return value;
}

console.log(setDefault(undefined)); // 100
console.log(setDefault(null)); // null
console.log(setDefault(0)); // 0
console.log(setDefault("")); // ""
console.log(setDefault(false)); // false
```

---

## 🌟 3. Complex Default Values

### Using expressions:

```js
function multiply(a, b = a * 2) {
  return a * b;
}

console.log(multiply(5)); // 25 (5 * 10)
console.log(multiply(5, 3)); // 15
```

### Using function calls:

```js
function getDefaultName() {
  return "Guest_" + Date.now();
}

function greet(name = getDefaultName()) {
  return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest_1234567890!"
```

### Using other parameters:

```js
function createRectangle(width, height = width) {
  return { width, height, area: width * height };
}

console.log(createRectangle(5)); // { width: 5, height: 5, area: 25 }
console.log(createRectangle(5, 10)); // { width: 5, height: 10, area: 50 }
```

---

## 🌟 4. Order Matters

### Parameters evaluated left-to-right:

```js
function example(a = 1, b = a + 1, c = a + b) {
  return { a, b, c };
}

console.log(example()); // { a: 1, b: 2, c: 3 }
console.log(example(10)); // { a: 10, b: 11, c: 21 }
console.log(example(10, 20)); // { a: 10, b: 20, c: 30 }
```

### Can't use later parameters in earlier defaults:

```js
// ❌ ReferenceError - b is not defined yet
// function test(a = b, b = 1) {}

// ✅ Works - a is defined before b
function test(a = 1, b = a) {
  return { a, b };
}
```

---

## 🌟 5. Default Object Parameters

### Object with defaults:

```js
function createUser({ name = "Anonymous", age = 18, role = "user" } = {}) {
  return { name, age, role };
}

console.log(createUser()); // All defaults
console.log(createUser({ name: "John" })); // name: "John", rest default
console.log(createUser({ name: "Jane", age: 25 })); // name and age provided
```

### Without empty object default:

```js
function createUser({ name = "Anonymous", age = 18 }) {
  return { name, age };
}

// createUser(); // ❌ TypeError: Cannot destructure undefined
console.log(createUser({})); // ✅ Works with empty object
```

### With empty object default:

```js
function createUser({ name = "Anonymous", age = 18 } = {}) {
  return { name, age };
}

console.log(createUser()); // ✅ Works without any argument
```

---

## 🌟 6. Default Array Parameters

```js
function processItems([first = 0, second = 0, third = 0] = []) {
  return first + second + third;
}

console.log(processItems()); // 0
console.log(processItems([1])); // 1
console.log(processItems([1, 2])); // 3
console.log(processItems([1, 2, 3])); // 6
```

---

## 🌟 7. Old Way (Pre-ES6)

### Using || operator:

```js
function greet(name) {
  name = name || "Guest"; // ❌ Problem with falsy values
  return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet()); // "Hello, Guest!"
console.log(greet("")); // "Hello, Guest!" (but "" was provided!)
console.log(greet(0)); // "Hello, Guest!" (but 0 was provided!)
```

### Using typeof check:

```js
function greet(name) {
  if (typeof name === "undefined") {
    name = "Guest";
  }
  return `Hello, ${name}!`;
}

console.log(greet("")); // "Hello, !" (correctly uses "")
console.log(greet(0)); // "Hello, 0!" (correctly uses 0)
```

### Using ternary:

```js
function greet(name) {
  name = name !== undefined ? name : "Guest";
  return `Hello, ${name}!`;
}
```

---

## 🌟 8. Practical Examples

### API request with defaults:

```js
function fetchData({
  url,
  method = "GET",
  headers = {},
  timeout = 5000,
  retries = 3,
} = {}) {
  return {
    url,
    method,
    headers,
    timeout,
    retries,
  };
}

const config = fetchData({
  url: "/api/users",
  method: "POST",
});
// { url: "/api/users", method: "POST", headers: {}, timeout: 5000, retries: 3 }
```

### Configuration function:

```js
function initApp({
  port = 3000,
  host = "localhost",
  debug = false,
  database = {
    url: "mongodb://localhost:27017",
    name: "app",
  },
  middleware = [],
} = {}) {
  return {
    port,
    host,
    debug,
    database,
    middleware,
  };
}

const config = initApp({ port: 8080, debug: true });
```

### Logger with levels:

```js
function log(message, level = "info", timestamp = new Date().toISOString()) {
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
}

log("Application started");
log("Something went wrong", "error");
log("Debug info", "debug", "2024-01-01T00:00:00.000Z");
```

---

## 🌟 9. Function.length Property

### Default parameters don't count:

```js
function test1(a, b) {}
console.log(test1.length); // 2

function test2(a, b = 1) {}
console.log(test2.length); // 1 (only 'a' counts)

function test3(a = 1, b = 2) {}
console.log(test3.length); // 0 (neither counts)

function test4(a, b = 1, c) {}
console.log(test4.length); // 1 (only 'a' counts, stops at first default)
```

---

## 🌟 10. Default Parameters with Rest

```js
function sum(initial = 0, ...numbers) {
  return numbers.reduce((acc, num) => acc + num, initial);
}

console.log(sum()); // 0
console.log(sum(10)); // 10
console.log(sum(10, 1, 2, 3)); // 16
```

---

## 🌟 11. Skipping Default Parameters

### Can't skip middle parameters easily:

```js
function createUser(name, age = 18, role = "user") {
  return { name, age, role };
}

// Want to use default age but provide role?
// ❌ Can't do: createUser("John", , "admin")

// ✅ Must explicitly pass undefined
console.log(createUser("John", undefined, "admin"));
// { name: "John", age: 18, role: "admin" }
```

### Better approach - use object:

```js
function createUser({ name, age = 18, role = "user" }) {
  return { name, age, role };
}

// ✅ Can skip any parameter
console.log(createUser({ name: "John", role: "admin" }));
// { name: "John", age: 18, role: "admin" }
```

---

## 🌟 12. Dynamic Defaults

### Using functions:

```js
let counter = 0;

function getId() {
  return ++counter;
}

function createUser(name, id = getId()) {
  return { id, name };
}

console.log(createUser("John")); // { id: 1, name: "John" }
console.log(createUser("Jane")); // { id: 2, name: "Jane" }
console.log(createUser("Bob", 99)); // { id: 99, name: "Bob" }
console.log(createUser("Alice")); // { id: 3, name: "Alice" }
```

### Timestamp default:

```js
function logEvent(message, timestamp = Date.now()) {
  return { message, timestamp };
}

console.log(logEvent("Event 1"));
// { message: "Event 1", timestamp: 1234567890 }
```

---

## 🌟 13. Throwing Errors for Required Parameters

```js
function required(paramName) {
  throw new Error(`Parameter '${paramName}' is required`);
}

function createUser(
  name = required("name"),
  email = required("email"),
  age = 18
) {
  return { name, email, age };
}

// createUser(); // Error: Parameter 'name' is required
// createUser("John"); // Error: Parameter 'email' is required
console.log(createUser("John", "john@example.com")); // ✅ Works
```

---

## 🌟 14. Default with Destructuring

### Nested defaults:

```js
function createUser({
  name = "Anonymous",
  age = 18,
  address = ({ city = "Unknown", country = "Unknown" } = {}),
} = {}) {
  return { name, age, address: { city, country } };
}

console.log(createUser());
// { name: "Anonymous", age: 18, address: { city: "Unknown", country: "Unknown" } }

console.log(createUser({ name: "John", address: { city: "New York" } }));
// { name: "John", age: 18, address: { city: "New York", country: "Unknown" } }
```

---

## 🌟 15. Common Patterns

### Options object pattern:

```js
function animate(element, {
  duration = 1000,
  easing = "ease",
  delay = 0,
  iterations = 1,
  direction = "normal",
  fill = "both"
} = {}) {
  return element.animate(/* animation */, {
    duration,
    easing,
    delay,
    iterations,
    direction,
    fill
  });
}

// Use defaults
animate(element);

// Override specific options
animate(element, { duration: 2000, easing: "ease-in" });
```

### Pagination defaults:

```js
function getUsers({ page = 1, limit = 10, sort = "name", order = "asc" } = {}) {
  return {
    page,
    limit,
    sort,
    order,
    offset: (page - 1) * limit,
  };
}

console.log(getUsers()); // All defaults
console.log(getUsers({ page: 2 })); // page: 2, rest default
console.log(getUsers({ page: 3, limit: 20 })); // page: 3, limit: 20
```

---

## 🌟 16. Best Practices

### ✅ Use defaults for optional parameters:

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

### ✅ Put optional parameters last:

```js
// ✅ Good
function createUser(name, age = 18) {}

// ❌ Awkward - have to pass undefined
function createUser(age = 18, name) {}
createUser(undefined, "John");
```

### ✅ Use objects for many optional parameters:

```js
function createUser({ name, age = 18, role = "user", active = true } = {}) {
  return { name, age, role, active };
}
```

### ✅ Provide defaults for destructured objects:

```js
// ✅ Good - won't error if called without argument
function test({ a = 1 } = {}) {}

// ❌ Bad - will error if called without argument
function test({ a = 1 }) {}
// test(); // TypeError
```

---

## 🧠 Deep CS Understanding

### Evaluation Time:

- Defaults evaluated at call time, not definition time
- Function defaults called each time
- Expressions re-evaluated for each call
- Can have side effects

### Scope:

- Default expressions have access to previous parameters
- Create temporary scope for initialization
- Can't access later parameters
- Can access outer scope variables

### Memory:

- No extra memory for unused defaults
- Function call defaults allocate new values
- Objects/arrays in defaults not reused
- Each call gets fresh default values

### Performance:

- Minimal overhead for simple defaults
- Function call defaults have cost
- Complex expressions evaluated each time
- Consider memoization for expensive defaults

---

## 🏆 FINAL SUMMARY

### ✔ ES6 feature for default parameter values

### ✔ Triggered only by `undefined`

### ✔ Can use expressions and function calls

### ✔ Can reference earlier parameters

### ✔ Work with destructuring

### ✔ Evaluated at call time

### ✔ Use object pattern for many optionals

### ✔ Better than old `||` operator approach

### ✔ Don't count toward function.length

### ✔ Make APIs more flexible

---

## 🚀 Related Topics

- Function parameters
- Destructuring
- Rest parameters
- Arguments object
- Optional parameters
- Function calls
- ES6 features
- API design
