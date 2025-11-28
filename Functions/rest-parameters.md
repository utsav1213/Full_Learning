# 🚀 Rest Parameters

A **comprehensive guide** to rest parameters in JavaScript — gathering remaining arguments into an array.

---

## What are Rest Parameters?

**Rest parameters** allow a function to accept an indefinite number of arguments as an array. The rest parameter syntax (`...`) collects all remaining arguments into a real array.

---

## 🌟 1. Basic Syntax

### Simple rest parameter:

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0
```

### Rest parameter is a real array:

```js
function test(...args) {
  console.log(Array.isArray(args)); // true
  console.log(args.length);

  // Can use array methods
  args.forEach((arg) => console.log(arg));
  args.map((arg) => arg * 2);
  args.filter((arg) => arg > 0);
}

test(1, 2, 3, 4);
```

---

## 🌟 2. Rest vs Arguments Object

### Arguments object (old way):

```js
function sum() {
  console.log(arguments); // Array-like, not real array
  console.log(Array.isArray(arguments)); // false

  // Convert to array first
  const args = Array.from(arguments);
  return args.reduce((total, num) => total + num, 0);
}
```

### Rest parameters (modern way):

```js
function sum(...numbers) {
  console.log(numbers); // Real array!
  console.log(Array.isArray(numbers)); // true

  // Use array methods directly
  return numbers.reduce((total, num) => total + num, 0);
}
```

### Key differences:

| Feature         | arguments             | Rest Parameters |
| --------------- | --------------------- | --------------- |
| Type            | Array-like object     | Real array      |
| Arrow functions | ❌ Not available      | ✅ Available    |
| Array methods   | ❌ Need conversion    | ✅ Direct use   |
| Named           | ❌ Always `arguments` | ✅ Any name     |
| Modern          | ❌ Legacy             | ✅ ES6+         |

---

## 🌟 3. Rest with Other Parameters

### Must be last parameter:

```js
function greet(greeting, ...names) {
  return `${greeting}, ${names.join(" and ")}!`;
}

console.log(greet("Hello", "John")); // "Hello, John!"
console.log(greet("Hi", "Jane", "Bob")); // "Hi, Jane and Bob!"
console.log(greet("Hey", "Alice", "Bob", "Charlie")); // "Hey, Alice and Bob and Charlie!"
```

### Multiple regular parameters:

```js
function multiply(factor, ...numbers) {
  return numbers.map((num) => num * factor);
}

console.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]
console.log(multiply(3, 5, 10)); // [15, 30]
```

### Error if not last:

```js
// ❌ SyntaxError: Rest parameter must be last
// function test(...rest, last) {}

// ❌ Can't have multiple rest parameters
// function test(...rest1, ...rest2) {}

// ✅ Correct
function test(first, second, ...rest) {}
```

---

## 🌟 4. Common Use Cases

### Variable number of arguments:

```js
function max(...numbers) {
  if (numbers.length === 0) {
    return -Infinity;
  }
  return Math.max(...numbers);
}

console.log(max(1, 5, 3, 9, 2)); // 9
console.log(max(10, 20)); // 20
```

### String concatenation:

```js
function concat(...strings) {
  return strings.join(" ");
}

console.log(concat("Hello", "World")); // "Hello World"
console.log(concat("JavaScript", "is", "awesome")); // "JavaScript is awesome"
```

### Array operations:

```js
function merge(...arrays) {
  return arrays.flat();
}

