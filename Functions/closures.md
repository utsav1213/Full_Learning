# 🚀 Closures

A **comprehensive guide** to closures in JavaScript — one of the most powerful and fundamental concepts in the language.

---

## What is a Closure?

A **closure** is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. Closures are created every time a function is created.

---

## 🌟 1. Basic Concept

### Simple closure:

```js
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message); // Accesses outer variable
  }

  return inner;
}

const myFunc = outer();
myFunc(); // "Hello" - still has access to 'message'!
```

### Why this works:

```js
function createGreeter(greeting) {
  // 'greeting' is in outer scope

  return function (name) {
    // Inner function "closes over" greeting
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
```

---

## 🌟 2. Closure Scope Chain

### Multiple levels:

```js
const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function middle() {
    const middleVar = "middle";

    function inner() {
      const innerVar = "inner";

      console.log(innerVar); // "inner"
      console.log(middleVar); // "middle"
      console.log(outerVar); // "outer"
      console.log(globalVar); // "global"
    }

    return inner;
  }

  return middle;
}

const myFunc = outer()();
myFunc();
```

---

## 🌟 3. Practical Use Cases

### Private variables:

```js
function createCounter() {
  let count = 0; // Private variable

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
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (private!)
```

### Function factories:

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
```

### Data privacy:

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid amount";
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance()); // 1300
// console.log(account.balance);     // undefined
```

---

## 🌟 4. Closure in Loops (Classic Problem)

### The problem with var:

```js
// ❌ Doesn't work as expected
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Always logs 3!
  }, 1000);
}
```

### Solution 1: IIFE

```js
// ✅ Creates new scope for each iteration
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // Logs 0, 1, 2
    }, 1000);
  })(i);
}
```

### Solution 2: let (ES6)

```js
// ✅ Block scope creates closure for each iteration
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs 0, 1, 2
  }, 1000);
}
```

---

## 🌟 5. Module Pattern

### Basic module:

```js
const calculator = (function () {
  // Private variables
  let result = 0;

  // Private function
  function log(message) {
    console.log(`[Calculator] ${message}`);
  }

  // Public API
  return {
    add: function (num) {
      result += num;
      log(`Added ${num}, result: ${result}`);
      return this;
    },
    subtract: function (num) {
      result -= num;
      log(`Subtracted ${num}, result: ${result}`);
      return this;
    },
    multiply: function (num) {
      result *= num;
      log(`Multiplied by ${num}, result: ${result}`);
      return this;
    },
    getResult: function () {
      return result;
    },
    reset: function () {
      result = 0;
      log("Reset");
      return this;
    },
  };
})();

calculator.add(10).multiply(2).subtract(5);
console.log(calculator.getResult()); // 15
```

### Revealing module pattern:

```js
const myModule = (function () {
  // Private
  let privateVar = "secret";

  function privateMethod() {
    return `Private: ${privateVar}`;
  }

  function publicMethod() {
    return privateMethod();
  }

  function setPrivateVar(value) {
    privateVar = value;
  }

  // Reveal public interface
  return {
    public: publicMethod,
    setSecret: setPrivateVar,
  };
})();

console.log(myModule.public()); // "Private: secret"
myModule.setSecret("new secret");
console.log(myModule.public()); // "Private: new secret"
```

---

## 🌟 6. Closures with Event Handlers

### Problem: Lost context

```js
function setupButtons() {
  const buttons = document.querySelectorAll(".btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      console.log(`Button ${i} clicked`);
      // Always logs "Button 3 clicked" (or last i value)
    });
  }
}
```

### Solution: Closure

```js
function setupButtons() {
  const buttons = document.querySelectorAll(".btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      console.log(`Button ${i} clicked`);
      // Correctly logs button index
    });
  }
}
```

### Alternative: IIFE

```js
function setupButtons() {
  const buttons = document.querySelectorAll(".btn");

  for (var i = 0; i < buttons.length; i++) {
    (function (index) {
      buttons[index].addEventListener("click", function () {
        console.log(`Button ${index} clicked`);
      });
    })(i);
  }
}
```

---

## 🌟 7. Closures for Memoization

### Cache expensive calculations:

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("From cache");
      return cache[key];
    }

    console.log("Calculating...");
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log(memoizedFib(40)); // Slow first time
console.log(memoizedFib(40)); // Instant from cache
```

### Memoized factorial:

```js
const factorial = (function () {
  const cache = {};

  return function calc(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n <= 1) return 1;

    const result = n * calc(n - 1);
    cache[n] = result;

    return result;
  };
})();

console.log(factorial(5)); // 120
console.log(factorial(6)); // 720 (uses cached 5!)
```

---

## 🌟 8. Partial Application and Currying

### Partial application:

```js
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");
const sayHi = partial(greet, "Hi");

