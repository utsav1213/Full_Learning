/**
 * 🚀 Higher-Order Functions - JavaScript Implementation
 * Comprehensive examples of higher-order functions
 */

// ===================================
// 1. Basic Higher-Order Function
// ===================================
console.log("=== 1. Basic Higher-Order Function ===");

// Function that takes a function as argument
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("Add:", executeOperation(add, 5, 3)); // 8
console.log("Multiply:", executeOperation(multiply, 5, 3)); // 15

// ===================================
// 2. Functions Returning Functions
// ===================================
console.log("\n=== 2. Functions Returning Functions ===");

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
// 3. Array Methods (Built-in HOFs)
// ===================================
console.log("\n=== 3. Array Methods (Built-in HOFs) ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
const squared = numbers.map((n) => n * n);
console.log("Squared:", squared);

// filter - keep elements that pass test
const evens = numbers.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

// reduce - accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find - first element that passes test
const firstOver5 = numbers.find((n) => n > 5);
console.log("First > 5:", firstOver5);

// some - at least one passes test
const hasEven = numbers.some((n) => n % 2 === 0);
console.log("Has even:", hasEven);

// every - all pass test
const allPositive = numbers.every((n) => n > 0);
console.log("All positive:", allPositive);

// ===================================
// 4. Custom map Implementation
// ===================================
console.log("\n=== 4. Custom map Implementation ===");

function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const doubled = customMap([1, 2, 3], (n) => n * 2);
console.log("Custom map:", doubled);

// ===================================
// 5. Custom filter Implementation
// ===================================
console.log("\n=== 5. Custom filter Implementation ===");

function customFilter(array, predicate) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const evenNums = customFilter([1, 2, 3, 4, 5], (n) => n % 2 === 0);
console.log("Custom filter:", evenNums);

// ===================================
// 6. Custom reduce Implementation
// ===================================
console.log("\n=== 6. Custom reduce Implementation ===");

function customReduce(array, reducer, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i], i, array);
  }

  return accumulator;
}

const total = customReduce([1, 2, 3, 4, 5], (acc, n) => acc + n, 0);
console.log("Custom reduce:", total);

// ===================================
// 7. Function Composition
// ===================================
console.log("\n=== 7. Function Composition ===");

// Compose: right to left
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe: left to right
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const subtractThree = (x) => x - 3;

const composed = compose(subtractThree, multiplyByTwo, addOne);
const piped = pipe(addOne, multiplyByTwo, subtractThree);

console.log("Compose (5+1)*2-3:", composed(5)); // 9
console.log("Pipe (5+1)*2-3:", piped(5)); // 9

// ===================================
// 8. Partial Application
// ===================================
console.log("\n=== 8. Partial Application ===");

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

// ===================================
// 9. Currying
// ===================================
console.log("\n=== 9. Currying ===");

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

const curriedAdd = curry((a, b, c) => a + b + c);

console.log("Curry all at once:", curriedAdd(1, 2, 3)); // 6
console.log("Curry step by step:", curriedAdd(1)(2)(3)); // 6
console.log("Curry mixed:", curriedAdd(1, 2)(3)); // 6
console.log("Curry mixed 2:", curriedAdd(1)(2, 3)); // 6

// ===================================
// 10. Memoization
// ===================================
console.log("\n=== 10. Memoization ===");

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("  Cache hit:", key);
      return cache.get(key);
    }

    console.log("  Computing:", key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveOperation = (n) => {
  // Simulate expensive calculation
  return n * n;
};

const memoizedOp = memoize(expensiveOperation);

console.log("First call (5):", memoizedOp(5));
console.log("Second call (5):", memoizedOp(5));
console.log("Third call (10):", memoizedOp(10));
console.log("Fourth call (5):", memoizedOp(5));

// ===================================
// 11. Debounce
// ===================================
console.log("\n=== 11. Debounce ===");

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 200);

console.log("Calling debounced function multiple times...");
debouncedLog("First");
debouncedLog("Second");
debouncedLog("Third"); // Only this one will log

// ===================================
// 12. Throttle
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Throttle ===");

  function throttle(fn, limit) {
    let inThrottle;

    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }

  const throttledLog = throttle((msg) => console.log("Throttled:", msg), 100);

  // Simulate rapid calls
  for (let i = 0; i < 5; i++) {
    throttledLog(`Call ${i}`);
  }
}, 400);

// ===================================
// 13. Once
// ===================================
setTimeout(() => {
  console.log("\n=== 13. Once ===");

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

  console.log("First call:", initialize());
  console.log("Second call:", initialize());
  console.log("Third call:", initialize());
}, 600);

// ===================================
// 14. Real-World Examples
// ===================================
setTimeout(() => {
  console.log("\n=== 14. Real-World Examples ===");

  // Data pipeline
  const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 35, active: true },
    { id: 4, name: "Alice", age: 28, active: true },
  ];

  const activeAdultNames = users
    .filter((u) => u.active)
    .filter((u) => u.age >= 25)
    .map((u) => u.name)
    .sort();

  console.log("Active adult names:", activeAdultNames);

  // Function factory for validators
  const createValidator =
    (rule) =>
    (value) =>
      rule(value);

  const isPositive = createValidator((n) => n > 0);
  const isNonEmpty = createValidator((s) => s.length > 0);
  const isEmail = createValidator((s) => s.includes("@"));

  console.log("Is 5 positive:", isPositive(5));
  console.log("Is '' non-empty:", isNonEmpty(""));
  console.log("Is email valid:", isEmail("test@example.com"));

  // Event handler factory
  const createClickHandler = (action) => (event) => {
    console.log(`${action} clicked!`);
    return action;
  };

  const submitHandler = createClickHandler("Submit");
  const cancelHandler = createClickHandler("Cancel");

  submitHandler({ type: "click" });
  cancelHandler({ type: "click" });
}, 800);

// ===================================
// 15. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 15. Best Practices ===");

  console.log(`
✅ BENEFITS:
   - Code reusability
   - Abstraction of logic
   - Functional composition
   - Declarative programming
   - Easier testing

💡 COMMON HOFs:
   - Array: map, filter, reduce, find, some, every
   - Custom: compose, pipe, curry, partial
   - Utility: debounce, throttle, memoize, once

📝 PATTERNS:
   - Factory functions
   - Function composition
   - Currying and partial application
   - Memoization for caching
`);

  console.log("✅ All higher-order function examples completed!");
}, 1000);