console.log(merge([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
```

---

## 🌟 5. Rest Parameters with Destructuring

### Array destructuring:

```js
function process([first, second, ...rest]) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

process([1, 2, 3, 4, 5]);
// First: 1
// Second: 2
// Rest: [3, 4, 5]
```

### Object destructuring:

```js
function createUser({ name, age, ...otherInfo }) {
  return {
    name,
    age,
    metadata: otherInfo,
  };
}

const user = createUser({
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "555-1234",
  address: "123 Main St",
});

console.log(user);
// {
//   name: "John",
//   age: 30,
//   metadata: {
//     email: "john@example.com",
//     phone: "555-1234",
//     address: "123 Main St"
//   }
// }
```

---

## 🌟 6. Rest in Arrow Functions

### Arrow functions support rest parameters:

```js
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Arrow functions don't have `arguments`:

```js
// ❌ Arrow functions don't have arguments object
const test = () => {
  // console.log(arguments); // ReferenceError
};

// ✅ Use rest parameters instead
const test2 = (...args) => {
  console.log(args); // Works!
};
```

---

## 🌟 7. Practical Examples

### Logger function:

```js
function log(level, message, ...meta) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`, ...meta);
}

log("INFO", "App started", { port: 3000 });
log("ERROR", "Failed to connect", { error: "ECONNREFUSED", retries: 3 });
```

### API request builder:

```js
function createQuery(baseUrl, ...pathSegments) {
  const path = pathSegments.filter(Boolean).join("/");
  return `${baseUrl}/${path}`;
}

console.log(createQuery("https://api.example.com", "users", "123", "posts"));
// "https://api.example.com/users/123/posts"
```

### Event emitter:

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(...args);
      });
    }
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
}

const emitter = new EventEmitter();

emitter.on("data", (data, source, timestamp) => {
  console.log(`Data from ${source} at ${timestamp}:`, data);
});

emitter.emit("data", { value: 42 }, "sensor1", Date.now());
```

---

## 🌟 8. Rest vs Spread

### Rest (gather):

```js
// Gathers arguments into array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### Spread (expand):

```js
// Expands array into arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3
```

### Both in one function:

```js
function merge(first, ...rest) {
  return [first, ...rest.flat()];
}

console.log(merge(0, [1, 2], [3, 4])); // [0, 1, 2, 3, 4]
```

---

## 🌟 9. Validation with Rest Parameters

### Type checking:

```js
function multiply(factor, ...numbers) {
  if (typeof factor !== "number") {
    throw new TypeError("Factor must be a number");
  }

  if (!numbers.every((n) => typeof n === "number")) {
    throw new TypeError("All arguments must be numbers");
  }

  return numbers.map((n) => n * factor);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
// multiply("2", 1, 2); // TypeError
```

### Minimum arguments:

```js
function atLeastTwo(first, second, ...rest) {
  if (arguments.length < 2) {
    throw new Error("At least 2 arguments required");
  }

  return [first, second, ...rest];
}

console.log(atLeastTwo(1, 2)); // [1, 2]
console.log(atLeastTwo(1, 2, 3, 4)); // [1, 2, 3, 4]
// atLeastTwo(1); // Error
```

---

## 🌟 10. Performance Considerations

### Memory allocation:

```js
// Creates new array every call
function process(...args) {
  // args is a new array
  return args.map((x) => x * 2);
}

// More efficient for few arguments
function process(a, b, c) {
  return [a * 2, b * 2, c * 2];
}
```

### Large number of arguments:

```js
// Efficient for many arguments
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// Better than accessing arguments[i] repeatedly
```

---

## 🌟 11. Real-World Patterns

### Flexible function signatures:

```js
function ajax(url, options = {}, ...callbacks) {
  return fetch(url, options)
    .then((response) => {
      callbacks.forEach((cb) => cb(null, response));
      return response.json();
    })
    .catch((error) => {
      callbacks.forEach((cb) => cb(error));
    });
}

ajax(
  "/api/users",
  {},
  (err, res) => console.log("Callback 1", err, res),
  (err, res) => console.log("Callback 2", err, res)
);
```

### Tagged template literals:

```js
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<mark>${values[i]}</mark>` : "");
  }, "");
}

const name = "John";
const age = 30;

console.log(highlight`Name: ${name}, Age: ${age}`);
// "Name: <mark>John</mark>, Age: <mark>30</mark>"
```

### Compose/pipe functions:

```js
function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((value, fn) => fn(value), initialValue);
  };
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const calculate = compose(square, double, addOne);

console.log(calculate(5)); // ((5 + 1) * 2) ^ 2 = 144
```

---

## 🌟 12. Combining with Other Features

### With default parameters:

```js
function createList(title = "Untitled", ...items) {
  return {
    title,
    items,
    count: items.length,
  };
}

console.log(createList("Shopping", "Milk", "Eggs", "Bread"));
// { title: "Shopping", items: ["Milk", "Eggs", "Bread"], count: 3 }

console.log(createList(undefined, "Item 1", "Item 2"));
// { title: "Untitled", items: ["Item 1", "Item 2"], count: 2 }
```

### With destructuring and defaults:

```js
function connect(host, { port = 80, secure = false } = {}, ...middleware) {
  return {
    host,
    port,
    secure,
    middleware,
  };
}

const config = connect(
  "localhost",
  { port: 3000 },
  authMiddleware,
  loggingMiddleware
);
```

---

## 🌟 13. Best Practices

### ✅ Use for variable arguments:

```js
function max(...numbers) {
  return Math.max(...numbers);
}
```

### ✅ Name descriptively:

```js
// ✅ Clear what it represents
function sendEmail(to, subject, ...attachments) {}

// ❌ Generic name
function sendEmail(to, subject, ...args) {}
```

### ✅ Validate when necessary:

```js
function sum(...numbers) {
  if (!numbers.every((n) => typeof n === "number")) {
    throw new TypeError("All arguments must be numbers");
  }
  return numbers.reduce((a, b) => a + b, 0);
}
```

### ✅ Always place last:

```js
// ✅ Correct
function test(a, b, ...rest) {}

// ❌ Wrong
// function test(...rest, a) {}
```

---

## 🧠 Deep CS Understanding

### Array Creation:

- Rest parameter creates new array
- Array allocated in memory
- Contains references to arguments
- Eligible for garbage collection after function returns

### Performance:

- Slight overhead vs fixed parameters
- Array creation cost
- Modern engines optimize well
- Negligible for most use cases

### Variadic Functions:

- Rest parameters enable variadic functions
- Functions that accept variable number of arguments
- Common in functional programming
- More flexible than fixed arity

### Type Systems:

- TypeScript can type rest parameters
- Enables type-safe variadic functions
- Better autocomplete and checking
- Example: `function sum(...numbers: number[])`

---

## 🏆 FINAL SUMMARY

### ✔ Collects remaining arguments into array

### ✔ Real array, not array-like object

### ✔ Must be last parameter

### ✔ Works in arrow functions

### ✔ Can be named anything

### ✔ Better than `arguments` object

### ✔ Enables variable argument functions

### ✔ Commonly combined with spread

### ✔ Essential for modern JavaScript

### ✔ Very flexible and powerful

---

## 🚀 Related Topics

- Spread operator
- Arguments object
- Default parameters
- Destructuring
- Arrow functions
- Array methods
- Variadic functions
- Function parameters
