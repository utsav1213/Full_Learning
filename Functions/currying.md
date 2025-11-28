# 🚀 Currying

A **comprehensive guide** to currying in JavaScript — transforming functions with multiple arguments into a sequence of functions with single arguments.

---

## What is Currying?

**Currying** is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Named after mathematician Haskell Curry.

---

## 🌟 1. Basic Concept

### Normal function:

```js
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
```

### Curried function:

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6
```

### Arrow function syntax:

```js
const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // 6
```

---

## 🌟 2. Why Currying?

### Partial application:

```js
const add = (a) => (b) => (c) => a + b + c;

const add5 = add(5); // Partially applied
const add5and10 = add5(10); // More partially applied

console.log(add5and10(3)); // 18 (5 + 10 + 3)
console.log(add5(10)(3)); // 18
console.log(add(5)(10)(3)); // 18
```

### Function reuse:

```js
const multiply = (a) => (b) => a * b;

const double = multiply(2);
const triple = multiply(3);
const quadruple = multiply(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
```

---

## 🌟 3. Creating a Curry Function

### Simple curry for 2 arguments:

```js
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const add = (a, b) => a + b;
const curriedAdd = curry(add);

console.log(curriedAdd(5)(3)); // 8
```

### Generic curry function:

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
```

---

## 🌟 4. Practical Examples

### Greeting generator:

```js
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
const sayHi = greet("Hi");
const sayGoodMorning = greet("Good morning");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
console.log(sayGoodMorning("Bob")); // "Good morning, Bob!"
```

### Discount calculator:

```js
const applyDiscount = (discount) => (price) => price * (1 - discount / 100);

const apply10Percent = applyDiscount(10);
const apply20Percent = applyDiscount(20);
const apply50Percent = applyDiscount(50);

console.log(apply10Percent(100)); // 90
console.log(apply20Percent(100)); // 80
console.log(apply50Percent(100)); // 50
```

### URL builder:

```js
const buildUrl = (protocol) => (domain) => (path) =>
  `${protocol}://${domain}${path}`;

const https = buildUrl("https");
const httpsExample = https("example.com");

console.log(httpsExample("/api/users")); // "https://example.com/api/users"
console.log(httpsExample("/api/products")); // "https://example.com/api/products"
```

---

## 🌟 5. Currying with Array Methods

### Curried map:

```js
const map = (fn) => (array) => array.map(fn);

const double = (x) => x * 2;
const doubleAll = map(double);

console.log(doubleAll([1, 2, 3, 4])); // [2, 4, 6, 8]
```

### Curried filter:

```js
const filter = (predicate) => (array) => array.filter(predicate);

const isEven = (x) => x % 2 === 0;
const filterEvens = filter(isEven);

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

### Curried reduce:

```js
const reduce = (fn) => (initial) => (array) => array.reduce(fn, initial);

const sum = (a, b) => a + b;
const sumAll = reduce(sum)(0);

console.log(sumAll([1, 2, 3, 4, 5])); // 15
```

---

## 🌟 6. Composition with Currying

### Function composition:

```js
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const calculate = compose(square, double, addOne);

console.log(calculate(5)); // ((5 + 1) * 2) ^ 2 = 144
```

### Pipeline with currying:

```js
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const toLowerCase = (str) => str.toLowerCase();
const splitWords = (str) => str.split(" ");
const joinWithDash = (arr) => arr.join("-");

const slugify = pipe(toLowerCase, splitWords, joinWithDash);

console.log(slugify("Hello World Example")); // "hello-world-example"
```

---

## 🌟 7. Advanced Currying Patterns

### Currying with default values:

```js
const createLogger = (level) => (message) => (timestamp) =>
  `[${timestamp}] [${level}] ${message}`;

const error = createLogger("ERROR");
const warn = createLogger("WARN");
const info = createLogger("INFO");

const now = () => new Date().toISOString();

console.log(error("Something went wrong")(now()));
console.log(info("App started")(now()));
```

### Currying for validation:

```js
const validate = (rule) => (value) => rule(value);

const isRequired = (value) =>
  value !== "" && value !== null && value !== undefined;
const minLength = (min) => (value) => value.length >= min;
const maxLength = (max) => (value) => value.length <= max;
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateRequired = validate(isRequired);
const validateMinLength5 = validate(minLength(5));
const validateEmail = validate(isEmail);

console.log(validateRequired("test")); // true
console.log(validateMinLength5("test")); // false
console.log(validateEmail("test@test.com")); // true
```

---

## 🌟 8. Currying in Real-World Applications

### API request builder:

```js
const request = (method) => (url) => (headers) => (body) => {
  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
};

const get = request("GET");
const post = request("POST");
const put = request("PUT");

const getWithAuth = (url) =>
  get(url)({
    Authorization: "Bearer token",
  });

const postWithAuth = (url) =>
  post(url)({
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  });

// Usage
getWithAuth("/api/users")(null)
  .then((res) => res.json())
  .then((data) => console.log(data));

postWithAuth("/api/users")({ name: "John", age: 30 })
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Event handler creator:

```js
const on = (eventType) => (selector) => (handler) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener(eventType, handler);
  });
};

const onClick = on("click");
const onSubmit = on("submit");

const onButtonClick = onClick(".button");
const onFormSubmit = onSubmit("form");