console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane")); // "Hi, Jane!"
```

### Currying:

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

---

## 🌟 9. Closures for Debounce/Throttle

### Debounce:

```js
function debounce(fn, delay) {
  let timeoutId; // Closure variable

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");

const handleSearch = debounce(function (event) {
  console.log("Searching:", event.target.value);
}, 500);

searchInput.addEventListener("input", handleSearch);
```

### Throttle:

```js
function throttle(fn, limit) {
  let inThrottle; // Closure variable

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

const handleScroll = throttle(function () {
  console.log("Scroll position:", window.scrollY);
}, 1000);

window.addEventListener("scroll", handleScroll);
```

---

## 🌟 10. Closures in React

### Custom hooks:

```js
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // These functions close over count and setCount
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### Event handlers:

```js
function TodoList() {
  const [todos, setTodos] = useState([]);

  // Closure over todos and setTodos
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

---

## 🌟 11. Common Mistakes

### ❌ Mistake 1: Accidental global variables

```js
function createCounter() {
  count = 0; // ❌ No var/let/const - creates global!

  return function () {
    return ++count;
  };
}
```

### ❌ Mistake 2: Loop variable confusion

```js
// ❌ All closures reference same variable
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}

console.log(functions[0]()); // 3
console.log(functions[1]()); // 3
console.log(functions[2]()); // 3
```

### ❌ Mistake 3: Memory leaks

```js
function createHeavyClosure() {
  const hugeData = new Array(1000000).fill("data");

  return function () {
    // Even if we don't use hugeData, it's kept in memory!
    console.log("Hello");
  };
}

// hugeData stays in memory as long as closure exists
const myClosure = createHeavyClosure();
```

---

## 🌟 12. Memory and Performance

### Memory considerations:

```js
// ❌ Creates many closures
for (let i = 0; i < 1000; i++) {
  element.addEventListener("click", function () {
    console.log(i);
  });
}

// ✅ Reuse single function
function handleClick(event) {
  console.log(this.dataset.index);
}

for (let i = 0; i < 1000; i++) {
  element.dataset.index = i;
  element.addEventListener("click", handleClick);
}
```

### Cleaning up closures:

```js
function setupTimer() {
  let timeoutId;

  return {
    start: function () {
      timeoutId = setTimeout(() => {
        console.log("Timer fired!");
      }, 1000);
    },
    cancel: function () {
      clearTimeout(timeoutId); // Clean up!
    },
  };
}

const timer = setupTimer();
timer.start();
timer.cancel(); // Prevent memory leak
```

---

## 🌟 13. Advanced Patterns

### Once function:

```js
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

initialize(); // Logs "Initializing..."
initialize(); // Returns cached result
initialize(); // Returns cached result
```

### After function:

```js
function after(count, fn) {
  let callCount = 0;

  return function (...args) {
    callCount++;
    if (callCount >= count) {
      return fn.apply(this, args);
    }
  };
}

const afterThreeCalls = after(3, () => {
  console.log("Called after 3 times!");
});

afterThreeCalls(); // Nothing
afterThreeCalls(); // Nothing
afterThreeCalls(); // "Called after 3 times!"
```

### Before function:

```js
function before(count, fn) {
  let callCount = 0;
  let result;

  return function (...args) {
    if (callCount < count) {
      result = fn.apply(this, args);
      callCount++;
    }
    return result;
  };
}

const beforeThreeCalls = before(3, (x) => {
  console.log(`Called with ${x}`);
  return x * 2;
});

console.log(beforeThreeCalls(5)); // Called, returns 10
console.log(beforeThreeCalls(10)); // Called, returns 20
console.log(beforeThreeCalls(15)); // Called, returns 30
console.log(beforeThreeCalls(20)); // Not called, returns 30
```

---

## 🧠 Deep CS Understanding

### Lexical Scoping:

- Closures based on lexical (static) scope
- Scope determined at write-time, not runtime
- Inner functions have access to outer scope
- Scope chain traversed until variable found

### Execution Context:

- Each function call creates execution context
- Context includes local variables and scope chain
- Closures maintain reference to outer context
- Prevents garbage collection of outer variables

### Memory:

- Closed-over variables stored in heap
- Kept alive as long as closure exists
- Can cause memory leaks if not careful
- Modern engines optimize closure performance

### Performance:

- Minimal overhead in modern JavaScript
- JIT compilers optimize closures
- Scope chain lookup can be slow for deep nesting
- Inline caching improves performance

---

## 🏆 FINAL SUMMARY

### ✔ Function + its lexical scope

### ✔ Inner function accesses outer variables

### ✔ Created every time function is created

### ✔ Enable data privacy and encapsulation

### ✔ Power module pattern and factories

### ✔ Essential for callbacks and async code

### ✔ Enable memoization and caching

### ✔ Support currying and partial application

### ✔ Be aware of memory implications

### ✔ One of JavaScript's most powerful features

---

## 🚀 Related Topics

- Scope and scope chain
- Lexical scoping
- IIFE
- Module pattern
- Function factories
- Callbacks
- Higher-order functions
- Memory management
