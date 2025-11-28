/**
 * 🚀 Anonymous Functions - JavaScript Implementation
 * Comprehensive examples of anonymous functions
 */

// ===================================
// 1. Basic Anonymous Function
// ===================================
console.log("=== 1. Basic Anonymous Function ===");

// Assigned to variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("World")); // "Hello, World!"

// ===================================
// 2. As Callback Functions
// ===================================
console.log("\n=== 2. As Callback Functions ===");

const numbers = [1, 2, 3, 4, 5];

// map with anonymous function
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled:", doubled);

// filter with anonymous function
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Evens:", evens);

// reduce with anonymous function
const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log("Sum:", sum);

// forEach with anonymous function
console.log("forEach output:");
numbers.forEach(function (num, index) {
  console.log(`  Index ${index}: ${num}`);
});

// ===================================
// 3. IIFE (Immediately Invoked)
// ===================================
console.log("\n=== 3. IIFE (Immediately Invoked) ===");

// Basic IIFE
(function () {
  console.log("IIFE executed immediately!");
})();

// IIFE with return value
const result = (function () {
  const secret = "hidden";
  return "Returned from IIFE";
})();
console.log("IIFE result:", result);

// IIFE with parameters
(function (name) {
  console.log(`Hello, ${name} from IIFE!`);
})("World");

// ===================================
// 4. Event Handlers
// ===================================
console.log("\n=== 4. Event Handlers ===");

// Simulated DOM-like event handling
const button = {
  listeners: [],
  addEventListener: function (event, callback) {
    this.listeners.push({ event, callback });
  },
  click: function () {
    this.listeners
      .filter((l) => l.event === "click")
      .forEach((l) => l.callback({ type: "click" }));
  },
};

// Anonymous function as event handler
button.addEventListener("click", function (event) {
  console.log("Button clicked!", event);
});

button.click();

// ===================================
// 5. setTimeout and setInterval
// ===================================
console.log("\n=== 5. setTimeout with Anonymous Function ===");

// setTimeout with anonymous function
setTimeout(function () {
  console.log("Delayed message (500ms)");
}, 500);

// Simulate setInterval behavior
let count = 0;
const intervalId = setInterval(function () {
  count++;
  console.log(`Interval count: ${count}`);
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 100);

// ===================================
// 6. Sorting with Anonymous Functions
// ===================================
setTimeout(() => {
  console.log("\n=== 6. Sorting ===");

  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  // Sort by age (ascending)
  const byAge = [...people].sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(
    "By age:",
    byAge.map((p) => `${p.name}:${p.age}`)
  );

  // Sort by name (alphabetical)
  const byName = [...people].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(
    "By name:",
    byName.map((p) => p.name)
  );
}, 600);

// ===================================
// 7. Promise Handlers
// ===================================
setTimeout(() => {
  console.log("\n=== 7. Promise Handlers ===");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise resolved!");
    }, 100);
  });

  promise
    .then(function (result) {
      console.log("Then:", result);
      return result.toUpperCase();
    })
    .then(function (result) {
      console.log("Then 2:", result);
    })
    .catch(function (error) {
      console.log("Catch:", error);
    })
    .finally(function () {
      console.log("Finally block");
    });
}, 800);

// ===================================
// 8. Array Transformation
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Array Transformation ===");

  const data = [
    { name: "Product A", price: 10, quantity: 5 },
    { name: "Product B", price: 20, quantity: 3 },
    { name: "Product C", price: 15, quantity: 8 },
  ];

  // Transform using anonymous functions
  const totals = data.map(function (item) {
    return {
      name: item.name,
      total: item.price * item.quantity,
    };
  });
  console.log("Totals:", totals);

  // Filter and map chained
  const expensive = data
    .filter(function (item) {
      return item.price > 12;
    })
    .map(function (item) {
      return item.name;
    });
  console.log("Expensive items:", expensive);
}, 1200);

// ===================================
// 9. Object Methods
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Object Methods ===");

  const calculator = {
    value: 0,
    add: function (n) {
      this.value += n;
      return this;
    },
    subtract: function (n) {
      this.value -= n;
      return this;
    },
    multiply: function (n) {
      this.value *= n;
      return this;
    },
    result: function () {
      return this.value;
    },
  };

  const calcResult = calculator.add(10).multiply(2).subtract(5).result();
  console.log("Calculator result:", calcResult); // 15
}, 1400);

// ===================================
// 10. Higher-Order Functions
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Higher-Order Functions ===");

  // Function that returns anonymous function
  function createGreeter(greeting) {
    return function (name) {
      return `${greeting}, ${name}!`;
    };
  }

  const sayHello = createGreeter("Hello");
  const sayHi = createGreeter("Hi");

  console.log(sayHello("World"));
  console.log(sayHi("There"));

  // Function that accepts anonymous function
  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }

  console.log("Repeat 3 times:");
  repeat(3, function (i) {
    console.log(`  Iteration ${i}`);
  });
}, 1600);

// ===================================
// 11. Module Pattern
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Module Pattern ===");

  const counter = (function () {
    let count = 0; // Private

    return {
      increment: function () {
        return ++count;
      },
      decrement: function () {
        return --count;
      },
      getCount: function () {
        return count;
      },
    };
  })();

  console.log("Initial:", counter.getCount()); // 0
  console.log("After increment:", counter.increment()); // 1
  console.log("After increment:", counter.increment()); // 2
  console.log("After decrement:", counter.decrement()); // 1
}, 1800);

// ===================================
// 12. Why Anonymous Functions?
// ===================================
setTimeout(() => {
  console.log("\n=== 12. When to Use Anonymous Functions ===");

  console.log(`
✅ USE when:
   - One-time use (callbacks, event handlers)
   - Short, simple operations
   - Immediately invoked (IIFE)
   - Inline transformations (map, filter, reduce)

❌ AVOID when:
   - Function is reused in multiple places
   - Function is complex and needs debugging
   - Recursion is needed (use named expression)
   - Self-reference is required

💡 ALTERNATIVES:
   - Arrow functions for shorter syntax
   - Named function expressions for recursion
   - Function declarations for reusable code
`);

  console.log("✅ All anonymous function examples completed!");
}, 2000);
