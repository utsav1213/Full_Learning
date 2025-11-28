# 🚀 Call, Apply, and Bind

A **comprehensive guide** to explicit function binding methods in JavaScript — controlling the `this` context.

---

## What are Call, Apply, and Bind?

**Call**, **apply**, and **bind** are methods that allow you to explicitly set the `this` context of a function. They give you control over what `this` refers to when a function is executed.

---

## 🌟 1. Function.prototype.call()

### Basic syntax:

```js
function.call(thisArg, arg1, arg2, ...)
```

### Simple example:

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "John" };

greet.call(person); // "Hello, John!"
```

### With arguments:

```js
function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}

const person = { name: "Alice" };

introduce.call(person, 25, "New York");
// "I'm Alice, 25 years old, from New York"
```

---

## 🌟 2. Function.prototype.apply()

### Basic syntax:

```js
function.apply(thisArg, [argsArray])
```

### Simple example:

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "John" };

greet.apply(person); // "Hello, John!"
```

### With arguments array:

```js
function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}

const person = { name: "Alice" };
const args = [25, "New York"];

introduce.apply(person, args);
// "I'm Alice, 25 years old, from New York"
```

---

## 🌟 3. Function.prototype.bind()

### Basic syntax:

```js
const boundFunction = function.bind(thisArg, arg1, arg2, ...)
```

### Simple example:

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "John" };

const boundGreet = greet.bind(person);
boundGreet(); // "Hello, John!"
```

### With arguments:

```js
function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}

const person = { name: "Alice" };

const boundIntroduce = introduce.bind(person, 25);
boundIntroduce("New York");
// "I'm Alice, 25 years old, from New York"
```

---

## 🌟 4. Differences Between Call, Apply, and Bind

### Comparison table:

| Feature             | call()         | apply()    | bind()         |
| ------------------- | -------------- | ---------- | -------------- |
| Invokes immediately | ✅ Yes         | ✅ Yes     | ❌ No          |
| Returns             | Result         | Result     | New function   |
| Arguments           | Individual     | Array      | Individual     |
| Use case            | Immediate call | Array args | Save for later |

### Side by side:

```js
function sum(a, b, c) {
  console.log(this.prefix, a + b + c);
}

const obj = { prefix: "Total:" };

// call - immediate, individual args
sum.call(obj, 1, 2, 3); // "Total: 6"

// apply - immediate, array args
sum.apply(obj, [1, 2, 3]); // "Total: 6"

// bind - returns function, can call later
const boundSum = sum.bind(obj, 1, 2, 3);
boundSum(); // "Total: 6"
```

---

## 🌟 5. Borrowing Methods

### Array methods on array-like objects:

```js
function test() {
  // arguments is array-like, not real array
  console.log(typeof arguments.map); // undefined

  // Borrow Array methods
  const args = Array.prototype.slice.call(arguments);
  console.log(args); // Real array now!

  // Or with apply
  const doubled = Array.prototype.map.call(arguments, (x) => x * 2);
  console.log(doubled);
}

test(1, 2, 3);
// [1, 2, 3]
// [2, 4, 6]
```

### Object method borrowing:

```js
const person1 = {
  name: "John",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const person2 = { name: "Jane" };

// Borrow greet method
person1.greet.call(person2); // "Hello, I'm Jane"
```

---

## 🌟 6. Finding Max/Min

### Using apply with Math:

```js
const numbers = [5, 6, 2, 3, 7];

// apply spreads array as arguments
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 7
console.log(min); // 2
```

### Modern alternative with spread:

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(max); // 7
console.log(min); // 2
```

---

## 🌟 7. Event Handlers

### Problem with this in callbacks:

```js
const button = {
  text: "Click me",
  click() {
    console.log(this.text);
  },
};

// ❌ Loses context
document.getElementById("btn").addEventListener("click", button.click);
// undefined (this is the button element)
```

### Solution with bind:

```js
const button = {
  text: "Click me",
  click() {
    console.log(this.text);
  },
};

// ✅ Preserves context
document
  .getElementById("btn")
  .addEventListener("click", button.click.bind(button));
// "Click me"
```

---

## 🌟 8. Partial Application

### Pre-filling arguments with bind:

```js
function multiply(a, b) {
  return a * b;
}

// Create specialized functions
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Logger example:

```js
function log(level, message) {
  console.log(`[${level}] ${message}`);
}

const info = log.bind(null, "INFO");
const error = log.bind(null, "ERROR");

info("Application started"); // "[INFO] Application started"
error("Something went wrong"); // "[ERROR] Something went wrong"
```

---

## 🌟 9. Constructor Functions

### Using call for inheritance:

```js
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  // Call parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name); // "Buddy"
console.log(dog.breed); // "Golden Retriever"
```

### Multiple inheritance pattern:

```js
function CanEat() {
  this.eat = function () {
    console.log("Eating...");
  };
}

function CanWalk() {
  this.walk = function () {
    console.log("Walking...");
  };
}

function Person(name) {
  this.name = name;
  CanEat.call(this);
  CanWalk.call(this);
}

const person = new Person("John");
person.eat(); // "Eating..."
person.walk(); // "Walking..."
```

---

## 🌟 10. Method Chaining

### Preserving this with call:

```js
function Calculator() {
  this.value = 0;
}

Calculator.prototype.add = function (n) {
  this.value += n;
  return this;
};

Calculator.prototype.multiply = function (n) {
  this.value *= n;
  return this;
};

const calc = new Calculator();
calc.add(5).multiply(2);
console.log(calc.value); // 10
```

---

## 🌟 11. Practical Examples

### Debounce function:

```js
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const input = {
  handleInput(event) {
    console.log(this, event.target.value);
  },
};

const debouncedHandler = debounce(input.handleInput.bind(input), 300);
```

### Function composition:

```js
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => {
      return fn.call(this, acc);
    }, value);
  };
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(5)); // 12
```

---

## 🌟 12. Converting Array-Like to Array

### Old way with call:

```js
function test() {
  const args = Array.prototype.slice.call(arguments);
  console.log(Array.isArray(args)); // true
}

