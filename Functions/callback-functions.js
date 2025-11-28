/**
 * 🚀 Callback Functions - JavaScript Implementation
 * Comprehensive examples of callback functions
 */

// ===================================
// 1. Basic Callback
// ===================================
console.log("=== 1. Basic Callback ===");

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greet("World", function () {
  console.log("Callback executed!");
});

// ===================================
// 2. Callback with Arguments
// ===================================
console.log("\n=== 2. Callback with Arguments ===");

function processNumber(num, callback) {
  const result = callback(num);
  console.log(`Processing ${num}: ${result}`);
}

processNumber(5, (n) => n * 2);
processNumber(10, (n) => n + 100);
processNumber(3, (n) => n * n);

// ===================================
// 3. Array Methods with Callbacks
// ===================================
console.log("\n=== 3. Array Methods ===");

const numbers = [1, 2, 3, 4, 5];

// forEach
console.log("forEach:");
numbers.forEach(function (num, index) {
  console.log(`  Index ${index}: ${num}`);
});

// map
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("map (doubled):", doubled);

// filter
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("filter (evens):", evens);

// find
const firstBig = numbers.find(function (num) {
  return num > 3;
});
console.log("find (first > 3):", firstBig);

// ===================================
// 4. Synchronous Callbacks
// ===================================
console.log("\n=== 4. Synchronous Callbacks ===");

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log("Add:", calculate(10, 5, (a, b) => a + b));
console.log("Subtract:", calculate(10, 5, (a, b) => a - b));
console.log("Multiply:", calculate(10, 5, (a, b) => a * b));
console.log("Divide:", calculate(10, 5, (a, b) => a / b));

// ===================================
// 5. Asynchronous Callbacks
// ===================================
console.log("\n=== 5. Asynchronous Callbacks ===");

function fetchData(callback) {
  console.log("Starting fetch...");

  setTimeout(function () {
    const data = { id: 1, name: "Product" };
    callback(null, data);
  }, 100);
}

fetchData(function (error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Fetched data:", data);
  }
});

console.log("Fetch started, waiting for callback...");

// ===================================
// 6. Error-First Callback Pattern
// ===================================
setTimeout(() => {
  console.log("\n=== 6. Error-First Callbacks ===");

  function readFile(filename, callback) {
    setTimeout(() => {
      if (filename.includes("error")) {
        callback(new Error("File not found"), null);
      } else {
        callback(null, `Contents of ${filename}`);
      }
    }, 50);
  }

  readFile("document.txt", (err, data) => {
    if (err) {
      console.log("Error:", err.message);
    } else {
      console.log("Data:", data);
    }
  });

  readFile("error.txt", (err, data) => {
    if (err) {
      console.log("Error:", err.message);
    } else {
      console.log("Data:", data);
    }
  });
}, 200);

// ===================================
// 7. Callback Hell (Anti-pattern)
// ===================================
setTimeout(() => {
  console.log("\n=== 7. Callback Hell (Anti-pattern) ===");

  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 complete");
      callback("Result 1");
    }, 50);
  }

  function step2(input, callback) {
    setTimeout(() => {
      console.log("Step 2 complete with:", input);
      callback("Result 2");
    }, 50);
  }

  function step3(input, callback) {
    setTimeout(() => {
      console.log("Step 3 complete with:", input);
      callback("Final Result");
    }, 50);
  }

  // Nested callbacks (callback hell)
  step1((result1) => {
    step2(result1, (result2) => {
      step3(result2, (finalResult) => {
        console.log("Final:", finalResult);
      });
    });
  });
}, 400);

// ===================================
// 8. Named Callbacks (Solution)
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Named Callbacks (Better) ===");

  function fetchUser(userId, callback) {
    setTimeout(() => callback(null, { id: userId, name: "John" }), 30);
  }

  function fetchPosts(userId, callback) {
    setTimeout(() => callback(null, [{ id: 1, title: "Post 1" }]), 30);
  }

  function handlePosts(err, posts) {
    if (err) return console.log("Error:", err);
    console.log("Posts:", posts);
  }

  function handleUser(err, user) {
    if (err) return console.log("Error:", err);
    console.log("User:", user);
    fetchPosts(user.id, handlePosts);
  }

  fetchUser(1, handleUser);
}, 700);

// ===================================
// 9. Event Handler Callbacks
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Event Handler Callbacks ===");

  // Simple event emitter
  const eventEmitter = {
    events: {},
    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    },
    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => callback(data));
      }
    },
  };

  eventEmitter.on("message", (data) => {
    console.log("Handler 1:", data);
  });

  eventEmitter.on("message", (data) => {
    console.log("Handler 2:", data.toUpperCase());
  });

  eventEmitter.emit("message", "Hello World");
}, 900);

// ===================================
// 10. Sorting with Callbacks
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Sorting with Callbacks ===");

  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  // Sort by age
  const byAge = [...people].sort((a, b) => a.age - b.age);
  console.log(
    "By age:",
    byAge.map((p) => `${p.name}:${p.age}`)
  );

  // Sort by name
  const byName = [...people].sort((a, b) => a.name.localeCompare(b.name));
  console.log(
    "By name:",
    byName.map((p) => p.name)
  );
}, 1000);

// ===================================
// 11. Async Control Flow
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Async Control Flow ===");

  // Process array in series
  function series(tasks, callback) {
    let index = 0;
    const results = [];

    function next(err, result) {
      if (err) return callback(err);
      if (result !== undefined) results.push(result);

      if (index >= tasks.length) {
        return callback(null, results);
      }

      tasks[index++](next);
    }

    next();
  }

  const tasks = [
    (cb) => setTimeout(() => cb(null, "Task 1"), 30),
    (cb) => setTimeout(() => cb(null, "Task 2"), 30),
    (cb) => setTimeout(() => cb(null, "Task 3"), 30),
  ];

  series(tasks, (err, results) => {
    console.log("Series results:", results);
  });
}, 1100);

// ===================================
// 12. Callback to Promise
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Callback to Promise ===");

  // Callback-based function
  function legacyAsync(value, callback) {
    setTimeout(() => {
      if (value < 0) {
        callback(new Error("Value must be positive"), null);
      } else {
        callback(null, value * 2);
      }
    }, 50);
  }

  // Promisify
  function promisify(fn) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
    };
  }

  const asyncPromise = promisify(legacyAsync);

  asyncPromise(5)
    .then((result) => console.log("Promise result:", result))
    .catch((err) => console.log("Promise error:", err.message));
}, 1300);

// ===================================
// 13. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 13. Best Practices ===");

  console.log(`
✅ DO:
   - Use error-first pattern for async callbacks
   - Name callback functions for clarity
   - Handle errors properly
   - Consider Promises/async-await for complex flows

❌ DON'T:
   - Create deeply nested callbacks (callback hell)
   - Ignore error handling
   - Mix sync and async behavior
   - Call callback multiple times

💡 ALTERNATIVES:
   - Promises for cleaner async code
   - async/await for synchronous-looking async
   - Event emitters for multiple listeners
`);

  console.log("✅ All callback function examples completed!");
}, 1500);
