# 🚀 Higher-Order Functions

A **comprehensive guide** to higher-order functions in JavaScript — functions that operate on other functions.

---

## What is a Higher-Order Function?

A **higher-order function** is a function that either:

1. Takes one or more functions as arguments (callbacks), OR
2. Returns a function as its result

This is a fundamental concept in functional programming.

---

## 🌟 1. Basic Concept

### Functions as first-class citizens:

In JavaScript, functions are values that can be:

- Assigned to variables
- Passed as arguments
- Returned from functions
- Stored in data structures

```js
// Function as value
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Function as argument
function callFunction(fn, arg) {
  return fn(arg);
}

console.log(callFunction(greet, "John")); // "Hello, John!"
```

---

## 🌟 2. Functions That Accept Functions

### Simple example:

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, (i) => {
  console.log(`Iteration ${i}`);
});
// Iteration 0
// Iteration 1
// Iteration 2
```

### Execute operation:

```js
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(executeOperation(add, 5, 3)); // 8
console.log(executeOperation(multiply, 5, 3)); // 15
```

---

## 🌟 3. Functions That Return Functions

### Basic example:

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Greeting generator:

```js
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
```

---

## 🌟 4. Built-in Higher-Order Functions

### Array.prototype.map():

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

// Arrow function
const tripled = numbers.map((num) => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]
```

### Array.prototype.filter():

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4, 6]
```

### Array.prototype.reduce():

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum); // 15
```

### Array.prototype.forEach():

```js
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});
```

### Array.prototype.find():

```js
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const user = users.find(function (user) {
  return user.id === 2;
});

console.log(user); // { id: 2, name: "Jane" }
```

---

## 🌟 5. Creating Custom Higher-Order Functions

### Custom map:

```js
function myMap(array, transform) {
  const result = [];
  for (const element of array) {
    result.push(transform(element));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = myMap(numbers, (num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

### Custom filter:

```js
function myFilter(array, test) {
  const result = [];
  for (const element of array) {
    if (test(element)) {
      result.push(element);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = myFilter(numbers, (num) => num % 2 === 0);

console.log(evens); // [2, 4, 6]
```

### Custom reduce:

```js
function myReduce(array, combine, start) {
  let current = start;
  for (const element of array) {
    current = combine(current, element);
  }
  return current;
}

const numbers = [1, 2, 3, 4, 5];
const sum = myReduce(numbers, (a, b) => a + b, 0);

console.log(sum); // 15
```

---

## 🌟 6. Function Composition

### Compose two functions:

```js
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;

const addOneThenDouble = compose(double, addOne);

console.log(addOneThenDouble(5)); // 12 (5 + 1 = 6, 6 * 2 = 12)
```

### Compose multiple functions:

```js
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const calculate = compose(square, double, addOne);

console.log(calculate(3)); // 64
// (3 + 1 = 4, 4 * 2 = 8, 8 * 8 = 64)
```

### Pipe (left-to-right composition):

```js
function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

const calculate = pipe(addOne, double, square);

console.log(calculate(3)); // 64
// Same result, but reads left-to-right
```

---

## 🌟 7. Currying with Higher-Order Functions

### Basic currying:

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

const add5 = curriedAdd(5);
console.log(add5(3)); // 8
console.log(add5(7)); // 12
```

### Generic curry:

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

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```

---

## 🌟 8. Practical Examples

### Debounce:

```js
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");

const handleSearch = debounce((event) => {
  console.log("Searching:", event.target.value);
}, 500);

searchInput.addEventListener("input", handleSearch);
```

### Throttle:

```js
function throttle(fn, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

### Memoization:

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("From cache");
      return cache[key];
    }

    console.log("Calculating...");
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

const expensiveOperation = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

const memoized = memoize(expensiveOperation);

console.log(memoized(1000000)); // Calculating...
console.log(memoized(1000000)); // From cache
```

### Once (execute only once):

```js
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

const initialize = once(() => {
  console.log("Initializing...");
  return { initialized: true };
});

console.log(initialize()); // Logs "Initializing..."
console.log(initialize()); // Returns cached result
console.log(initialize()); // Returns cached result
```

---

## 🌟 9. Array Transformation Chains

### Chaining operations:

```js
const users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 35, active: true },
  { name: "Alice", age: 28, active: true },
];

const result = users
  .filter((user) => user.active)
  .map((user) => user.name)
  .sort();

console.log(result); // ["Alice", "Bob", "John"]
```

### Complex transformation:

```js
const orders = [
  { id: 1, items: [{ price: 10 }, { price: 20 }] },
  { id: 2, items: [{ price: 15 }] },
  { id: 3, items: [{ price: 25 }, { price: 30 }] },
];

const totalRevenue = orders
  .map((order) => order.items.reduce((sum, item) => sum + item.price, 0))
  .reduce((total, orderTotal) => total + orderTotal, 0);

console.log(totalRevenue); // 100
```

---

## 🌟 10. Functional Programming Patterns

### Partial application:

```js
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHello("Jane")); // "Hello, Jane!"
```

### Function binding:

```js
function bind(fn, context) {
  return function (...args) {
    return fn.apply(context, args);
  };
}