test(1, 2, 3);
```

### Modern alternatives:

```js
function test() {
  // Array.from
  const args1 = Array.from(arguments);

  // Spread operator
  const args2 = [...arguments];

  // Rest parameters
  function test2(...args3) {
    console.log(args3);
  }
}
```

---

## 🌟 13. Explicit vs Implicit Binding

### Implicit binding:

```js
const person = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // "Hello, John" (this = person)
```

### Explicit binding with call/apply/bind:

```js
const person1 = { name: "John" };
const person2 = { name: "Jane" };

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet.call(person1); // "Hello, John"
greet.call(person2); // "Hello, Jane"
```

### Explicit overrides implicit:

```js
const obj1 = {
  name: "Object 1",
  greet() {
    console.log(this.name);
  },
};

const obj2 = { name: "Object 2" };

obj1.greet(); // "Object 1" (implicit)
obj1.greet.call(obj2); // "Object 2" (explicit wins)
```

---

## 🌟 14. Common Pitfalls

### Losing context:

```js
const user = {
  name: "John",
  greet() {
    console.log(this.name);
  },
};

const greet = user.greet;
greet(); // undefined (lost context)

// Fix with bind
const boundGreet = user.greet.bind(user);
boundGreet(); // "John"
```

### Binding arrow functions:

```js
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet(); // undefined (arrow function has no this)

// call/apply/bind don't work on arrow functions
obj.greet.call({ name: "Jane" }); // still undefined
```

### Multiple binds:

```js
function test() {
  console.log(this.name);
}

const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };

const bound1 = test.bind(obj1);
const bound2 = bound1.bind(obj2);

bound2(); // "Object 1" (first bind wins!)
```

---

## 🌟 15. Performance Considerations

### Bind creates new function:

```js
// ❌ Creates new function on every render
render() {
  return <button onClick={this.handleClick.bind(this)}>Click</button>;
}

// ✅ Bind once in constructor
constructor() {
  this.handleClick = this.handleClick.bind(this);
}

render() {
  return <button onClick={this.handleClick}>Click</button>;
}
```

### Call vs Apply performance:

```js
// Usually similar performance
function test(a, b, c) {
  return a + b + c;
}

const obj = {};
const args = [1, 2, 3];

// Both are fast
test.call(obj, 1, 2, 3);
test.apply(obj, args);

// Modern spread is also fast
test.call(obj, ...args);
```

---

## 🧠 Deep CS Understanding

### Context binding:

- Changes the execution context (this value)
- Resolves at call time, not definition time
- Part of ECMAScript specification
- Implemented in function prototype chain

### Memory:

- `bind()` creates new function object
- Stores bound context and arguments
- Can lead to memory leaks if not careful
- Original function remains unchanged

### Scope chain:

- Doesn't affect scope chain
- Only changes `this` binding
- Closures still work normally
- Lexical scope unaffected

### Performance:

- call/apply: direct function invocation
- bind: creates wrapper function (slight overhead)
- Modern engines optimize heavily
- Usually negligible performance impact

---

## 🏆 FINAL SUMMARY

### ✔ call() - invoke immediately with individual args

### ✔ apply() - invoke immediately with array args

### ✔ bind() - create new function with bound context

### ✔ All control the this value explicitly

### ✔ Useful for borrowing methods

### ✔ Essential for event handlers

### ✔ Enable partial application

### ✔ Can't bind arrow functions

### ✔ First bind wins on multiple binds

### ✔ Modern alternatives exist (arrow, spread)

---

## 🚀 Related Topics

- this keyword
- Arrow functions
- Function context
- Closures
- Partial application
- Event handlers
- Object-oriented JavaScript
- Prototypal inheritance