onButtonClick((e) => console.log("Button clicked!"));
onFormSubmit((e) => {
  e.preventDefault();
  console.log("Form submitted!");
});
```

### Configuration builder:

```js
const createConfig = (env) => (apiUrl) => (timeout) => (cache) => ({
  environment: env,
  apiUrl,
  timeout,
  cache,
});

const development = createConfig("development");
const production = createConfig("production");

const devWithLocalApi = development("http://localhost:3000");
const prodWithRemoteApi = production("https://api.example.com");

const devConfig = devWithLocalApi(5000)(true);
const prodConfig = prodWithRemoteApi(3000)(true);

console.log(devConfig);
console.log(prodConfig);
```

---

## 🌟 9. Currying vs Partial Application

### Partial application:

```js
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 5);
console.log(add5(10, 3)); // 18

const add5and10 = partial(add, 5, 10);
console.log(add5and10(3)); // 18
```

### Currying:

```js
const add = (a) => (b) => (c) => a + b + c;

const add5 = add(5);
console.log(add5(10)(3)); // 18

const add5and10 = add(5)(10);
console.log(add5and10(3)); // 18
```

### Key difference:

- **Partial application**: Takes some arguments now, rest later (any number at once)
- **Currying**: Takes exactly one argument at a time

---

## 🌟 10. Currying in Functional Libraries

### Lodash curry:

```js
const _ = require("lodash");

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = _.curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

### Ramda (curried by default):

```js
const R = require("ramda");

const add = R.add; // Already curried
const add5 = add(5);

console.log(add5(3)); // 8
```

---

## 🌟 11. Debugging Curried Functions

### Problem: Hard to debug

```js
const add = (a) => (b) => (c) => a + b + c;

// Where's the error?
console.log(add(1)(2)(undefined)); // NaN
```

### Solution: Add logging:

```js
const add = (a) => {
  console.log("a:", a);
  return (b) => {
    console.log("b:", b);
    return (c) => {
      console.log("c:", c);
      return a + b + c;
    };
  };
};

console.log(add(1)(2)(undefined));
// a: 1
// b: 2
// c: undefined
// NaN
```

### Solution: Type checking:

```js
const add = (a) => {
  if (typeof a !== "number") {
    throw new TypeError(`Expected number, got ${typeof a}`);
  }
  return (b) => {
    if (typeof b !== "number") {
      throw new TypeError(`Expected number, got ${typeof b}`);
    }
    return (c) => {
      if (typeof c !== "number") {
        throw new TypeError(`Expected number, got ${typeof c}`);
      }
      return a + b + c;
    };
  };
};
```

---

## 🌟 12. Performance Considerations

### Memory:

```js
// Each curried function creates a closure
const add = (a) => (b) => (c) => a + b + c;

// Creates many intermediate functions
const add1 = add(1); // Function + closure
const add1and2 = add1(2); // Function + closure
const result = add1and2(3); // Final result

// vs regular function (single call)
function add(a, b, c) {
  return a + b + c;
}
const result = add(1, 2, 3); // One call, no closures
```

### When to use currying:

```js
// ✅ Good use case - frequently reused
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

// Used many times
const results = [1, 2, 3, 4, 5].map(double);

// ❌ Bad use case - used once
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // Just use regular function!
```

---

## 🌟 13. Best Practices

### ✅ Use currying for reusable utilities:

```js
const hasProperty = (prop) => (obj) => obj.hasOwnProperty(prop);

const hasName = hasProperty("name");
const hasAge = hasProperty("age");

const users = [{ name: "John" }, { name: "Jane", age: 30 }, { age: 25 }];

console.log(users.filter(hasName)); // First two users
```

### ✅ Use arrow functions for concise syntax:

```js
const multiply = (a) => (b) => a * b;
```

### ✅ Name intermediate functions:

```js
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello"); // Named for clarity
console.log(sayHello("John"));
```

### ❌ Don't overcomplicate:

```js
// ❌ Unnecessary currying
const add = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

// ✅ Just use a regular function
function add(a, b, c, d, e) {
  return a + b + c + d + e;
}
```

---

## 🧠 Deep CS Understanding

### Lambda Calculus:

- Currying rooted in lambda calculus
- Every multi-argument function can be transformed
- Enables functional composition
- Basis of functional programming languages

### Closures:

- Currying relies heavily on closures
- Each step creates a new closure
- Captures variables from outer scope
- Keeps state across function calls

### Type Systems:

- Easier to type in typed languages (TypeScript, Haskell)
- Each step has clear input/output types
- Enables better type inference
- Safer refactoring

### Performance:

- Creates intermediate functions
- More memory usage than regular functions
- Modern engines optimize closures
- Trade-off: readability vs performance

---

## 🏆 FINAL SUMMARY

### ✔ Transform multi-argument functions to single-argument chains

### ✔ Enables partial application

### ✔ Promotes function reuse

### ✔ Fundamental to functional programming

### ✔ Improves composability

### ✔ Creates specialized functions

### ✔ Relies on closures

### ✔ Arrow functions make it concise

### ✔ Use when benefits outweigh complexity

### ✔ Powerful for building abstractions

---

## 🚀 Related Topics

- Closures
- Partial application
- Function composition
- Higher-order functions
- Functional programming
- Arrow functions
- Lambda calculus
- Pure functions