const person = {
  name: "John",
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

const boundGreet = bind(person.greet, person);

console.log(boundGreet()); // "Hello, I'm John"
```

---

## 🌟 11. Real-World Use Cases

### Event handling factory:

```js
function createEventHandler(eventType, callback) {
  return function (element) {
    element.addEventListener(eventType, callback);
  };
}

const addClickHandler = createEventHandler("click", () => {
  console.log("Clicked!");
});

addClickHandler(document.getElementById("btn1"));
addClickHandler(document.getElementById("btn2"));
```

### Validation pipeline:

```js
function validate(...validators) {
  return function (value) {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return null;
  };
}

const required = (value) => (!value ? "Required" : null);
const minLength = (min) => (value) =>
  value.length < min ? `Min length ${min}` : null;
const email = (value) => (!value.includes("@") ? "Invalid email" : null);

const validateEmail = validate(required, minLength(5), email);

console.log(validateEmail("")); // "Required"
console.log(validateEmail("abc")); // "Min length 5"
console.log(validateEmail("abcde")); // "Invalid email"
console.log(validateEmail("a@example.com")); // null (valid)
```

### API request builder:

```js
function createApiCaller(baseUrl) {
  return function (endpoint) {
    return function (options = {}) {
      return fetch(`${baseUrl}${endpoint}`, options);
    };
  };
}

const api = createApiCaller("https://api.example.com");
const getUsers = api("/users");
const getPosts = api("/posts");

getUsers({ method: "GET" })
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## 🌟 12. Best Practices

### ✅ Keep functions pure:

```js
// ✅ Pure function
const double = (x) => x * 2;

// ❌ Impure function (modifies external state)
let counter = 0;
const incrementCounter = () => counter++;
```

### ✅ Use descriptive names:

```js
// ✅ Clear intent
const filterActiveUsers = (users) => users.filter((u) => u.active);

// ❌ Unclear
const f = (u) => u.filter((x) => x.a);
```

### ✅ Compose small functions:

```js
const isEven = (n) => n % 2 === 0;
const double = (n) => n * 2;
const square = (n) => n * n;

const result = [1, 2, 3, 4, 5].filter(isEven).map(double).map(square);
```

---

## 🧠 Deep CS Understanding

### First-Class Functions:

- Functions are objects in JavaScript
- Can be assigned, passed, returned
- Enable functional programming paradigm
- Foundation for higher-order functions

### Closures:

- Returned functions capture lexical scope
- Can access outer function variables
- Create private state
- Enable powerful patterns like memoization

### Function Composition:

- Combine simple functions into complex ones
- Promotes code reuse
- Makes code more declarative
- Reduces coupling

### Performance:

- Higher-order functions have minimal overhead
- JIT optimizations apply
- Composition can be optimized by compilers
- Functional style often clearer than imperative

---

## 🏆 FINAL SUMMARY

### ✔ Functions that operate on other functions

### ✔ Accept functions as arguments

### ✔ Return functions as results

### ✔ Enable functional programming

### ✔ Built-in: map, filter, reduce, etc.

### ✔ Enable function composition

### ✔ Support currying and partial application

### ✔ Create powerful abstractions

### ✔ Promote code reuse

### ✔ Fundamental to modern JavaScript

---

## 🚀 Related Topics

- Closures
- Callbacks
- Currying
- Function composition
- Functional programming
- Array methods
- Pure functions
- First-class functions
