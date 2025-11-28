/**
 * 🚀 Function and Block Scope - JavaScript Implementation
 * Comprehensive examples of scope in JavaScript
 */

// ===================================
// 1. Global Scope
// ===================================
console.log("=== 1. Global Scope ===");

// Variables declared outside any function are global
var globalVar = "I'm global (var)";
let globalLet = "I'm global (let)";
const globalConst = "I'm global (const)";

function accessGlobals() {
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);
}

accessGlobals();

// ===================================
// 2. Function Scope
// ===================================
console.log("\n=== 2. Function Scope ===");

function outerFunction() {
  var functionVar = "I'm function-scoped";
  let functionLet = "I'm also in function";
  const functionConst = "Me too";

  console.log("Inside function:", functionVar);

  function innerFunction() {
    console.log("Inner can access outer:", functionVar);
  }

  innerFunction();
}

outerFunction();

// console.log(functionVar); // ReferenceError - not accessible

// ===================================
// 3. Block Scope
// ===================================
console.log("\n=== 3. Block Scope ===");

// let and const are block-scoped
if (true) {
  var varInBlock = "var ignores blocks";
  let letInBlock = "let respects blocks";
  const constInBlock = "const respects blocks";

  console.log("Inside block:", letInBlock);
}

console.log("Outside block - var:", varInBlock); // Works!
// console.log(letInBlock); // ReferenceError
// console.log(constInBlock); // ReferenceError

// ===================================
// 4. var vs let vs const
// ===================================
console.log("\n=== 4. var vs let vs const ===");

// var: function-scoped, hoisted
function varExample() {
  console.log("var before:", x); // undefined (hoisted)
  var x = 10;
  console.log("var after:", x); // 10

  if (true) {
    var x = 20; // Same variable!
    console.log("var in block:", x); // 20
  }
  console.log("var after block:", x); // 20
}
varExample();

// let: block-scoped
function letExample() {
  // console.log(y); // ReferenceError (TDZ)
  let y = 10;
  console.log("\nlet after:", y); // 10

  if (true) {
    let y = 20; // Different variable!
    console.log("let in block:", y); // 20
  }
  console.log("let after block:", y); // 10
}
letExample();

// ===================================
// 5. Temporal Dead Zone (TDZ)
// ===================================
console.log("\n=== 5. Temporal Dead Zone ===");

function tdzExample() {
  // TDZ starts here for 'value'

  console.log("Before declaration:");

  try {
    console.log(value); // ReferenceError
  } catch (e) {
    console.log("Error:", e.message);
  }

  let value = "Now I exist"; // TDZ ends here
  console.log("After declaration:", value);
}

tdzExample();

// ===================================
// 6. Nested Scopes (Scope Chain)
// ===================================
console.log("\n=== 6. Scope Chain ===");

const global = "global";

function outer() {
  const outerVar = "outer";

  function middle() {
    const middleVar = "middle";

    function inner() {
      const innerVar = "inner";

      // Can access all outer scopes
      console.log("Inner accessing:");
      console.log("  innerVar:", innerVar);
      console.log("  middleVar:", middleVar);
      console.log("  outerVar:", outerVar);
      console.log("  global:", global);
    }

    inner();
  }

  middle();
}

outer();

// ===================================
// 7. Loop Scope
// ===================================
console.log("\n=== 7. Loop Scope ===");

// Problem with var in loops
console.log("With var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("  var i:", i), 10);
}
// Prints 3, 3, 3

// Solution with let
setTimeout(() => {
  console.log("\nWith let:");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("  let j:", j), 10);
  }
  // Prints 0, 1, 2
}, 50);

// ===================================
// 8. Closures and Scope
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Closures and Scope ===");

  function createCounter() {
    let count = 0; // Private variable in function scope

    return {
      increment() {
        return ++count;
      },
      decrement() {
        return --count;
      },
      getCount() {
        return count;
      },
    };
  }

  const counter = createCounter();
  console.log("Increment:", counter.increment()); // 1
  console.log("Increment:", counter.increment()); // 2
  console.log("Get count:", counter.getCount()); // 2
  // console.log(count); // ReferenceError - private!
}, 100);

// ===================================
// 9. Block Scope in Switch
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Block Scope in Switch ===");

  const color = "red";

  switch (color) {
    case "red": {
      // Need braces for let/const
      let message = "Stop";
      console.log(message);
      break;
    }
    case "yellow": {
      let message = "Caution"; // Same name, different scope
      console.log(message);
      break;
    }
    case "green": {
      let message = "Go";
      console.log(message);
      break;
    }
  }
}, 150);

// ===================================
// 10. IIFE for Scope
// ===================================
setTimeout(() => {
  console.log("\n=== 10. IIFE for Scope ===");

  // Before ES6, IIFE was used for block scope
  (function () {
    var privateVar = "Hidden";
    console.log("Inside IIFE:", privateVar);
  })();

  // console.log(privateVar); // ReferenceError

  // Modern alternative: block with let/const
  {
    let blockPrivate = "Also hidden";
    console.log("Inside block:", blockPrivate);
  }

  // console.log(blockPrivate); // ReferenceError
}, 200);

// ===================================
// 11. Parameter Scope
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Parameter Scope ===");

  function parameterScope(a, b = a * 2) {
    console.log("a:", a, "b:", b);
  }

  parameterScope(5); // a: 5, b: 10
  parameterScope(5, 20); // a: 5, b: 20

  // Default parameters create their own scope
  let x = 10;
  function defaultScope(a = x) {
    let x = 20; // Different x!
    console.log("a:", a, "local x:", x);
  }

  defaultScope(); // a: 10 (uses outer x)
}, 250);

// ===================================
// 12. Module Scope
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Module Scope ===");

  console.log(`
ES6 Modules have their own scope:
  - Variables are private by default
  - export makes them public
  - import brings them into local scope

Example:
  // module.js
  const private = "Not accessible outside";
  export const public = "Accessible when imported";

  // main.js
  import { public } from './module.js';
  console.log(public); // Works
  console.log(private); // Error
  `);
}, 300);

// ===================================
// 13. Scope Summary
// ===================================
setTimeout(() => {
  console.log("\n=== 13. Scope Summary ===");

  console.log(`
╔════════════════════════════════════════════════════════════╗
║                    SCOPE TYPES                             ║
╠════════════════════════════════════════════════════════════╣
║ GLOBAL SCOPE:                                              ║
║   • Variables outside any function/block                  ║
║   • Accessible everywhere                                  ║
║   • Avoid polluting global scope                          ║
║                                                            ║
║ FUNCTION SCOPE:                                            ║
║   • Variables declared inside function                    ║
║   • var, let, const all function-scoped                   ║
║   • Not accessible outside function                       ║
║                                                            ║
║ BLOCK SCOPE:                                               ║
║   • Only let and const are block-scoped                   ║
║   • var ignores blocks (except functions)                 ║
║   • Created by {}, if, for, while, etc.                   ║
╠════════════════════════════════════════════════════════════╣
║ VARIABLE DECLARATIONS:                                     ║
║   var   - function-scoped, hoisted, can redeclare        ║
║   let   - block-scoped, TDZ, can't redeclare             ║
║   const - block-scoped, TDZ, can't reassign              ║
╚════════════════════════════════════════════════════════════╝
  `);

  console.log("✅ All scope examples completed!");
}, 350);
