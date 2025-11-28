/**
 * 🚀 call, apply, bind - JavaScript Implementation
 * Comprehensive examples of explicit this binding methods
 */

// ===================================
// 1. Basic call() Method
// ===================================
console.log("=== 1. Basic call() Method ===");

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using call to invoke with different 'this'
console.log(greet.call(person1, "Hello", "!"));
console.log(greet.call(person2, "Hi", "..."));

// ===================================
// 2. Basic apply() Method
// ===================================
console.log("\n=== 2. Basic apply() Method ===");

// apply uses array for arguments
console.log(greet.apply(person1, ["Good morning", "!"]));
console.log(greet.apply(person2, ["Good evening", "?"]));

// Useful with Math functions
const numbers = [5, 2, 9, 1, 7];
console.log("Max:", Math.max.apply(null, numbers)); // 9
console.log("Min:", Math.min.apply(null, numbers)); // 1

// ===================================
// 3. Basic bind() Method
// ===================================
console.log("\n=== 3. Basic bind() Method ===");

// bind creates a new function with fixed 'this'
const greetAlice = greet.bind(person1);
const greetBob = greet.bind(person2);

console.log(greetAlice("Hey", "!")); // "Hey, Alice!"
console.log(greetBob("Yo", "!!")); // "Yo, Bob!!"

// ===================================
// 4. call() vs apply() vs bind()
// ===================================
console.log("\n=== 4. Comparison ===");

function introduce(greeting, farewell) {
  console.log(`${greeting}, I'm ${this.name}. ${farewell}`);
}

const user = { name: "John" };

// call: comma-separated arguments
introduce.call(user, "Hello", "Goodbye");

// apply: array of arguments
introduce.apply(user, ["Hi", "See ya"]);

// bind: returns new function (doesn't invoke immediately)
const boundIntro = introduce.bind(user, "Hey");
boundIntro("Later!"); // Only farewell needed

console.log(`
SUMMARY:
call(thisArg, arg1, arg2, ...)  - Invokes immediately, comma-separated
apply(thisArg, [arg1, arg2])   - Invokes immediately, array of args
bind(thisArg, arg1, ...)       - Returns new function, partial args OK
`);

// ===================================
// 5. Borrowing Methods
// ===================================
console.log("\n=== 5. Borrowing Methods ===");

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// Borrow array methods for array-like object
const joined = Array.prototype.join.call(arrayLike, "-");
console.log("Joined:", joined); // "a-b-c"

const sliced = Array.prototype.slice.call(arrayLike, 1);
console.log("Sliced:", sliced); // ["b", "c"]

// Convert to real array
const realArray = Array.prototype.slice.call(arrayLike);
console.log("Array:", realArray); // ["a", "b", "c"]

// ===================================
// 6. Function Binding for Callbacks
// ===================================
console.log("\n=== 6. Callbacks with bind ===");

const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log("Count:", this.count);
  },
};

// Problem: loses 'this' when passed as callback
// setTimeout(counter.increment, 100); // Would fail

// Solution: bind
setTimeout(counter.increment.bind(counter), 100);

// ===================================
// 7. Partial Application with bind
// ===================================
setTimeout(() => {
  console.log("\n=== 7. Partial Application ===");

  function multiply(a, b) {
    return a * b;
  }

  // Pre-fill first argument
  const double = multiply.bind(null, 2);
  const triple = multiply.bind(null, 3);

  console.log("Double 5:", double(5)); // 10
  console.log("Triple 5:", triple(5)); // 15

  // More complex example
  function log(level, message, timestamp) {
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  const infoLog = log.bind(null, "INFO");
  const errorLog = log.bind(null, "ERROR");

  infoLog("Application started", new Date().toISOString());
  errorLog("Connection failed", new Date().toISOString());
}, 200);

// ===================================
// 8. Constructor with call/apply
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Constructor Chaining ===");

  function Animal(name) {
    this.name = name;
  }

  function Dog(name, breed) {
    // Call parent constructor
    Animal.call(this, name);
    this.breed = breed;
  }

  const dog = new Dog("Buddy", "Golden Retriever");
  console.log("Dog:", dog);
}, 300);

// ===================================
// 9. Event Handler Binding
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Event Handler Binding ===");

  const button = {
    text: "Click Me",
    handlers: [],
    onClick(callback) {
      // Store bound callback
      this.handlers.push(callback.bind(this));
    },
    click() {
      this.handlers.forEach((handler) => handler());
    },
  };

  const controller = {
    message: "Button was clicked!",
    handleClick() {
      console.log(this.message);
    },
  };

  button.onClick(controller.handleClick.bind(controller));
  button.click();
}, 400);

// ===================================
// 10. Max/Min with apply
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Math with apply ===");

  const scores = [85, 92, 78, 95, 88];

  // Traditional apply approach
  console.log("Max (apply):", Math.max.apply(null, scores));
  console.log("Min (apply):", Math.min.apply(null, scores));

  // Modern spread approach
  console.log("Max (spread):", Math.max(...scores));
  console.log("Min (spread):", Math.min(...scores));
}, 500);

// ===================================
// 11. Implementing call/apply
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Custom Implementation ===");

  // Custom call
  Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;
    const uniqueKey = Symbol("fn");
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
  };

  // Custom apply
  Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis;
    const uniqueKey = Symbol("fn");
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
  };

  // Custom bind
  Function.prototype.myBind = function (context, ...boundArgs) {
    const fn = this;
    return function (...args) {
      return fn.apply(context, [...boundArgs, ...args]);
    };
  };

  function sayHello(greeting) {
    return `${greeting}, ${this.name}!`;
  }

  const testPerson = { name: "Test" };

  console.log("myCall:", sayHello.myCall(testPerson, "Hello"));
  console.log("myApply:", sayHello.myApply(testPerson, ["Hi"]));
  const boundSay = sayHello.myBind(testPerson);
  console.log("myBind:", boundSay("Hey"));
}, 600);

// ===================================
// 12. Use Cases Summary
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Use Cases Summary ===");

  console.log(`
╔════════════════════════════════════════════════════════════╗
║           call() / apply() / bind() USE CASES             ║
╠════════════════════════════════════════════════════════════╣
║ call():                                                    ║
║   • Invoke function with specific 'this'                  ║
║   • Method borrowing                                       ║
║   • Constructor chaining                                   ║
║   • When args are known individually                      ║
║                                                            ║
║ apply():                                                   ║
║   • Same as call() but args as array                      ║
║   • Math.max/min with arrays                              ║
║   • When args are in array form                           ║
║   • Dynamic argument passing                              ║
║                                                            ║
║ bind():                                                    ║
║   • Create permanently bound function                     ║
║   • Event handlers                                         ║
║   • Callbacks that need 'this'                            ║
║   • Partial application                                    ║
║   • setTimeout/setInterval with 'this'                    ║
╠════════════════════════════════════════════════════════════╣
║ REMEMBER:                                                  ║
║   • call/apply invoke immediately                         ║
║   • bind returns new function                             ║
║   • null as first arg uses global/undefined              ║
╚════════════════════════════════════════════════════════════╝
  `);

  console.log("✅ All call/apply/bind examples completed!");
}, 700);
