/**
 * 🚀 this Keyword - JavaScript Implementation
 * Comprehensive examples of 'this' keyword in JavaScript
 */

// ===================================
// 1. Global Context
// ===================================
console.log("=== 1. Global Context ===");

// In Node.js, global this is the module exports (not global object in strict mode)
console.log("Global this:", this);
console.log("globalThis:", typeof globalThis);

// ===================================
// 2. Function Context
// ===================================
console.log("\n=== 2. Function Context ===");

function showThis() {
  console.log("Regular function this:", this);
}

showThis(); // undefined in strict mode, global object otherwise

// ===================================
// 3. Object Method
// ===================================
console.log("\n=== 3. Object Method ===");

const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
    console.log("this.age:", this.age);
  },
  getInfo: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

person.greet();
console.log(person.getInfo());

// ===================================
// 4. Losing 'this' Context
// ===================================
console.log("\n=== 4. Losing 'this' Context ===");

const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// Direct call - works
user.greet(); // "Hello, Alice"

// Assigned to variable - loses 'this'
const greetFunc = user.greet;
greetFunc(); // "Hello, undefined"

// ===================================
// 5. Arrow Functions
// ===================================
console.log("\n=== 5. Arrow Functions (Lexical this) ===");

const obj = {
  name: "Object",
  traditional: function () {
    console.log("Traditional:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name); // Lexical this (outer scope)
  },
  nested: function () {
    // Arrow inherits 'this' from enclosing function
    const inner = () => {
      console.log("Nested arrow:", this.name);
    };
    inner();
  },
};

obj.traditional(); // "Object"
obj.arrow(); // undefined (lexical scope)
obj.nested(); // "Object" (arrow inherits from nested function)

// ===================================
// 6. Callback Problem
// ===================================
console.log("\n=== 6. Callback Problem ===");

const counter = {
  count: 0,
  start() {
    // Problem: regular function loses 'this'
    setTimeout(function () {
      // this.count++; // Would fail - 'this' is not counter
      console.log("Regular callback 'this':", this);
    }, 10);

    // Solution: arrow function
    setTimeout(() => {
      this.count++;
      console.log("Arrow callback count:", this.count);
    }, 20);
  },
};

counter.start();

// ===================================
// 7. Constructor Functions
// ===================================
setTimeout(() => {
  console.log("\n=== 7. Constructor Functions ===");

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
  }

  const john = new Person("John", 30);
  console.log("john.name:", john.name);
  john.greet();

  // Without 'new', 'this' would be global/undefined
}, 50);

// ===================================
// 8. Classes
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Classes ===");

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }

    // Arrow method (as class field)
    arrowMethod = () => {
      console.log(`Arrow: ${this.name}`);
    };
  }

  const dog = new Animal("Dog");
  dog.speak();
  dog.arrowMethod();

  // Method extraction
  const speak = dog.speak;
  const arrowMethod = dog.arrowMethod;

  // speak(); // Would fail - loses 'this'
  arrowMethod(); // Works! Arrow retains 'this'
}, 100);

// ===================================
// 9. Event Handlers
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Event Handlers ===");

  const button = {
    text: "Click me",
    handlers: [],
    onClick(callback) {
      this.handlers.push(callback);
    },
    click() {
      // In real DOM, 'this' would be the element
      this.handlers.forEach((handler) => {
        handler.call(this); // Pass button as 'this'
      });
    },
  };

  button.onClick(function () {
    console.log("Clicked:", this.text);
  });

  button.click();
}, 150);

// ===================================
// 10. Explicit Binding Summary
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Explicit Binding ===");

  function greet() {
    return `Hello, ${this.name}`;
  }

  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };

  // call - invoke with 'this'
  console.log("call:", greet.call(person1));

  // apply - invoke with 'this'
  console.log("apply:", greet.apply(person2));

  // bind - create new function with 'this'
  const greetAlice = greet.bind(person1);
  console.log("bind:", greetAlice());
}, 200);

// ===================================
// 11. 'this' in Different Contexts
// ===================================
setTimeout(() => {
  console.log("\n=== 11. 'this' Context Summary ===");

  console.log(`
╔════════════════════════════════════════════════════════════╗
║                    'this' BINDING RULES                    ║
╠════════════════════════════════════════════════════════════╣
║ 1. GLOBAL                                                  ║
║    Regular: window (browser) / global (Node)               ║
║    Strict: undefined                                       ║
║                                                            ║
║ 2. FUNCTION CALL: obj.method()                            ║
║    'this' = obj (the object before the dot)               ║
║                                                            ║
║ 3. CONSTRUCTOR: new Func()                                ║
║    'this' = newly created object                          ║
║                                                            ║
║ 4. EXPLICIT: call/apply/bind                              ║
║    'this' = first argument passed                         ║
║                                                            ║
║ 5. ARROW FUNCTION                                         ║
║    'this' = lexical (from enclosing scope)                ║
║    Cannot be changed with call/apply/bind                 ║
╠════════════════════════════════════════════════════════════╣
║ PRIORITY (highest to lowest):                             ║
║    1. new                                                  ║
║    2. call/apply/bind                                      ║
║    3. Object method                                        ║
║    4. Default (global/undefined)                          ║
╚════════════════════════════════════════════════════════════╝
  `);
}, 250);

// ===================================
// 12. Common Patterns
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Common Patterns ===");

  // Pattern 1: Save 'this' reference
  const app = {
    name: "MyApp",
    start() {
      const self = this;
      setTimeout(function () {
        console.log("Pattern 1 (self):", self.name);
      }, 10);
    },
  };

  // Pattern 2: Arrow function
  const app2 = {
    name: "MyApp2",
    start() {
      setTimeout(() => {
        console.log("Pattern 2 (arrow):", this.name);
      }, 20);
    },
  };

  // Pattern 3: bind
  const app3 = {
    name: "MyApp3",
    start() {
      setTimeout(
        function () {
          console.log("Pattern 3 (bind):", this.name);
        }.bind(this),
        30
      );
    },
  };

  app.start();
  app2.start();
  app3.start();
}, 300);

// ===================================
// 13. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 13. Best Practices ===");

  console.log(`
✅ DO:
   - Use arrow functions for callbacks
   - Use class fields for methods that need fixed 'this'
   - Understand context before using 'this'
   - Use bind() when passing methods

❌ AVOID:
   - Arrow functions for object methods
   - Arrow functions for constructors
   - Relying on implicit 'this' binding

💡 REMEMBER:
   - Arrow functions don't have their own 'this'
   - Method extraction loses 'this'
   - 'this' is determined at call time, not definition
`);

  console.log("✅ All 'this' keyword examples completed!");
}, 400);
