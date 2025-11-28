/**
 * 🚀 Function Expression - JavaScript Implementation
 * Comprehensive examples of function expressions
 */

// ===================================
// 1. Basic Function Expression
// ===================================
console.log("=== 1. Basic Function Expression ===");

const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("John")); // "Hello, John!"

// ===================================
// 2. Named Function Expression
// ===================================
console.log("\n=== 2. Named Function Expression ===");

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use internal name for recursion
};

console.log("5! =", factorial(5)); // 120
// console.log(fact(5)); // ReferenceError - name not accessible outside

// ===================================
// 3. No Hoisting
// ===================================
console.log("\n=== 3. No Hoisting ===");

// This would throw an error:
// console.log(addNumbers(1, 2)); // TypeError: addNumbers is not a function

const addNumbers = function (a, b) {
  return a + b;
};

console.log("After definition:", addNumbers(5, 3)); // 8

// ===================================
// 4. Immediately Invoked (IIFE-like)
// ===================================
console.log("\n=== 4. Immediately Invoked ===");

const result = (function (x) {
  return x * x;
})(5);

console.log("Immediately invoked result:", result); // 25

// ===================================
// 5. Assigning to Object Properties
// ===================================
console.log("\n=== 5. Object Methods ===");

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) return "Error";
    return a / b;
  },
};

console.log("10 + 5 =", calculator.add(10, 5));
console.log("10 - 5 =", calculator.subtract(10, 5));
console.log("10 * 5 =", calculator.multiply(10, 5));
console.log("10 / 5 =", calculator.divide(10, 5));

// ===================================
// 6. Conditional Function Assignment
// ===================================
console.log("\n=== 6. Conditional Function Assignment ===");

const isProduction = false;

const logger = isProduction
  ? function (msg) {
      // Silent in production
    }
  : function (msg) {
      console.log("[DEBUG]", msg);
    };

logger("This is a debug message");

// ===================================
// 7. Array of Functions
// ===================================
console.log("\n=== 7. Array of Functions ===");

const operations = [
  function (x) {
    return x * 2;
  },
  function (x) {
    return x + 10;
  },
  function (x) {
    return x * x;
  },
];

let value = 5;
for (const operation of operations) {
  value = operation(value);
  console.log("After operation:", value);
}
// 5 * 2 = 10, 10 + 10 = 20, 20 * 20 = 400

// ===================================
// 8. Functions as Arguments
// ===================================
console.log("\n=== 8. Functions as Arguments ===");

const numbers = [1, 2, 3, 4, 5];

// Using function expression as callback
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Even:", evenNumbers);

const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log("Sum:", sum);

// ===================================
// 9. Returning Functions
// ===================================
console.log("\n=== 9. Returning Functions ===");

const createMultiplier = function (factor) {
  return function (number) {
    return number * factor;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// ===================================
// 10. Event Handler Pattern
// ===================================
console.log("\n=== 10. Event Handler Pattern ===");

// Simulating event handlers
const handlers = {};

handlers.onClick = function (event) {
  console.log("Click event:", event);
};

handlers.onSubmit = function (event) {
  console.log("Submit event:", event);
};

handlers.onChange = function (event) {
  console.log("Change event:", event);
};

// Simulate events
handlers.onClick({ type: "click", target: "button" });
handlers.onSubmit({ type: "submit", target: "form" });

// ===================================
// 11. Self-Referencing (Named Expression)
// ===================================
console.log("\n=== 11. Self-Referencing ===");

const countdown = function count(n) {
  console.log(n);
  if (n > 0) {
    count(n - 1); // Use internal name
  }
};

countdown(3);

// Useful for debugging
const myFunction = function namedForDebugging() {
  console.log("Function name:", namedForDebugging.name);
  return namedForDebugging.name;
};

console.log(myFunction()); // "namedForDebugging"

// ===================================
// 12. Closures with Function Expressions
// ===================================
console.log("\n=== 12. Closures ===");

const createCounter = function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
};

const counter = createCounter();
console.log("Increment:", counter.increment()); // 1
console.log("Increment:", counter.increment()); // 2
console.log("Decrement:", counter.decrement()); // 1
console.log("Get count:", counter.getCount()); // 1

// ===================================
// 13. Method Chaining
// ===================================
console.log("\n=== 13. Method Chaining ===");

const stringBuilder = function (initial = "") {
  let str = initial;

  return {
    append: function (text) {
      str += text;
      return this;
    },
    prepend: function (text) {
      str = text + str;
      return this;
    },
    toString: function () {
      return str;
    },
  };
};

const result2 = stringBuilder()
  .append("Hello")
  .append(" ")
  .append("World")
  .prepend(">>> ")
  .toString();

console.log("Chain result:", result2);

// ===================================
// 14. Dynamic Function Creation
// ===================================
console.log("\n=== 14. Dynamic Function Creation ===");

const createValidator = function (type) {
  const validators = {
    email: function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    phone: function (value) {
      return /^\d{10}$/.test(value);
    },
    required: function (value) {
      return value !== null && value !== undefined && value !== "";
    },
  };

  return validators[type] || function () { return false; };
};

const validateEmail = createValidator("email");
const validatePhone = createValidator("phone");
const validateRequired = createValidator("required");

console.log("Email valid:", validateEmail("test@example.com")); // true
console.log("Phone valid:", validatePhone("1234567890")); // true
console.log("Required valid:", validateRequired("")); // false

// ===================================
// 15. Expression vs Declaration
// ===================================
console.log("\n=== 15. Expression vs Declaration ===");

console.log(`
Function Declaration:
  ✅ Hoisted
  ✅ Must have a name
  ✅ Can be called before definition
  ✅ Creates binding in current scope

Function Expression:
  ❌ Not hoisted
  ❌ Name is optional
  ❌ Cannot be called before definition
  ✅ Assigned to a variable
  ✅ Can be conditionally created
  ✅ Can be passed as arguments
  ✅ Can be returned from functions
`);

console.log("✅ All function expression examples completed!");
