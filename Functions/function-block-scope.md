# 🚀 Function and Block Scope

A **comprehensive guide** to understanding scopes in JavaScript — where variables are accessible and how they behave.

---

## What is Scope?

**Scope** determines the accessibility and visibility of variables, functions, and objects in your code. JavaScript has multiple types of scope: **global scope**, **function scope**, and **block scope**.

---

## 🌟 1. Global Scope

### Variables declared outside functions:

```js
// Global scope
const globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}

test(); // "I'm global"
console.log(globalVar); // "I'm global"
```

### Problems with global scope:

```js
// Pollution
var name = "John";

function setName() {
  name = "Jane"; // Modifies global
}

setName();
console.log(name); // "Jane" (unexpected!)
```

---

## 🌟 2. Function Scope

### Variables declared inside functions:

```js
function test() {
  // Function scope
  const localVar = "I'm local";
  console.log(localVar); // Works
}

test();
// console.log(localVar); // ReferenceError!
```

### var is function-scoped:

```js
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside if block!)
}

test();
```

### Each function creates new scope:

```js
function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }

  inner();
  // console.log(innerVar); // ReferenceError!
}

outer();
```

---

## 🌟 3. Block Scope

### let and const are block-scoped:

```js
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // 10 20
}

// console.log(x); // ReferenceError!
// console.log(y); // ReferenceError!
```

### Curly braces create blocks:

```js
{
  let blockScoped = "inside block";
  console.log(blockScoped); // Works
}

// console.log(blockScoped); // ReferenceError!
```

### Loops have block scope:

```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// console.log(i); // ReferenceError!
```

---

## 🌟 4. var vs let vs const

### Comparison table:

| Feature        | var             | let             | const           |
| -------------- | --------------- | --------------- | --------------- |
| Scope          | Function        | Block           | Block           |
| Hoisting       | Yes (undefined) | Yes (TDZ)       | Yes (TDZ)       |
| Re-declaration | ✅ Allowed      | ❌ Error        | ❌ Error        |
| Re-assignment  | ✅ Allowed      | ✅ Allowed      | ❌ Error        |
| Global object  | ✅ Property     | ❌ Not property | ❌ Not property |

### var behavior:

```js
function test() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  console.log(x); // 10

  var x = 20; // Re-declaration allowed
  console.log(x); // 20
}
```

### let behavior:

```js
function test() {
  // console.log(x); // ReferenceError (TDZ)
  let x = 10;
  console.log(x); // 10

  // let x = 20; // SyntaxError (no re-declaration)
  x = 20; // Re-assignment allowed
  console.log(x); // 20
}
```

### const behavior:

```js
function test() {
  // console.log(x); // ReferenceError (TDZ)
  const x = 10;
  console.log(x); // 10

  // const x = 20; // SyntaxError (no re-declaration)
  // x = 20; // TypeError (no re-assignment)
}
```

---

## 🌟 5. Hoisting

### var hoisting:

```js
console.log(x); // undefined
var x = 10;

// Interpreted as:
// var x;
// console.log(x);
// x = 10;
```

### let/const hoisting (TDZ):

```js
// Temporal Dead Zone starts
// console.log(x); // ReferenceError
let x = 10;
// Temporal Dead Zone ends
console.log(x); // 10
```

### Function hoisting:

```js
// Function declarations are fully hoisted
greet(); // "Hello!" (works before declaration)

function greet() {
  console.log("Hello!");
}
```

### Function expressions not hoisted:

```js
// greet(); // TypeError: greet is not a function

const greet = function () {
  console.log("Hello!");
};

greet(); // Works here
```

---

## 🌟 6. Lexical Scope (Static Scope)

### Functions use outer scope:

```js
const global = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";

    // Can access all outer scopes
    console.log(global); // "global"
    console.log(outerVar); // "outer"
    console.log(innerVar); // "inner"
  }

  inner();
}

outer();
```

### Defined at write-time, not runtime:

```js
const x = "global";

function outer() {
  const x = "outer";

  function inner() {
    console.log(x); // "outer" (looks at definition scope)
  }

  return inner;
}

const x = "another global";
const fn = outer();
fn(); // "outer" (not "another global")
```

---

## 🌟 7. Scope Chain

### Variable lookup:

```js
const level1 = "level 1";

function outer() {
  const level2 = "level 2";

  function middle() {
    const level3 = "level 3";

    function inner() {
      const level4 = "level 4";

      // Looks up scope chain
      console.log(level4); // Found in inner
      console.log(level3); // Found in middle
      console.log(level2); // Found in outer
      console.log(level1); // Found in global
    }

    inner();
  }

  middle();
}

outer();
```

### Shadowing:

```js
const x = "global";

function test() {
  const x = "function"; // Shadows global

  {
    const x = "block"; // Shadows function
    console.log(x); // "block"
  }

  console.log(x); // "function"
}

test();
console.log(x); // "global"
```

---

## 🌟 8. Closures and Scope

### Functions remember their scope:

```js
function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Module pattern:

```js
const module = (function () {
  // Private
  let privateVar = "secret";

  function privateFunction() {
    console.log("Private");
  }

  // Public
  return {
    publicVar: "public",
    publicFunction() {
      console.log(privateVar);
      privateFunction();
    },
  };
})();

console.log(module.publicVar); // "public"
module.publicFunction(); // "secret" "Private"
// console.log(module.privateVar); // undefined
```

---

## 🌟 9. Loop Scope Issues

### Classic var problem:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3, 3, 3 (not 0, 1, 2!)
  }, 100);
}
```

### Solution with let:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2 (each iteration has own i)
  }, 100);
}
```

### IIFE solution (old way):

```js
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); // 0, 1, 2
    }, 100);
  })(i);
}
```

---

## 🌟 10. Practical Examples

### Private variables:

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        throw new Error("Insufficient funds");
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
// console.log(account.balance); // undefined (private!)
```

### Configuration object:

```js
const config = (function () {
  // Private config
  const settings = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };

  return {
    get(key) {
      return settings[key];
    },
    set(key, value) {
      if (key in settings) {
        settings[key] = value;
      } else {
        throw new Error("Invalid setting");
      }
    },
  };
})();

console.log(config.get("apiUrl")); // "https://api.example.com"
config.set("timeout", 10000);
```

---

## 🌟 11. Block Scope Benefits

### Loop variables:

```js
// ❌ var leaks
for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i); // 3 (leaked!)

// ✅ let contained
for (let j = 0; j < 3; j++) {
  // ...
}
// console.log(j); // ReferenceError
```

### Temporal Dead Zone protection:

```js
// ❌ var allows usage before declaration
console.log(x); // undefined
var x = 10;

// ✅ let/const throw error
// console.log(y); // ReferenceError
let y = 20;
```

### No accidental globals:

```js
function test() {
  // ❌ Typo creates global
  name = "John"; // No var/let/const
}

test();
console.log(name); // "John" (global!)

// ✅ Strict mode prevents this
("use strict");

function test() {
  // name = "John"; // ReferenceError
  let name = "John"; // Must declare
}
```

---

## 🌟 12. Best Practices

### ✅ Use const by default:

```js
const PI = 3.14159;
const user = { name: "John" };

// Use let only when reassignment needed
let counter = 0;
counter++;
```

### ✅ Minimize global variables:

```js
// ❌ Bad
var globalCounter = 0;
var globalName = "App";

// ✅ Good
const app = {
  counter: 0,
  name: "App",
};
```

### ✅ Use block scope for temporary variables:

```js
function process(data) {
  // Temporary validation
  {
    const isValid = data && data.length > 0;
    if (!isValid) return;
  }

  // isValid not accessible here
  // Process data...
}
```

### ✅ Avoid var in modern code:

```js
// ❌ Old way
function test() {
  var x = 10;
}

// ✅ Modern way
function test() {
  const x = 10;
}
```

---

## 🌟 13. Common Pitfalls

### Forgetting to declare:

```js
function test() {
  x = 10; // Creates global!
}

test();
console.log(x); // 10 (global pollution)
```

### var in loops:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3
```

### Accessing before declaration:

```js
function test() {
  console.log(x); // ReferenceError (TDZ)
  let x = 10;
}
```

---

## 🌟 14. Module Scope (ES6 Modules)

### Each module has its own scope:

```js
// math.js
const PI = 3.14159; // Private to module

export function area(r) {
  return PI * r * r;
}

// main.js
import { area } from "./math.js";
console.log(area(5));
// console.log(PI); // ReferenceError (not exported)
```

### Top-level await:

```js
// ES2022+
const data = await fetch("/api/data");
const json = await data.json();

// Still module-scoped
export const result = json;
```

---

## 🧠 Deep CS Understanding

### Lexical environment:

- Created when function is called
- Contains local variables and references
- Linked to outer environment (scope chain)
- Garbage collected when no longer referenced

### Variable resolution:

- Identifier lookup in current scope
- If not found, check outer scope
- Continue up scope chain
- ReferenceError if not found

### Memory:

- Variables stored in activation object
- Closures keep references to outer scope
- Can cause memory leaks if not careful
- GC collects unreferenced variables

### Execution context:

- Global execution context (created once)
- Function execution context (per call)
- Contains variable environment
- Contains scope chain reference

---

## 🏆 FINAL SUMMARY

### ✔ Three main scopes: global, function, block

### ✔ var is function-scoped (legacy)

### ✔ let and const are block-scoped (modern)

### ✔ Hoisting affects all declarations

### ✔ Temporal Dead Zone protects let/const

### ✔ Lexical scope determined at write-time

### ✔ Scope chain enables variable lookup

### ✔ Closures capture outer scope

### ✔ Use const by default, let when needed

### ✔ Avoid var and global variables

---

## 🚀 Related Topics

- Closures
- Hoisting
- Temporal Dead Zone
- var, let, const
- Execution context
- this keyword
- ES6 modules
- Strict mode
