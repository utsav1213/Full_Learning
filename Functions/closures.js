/**
 * 🚀 Closures - JavaScript Implementation
 * Comprehensive examples of closures in JavaScript
 */

// ===================================
// 1. Basic Closure
// ===================================
console.log("=== 1. Basic Closure ===");

function outer() {
  const message = "Hello";

  function inner() {
    console.log(message); // Accesses outer variable
  }

  return inner;
}

const myFunc = outer();
myFunc(); // "Hello" - still has access to 'message'!

// ===================================
// 2. Closure with Parameters
// ===================================
console.log("\n=== 2. Closure with Parameters ===");

function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayGoodbye = createGreeter("Goodbye");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
console.log(sayGoodbye("World")); // "Goodbye, World!"

// ===================================
// 3. Private Variables
// ===================================
console.log("\n=== 3. Private Variables ===");

function createCounter() {
  let count = 0; // Private variable

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
    reset() {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();

console.log("Increment:", counter.increment()); // 1
console.log("Increment:", counter.increment()); // 2
console.log("Get count:", counter.getCount()); // 2
console.log("Decrement:", counter.decrement()); // 1
console.log("Reset:", counter.reset()); // 0
// console.log(count); // ReferenceError - count is private!

// ===================================
// 4. Function Factory
// ===================================
console.log("\n=== 4. Function Factory ===");

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("Quadruple 5:", quadruple(5)); // 20

// ===================================
// 5. Data Privacy
// ===================================
console.log("\n=== 5. Data Privacy ===");

function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
        return balance;
      }
      return "Invalid amount";
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: $${amount}`);
        return balance;
      }
      return "Insufficient funds or invalid amount";
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

console.log("Initial balance:", account.getBalance()); // 1000
account.deposit(500); // "Deposited: $500"
console.log("After deposit:", account.getBalance()); // 1500
account.withdraw(200); // "Withdrawn: $200"
console.log("After withdrawal:", account.getBalance()); // 1300
// console.log(balance); // ReferenceError - balance is private!

// ===================================
// 6. Closure in Loops (Classic Problem)
// ===================================
console.log("\n=== 6. Closure in Loops ===");

// Problem with var
console.log("Problem with var (all print 3):");
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    process.stdout.write(`${i} `);
  }, 10);
}

// Solution with IIFE
setTimeout(() => {
  console.log("\nSolution with IIFE:");
  for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function () {
        process.stdout.write(`${j} `);
      }, 10);
    })(i);
  }
}, 50);

// Solution with let
setTimeout(() => {
  console.log("\nSolution with let:");
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      process.stdout.write(`${i} `);
    }, 10);
  }
}, 100);

// ===================================
// 7. Module Pattern
// ===================================
setTimeout(() => {
  console.log("\n\n=== 7. Module Pattern ===");

  const calculator = (function () {
    let result = 0;

    function log(operation) {
      console.log(`[Calc] ${operation}, result: ${result}`);
    }

    return {
      add(n) {
        result += n;
        log(`Added ${n}`);
        return this;
      },
      subtract(n) {
        result -= n;
        log(`Subtracted ${n}`);
        return this;
      },
      multiply(n) {
        result *= n;
        log(`Multiplied by ${n}`);
        return this;
      },
      getResult() {
        return result;
      },
      reset() {
        result = 0;
        log("Reset");
        return this;
      },
    };
  })();

  calculator.add(10).multiply(2).subtract(5);
  console.log("Result:", calculator.getResult()); // 15
}, 200);

// ===================================
// 8. Memoization with Closure
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Memoization ===");

  function memoize(fn) {
    const cache = {};

    return function (...args) {
      const key = JSON.stringify(args);

      if (key in cache) {
        console.log("Cache hit:", key);
        return cache[key];
      }

      console.log("Computing:", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }

  const factorial = memoize(function (n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  });

  console.log("5! =", factorial(5));
  console.log("5! =", factorial(5)); // From cache
  console.log("6! =", factorial(6)); // Uses cached 5!
}, 400);

// ===================================
// 9. Partial Application
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Partial Application ===");

  function partial(fn, ...fixedArgs) {
    return function (...remainingArgs) {
      return fn(...fixedArgs, ...remainingArgs);
    };
  }

  function greet(greeting, name, punctuation) {
    return `${greeting}, ${name}${punctuation}`;
  }

  const sayHello = partial(greet, "Hello");
  const sayHelloToJohn = partial(greet, "Hello", "John");

  console.log(sayHello("World", "!")); // "Hello, World!"
  console.log(sayHelloToJohn("!!!")); // "Hello, John!!!"
}, 500);

// ===================================
// 10. Currying
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Currying ===");

  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    };
  }

  const add = curry((a, b, c) => a + b + c);

  console.log("add(1)(2)(3):", add(1)(2)(3)); // 6
  console.log("add(1, 2)(3):", add(1, 2)(3)); // 6
  console.log("add(1)(2, 3):", add(1)(2, 3)); // 6
  console.log("add(1, 2, 3):", add(1, 2, 3)); // 6
}, 600);

// ===================================
// 11. Debounce and Throttle
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Debounce and Throttle ===");

  // Debounce
  function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 100);

  debouncedLog("First");
  debouncedLog("Second");
  debouncedLog("Third"); // Only this logs after 100ms

  // Throttle
  function throttle(fn, limit) {
    let inThrottle;

    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  const throttledLog = throttle((msg) => console.log("Throttled:", msg), 100);

  // Simulate rapid calls
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      throttledLog(`Call ${i}`);
    }
  }, 150);
}, 700);

// ===================================
// 12. Once Function
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Once Function ===");

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

  console.log("First:", initialize());
  console.log("Second:", initialize()); // Returns cached result
  console.log("Third:", initialize()); // Returns cached result
}, 1000);

// ===================================
// 13. Memory Considerations
// ===================================
setTimeout(() => {
  console.log("\n=== 13. Memory Considerations ===");

  console.log(`
⚠️ POTENTIAL ISSUES:
   - Closures keep references to outer scope
   - Large data can be retained unexpectedly
   - May cause memory leaks if not careful

✅ BEST PRACTICES:
   - Only capture what you need
   - Clean up resources when done
   - Be aware of long-lived closures
   - Use WeakMap for object keys if possible
`);
}, 1100);

// ===================================
// 14. Real-World Examples
// ===================================
setTimeout(() => {
  console.log("\n=== 14. Real-World Examples ===");

  // Configuration handler
  function createConfig(defaults) {
    const config = { ...defaults };

    return {
      get(key) {
        return config[key];
      },
      set(key, value) {
        config[key] = value;
        return this;
      },
      getAll() {
        return { ...config };
      },
    };
  }

  const appConfig = createConfig({
    debug: false,
    apiUrl: "https://api.example.com",
  });

  console.log("Debug:", appConfig.get("debug"));
  appConfig.set("debug", true);
  console.log("After set:", appConfig.get("debug"));
  console.log("All config:", appConfig.getAll());

  // Logger factory
  function createLogger(prefix) {
    return {
      log(msg) {
        console.log(`[${prefix}] ${msg}`);
      },
      error(msg) {
        console.log(`[${prefix}] ERROR: ${msg}`);
      },
    };
  }

  const appLogger = createLogger("APP");
  const dbLogger = createLogger("DB");

  appLogger.log("Application started");
  dbLogger.log("Connected to database");

  console.log("\n✅ All closure examples completed!");
}, 1200);
