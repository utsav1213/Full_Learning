/**
 * 🚀 IIFE (Immediately Invoked Function Expression) - JavaScript Implementation
 * Comprehensive examples of IIFE in JavaScript
 */

// ===================================
// 1. Basic IIFE
// ===================================
console.log("=== 1. Basic IIFE ===");

// Standard syntax
(function () {
  console.log("IIFE executed!");
})();

// Alternative syntax
(function () {
  console.log("Alternative IIFE syntax!");
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE!");
})();

// ===================================
// 2. IIFE with Return Value
// ===================================
console.log("\n=== 2. IIFE with Return Value ===");

const result = (function () {
  const secret = "hidden value";
  return "Returned from IIFE";
})();

console.log("Result:", result);

const sum = ((a, b) => a + b)(5, 3);
console.log("Sum:", sum);

// ===================================
// 3. IIFE with Parameters
// ===================================
console.log("\n=== 3. IIFE with Parameters ===");

(function (name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
})("John", 30);

// With global object
(function (global) {
  console.log("Global object received:", typeof global);
})(globalThis);

// ===================================
// 4. Private Variables (Encapsulation)
// ===================================
console.log("\n=== 4. Private Variables ===");

const counter = (function () {
  // Private variable
  let count = 0;

  // Return public interface
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
})();

console.log("Initial:", counter.getCount()); // 0
console.log("After increment:", counter.increment()); // 1
console.log("After increment:", counter.increment()); // 2
console.log("After decrement:", counter.decrement()); // 1
// console.log(count); // ReferenceError - count is private!

// ===================================
// 5. Module Pattern
// ===================================
console.log("\n=== 5. Module Pattern ===");

const calculator = (function () {
  // Private state
  let result = 0;

  // Private function
  function log(operation, value) {
    console.log(`[Calc] ${operation}: ${value}, result: ${result}`);
  }

  // Public API
  return {
    add(n) {
      result += n;
      log("add", n);
      return this;
    },
    subtract(n) {
      result -= n;
      log("subtract", n);
      return this;
    },
    multiply(n) {
      result *= n;
      log("multiply", n);
      return this;
    },
    divide(n) {
      if (n !== 0) {
        result /= n;
        log("divide", n);
      }
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      log("reset", 0);
      return this;
    },
  };
})();

calculator.add(10).multiply(2).subtract(5);
console.log("Calculator result:", calculator.getResult()); // 15

// ===================================
// 6. Avoid Global Pollution
// ===================================
console.log("\n=== 6. Avoid Global Pollution ===");

// Without IIFE - pollutes global scope
// var config = { debug: true }; // Don't do this!

// With IIFE - keeps variables private
const app = (function () {
  const config = {
    debug: true,
    apiUrl: "https://api.example.com",
    version: "1.0.0",
  };

  return {
    getConfig(key) {
      return config[key];
    },
    isDebug() {
      return config.debug;
    },
  };
})();

console.log("Debug mode:", app.isDebug());
console.log("API URL:", app.getConfig("apiUrl"));

// ===================================
// 7. Loop Variable Capture (Historical)
// ===================================
console.log("\n=== 7. Loop Variable Capture ===");

// Problem with var
var functions1 = [];
for (var i = 0; i < 3; i++) {
  functions1.push(function () {
    return i;
  });
}
console.log("Without IIFE (var):", functions1.map((f) => f())); // [3, 3, 3]

// Solution with IIFE
var functions2 = [];
for (var i = 0; i < 3; i++) {
  functions2.push(
    (function (j) {
      return function () {
        return j;
      };
    })(i)
  );
}
console.log("With IIFE:", functions2.map((f) => f())); // [0, 1, 2]

// Modern solution with let
const functions3 = [];
for (let i = 0; i < 3; i++) {
  functions3.push(() => i);
}
console.log("With let:", functions3.map((f) => f())); // [0, 1, 2]

// ===================================
// 8. Initialization Code
// ===================================
console.log("\n=== 8. Initialization Code ===");

const appState = (function () {
  // Initialization logic
  console.log("Initializing app...");

  const startTime = Date.now();
  const settings = {
    theme: "dark",
    language: "en",
  };

  // Simulate setup
  const features = ["feature1", "feature2", "feature3"];
  console.log(`Loaded ${features.length} features`);

  console.log("App initialized!");

  return {
    getStartTime() {
      return startTime;
    },
    getSettings() {
      return { ...settings };
    },
    getFeatures() {
      return [...features];
    },
  };
})();

console.log("Start time:", appState.getStartTime());
console.log("Settings:", appState.getSettings());

// ===================================
// 9. Revealing Module Pattern
// ===================================
console.log("\n=== 9. Revealing Module Pattern ===");

const userModule = (function () {
  // Private data
  const users = [];
  let nextId = 1;

  // Private functions
  function findById(id) {
    return users.find((u) => u.id === id);
  }

  function add(name) {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
  }

  function remove(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }

  function getAll() {
    return [...users];
  }

  function get(id) {
    return findById(id);
  }

  // Reveal public API
  return {
    add,
    remove,
    get,
    getAll,
  };
})();

userModule.add("Alice");
userModule.add("Bob");
userModule.add("Charlie");
console.log("All users:", userModule.getAll());

userModule.remove(2);
console.log("After removal:", userModule.getAll());

// ===================================
// 10. Async IIFE
// ===================================
console.log("\n=== 10. Async IIFE ===");

(async function () {
  console.log("Starting async IIFE...");

  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("Async data"), 100);
  });

  console.log("Async IIFE result:", result);
})();

// Arrow async IIFE
(async () => {
  const data = await Promise.resolve("Arrow async data");
  console.log("Arrow async IIFE:", data);
})();

// ===================================
// 11. Namespace Pattern
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Namespace Pattern ===");

  const MyApp = (function () {
    // Create namespace object
    const namespace = {};

    // Add modules to namespace
    namespace.utils = {
      formatDate(date) {
        return date.toISOString().split("T")[0];
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    };

    namespace.math = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
    };

    namespace.constants = {
      PI: 3.14159,
      E: 2.71828,
    };

    return namespace;
  })();

  console.log("Formatted date:", MyApp.utils.formatDate(new Date()));
  console.log("Capitalize:", MyApp.utils.capitalize("hello"));
  console.log("Math add:", MyApp.math.add(5, 3));
  console.log("PI:", MyApp.constants.PI);
}, 300);

// ===================================
// 12. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Best Practices ===");

  console.log(`
✅ USE IIFE when:
   - Creating private scope
   - Module pattern implementation
   - One-time initialization
   - Avoiding global pollution
   - Legacy code with var

❌ MODERN ALTERNATIVES:
   - ES6 modules (import/export)
   - Block scope with let/const
   - Classes for encapsulation

💡 SYNTAX TIPS:
   - Wrap in parentheses: (function(){})()
   - Or use: !function(){}() or +function(){}()
   - Arrow IIFE: (() => {})()
   - Async IIFE: (async () => {})()

📝 PATTERNS:
   - Module pattern for encapsulation
   - Revealing module for clean API
   - Namespace for organization
`);

  console.log("✅ All IIFE examples completed!");
}, 500);
