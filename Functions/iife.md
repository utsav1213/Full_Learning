# 🚀 IIFE (Immediately Invoked Function Expression)

A **comprehensive guide** to IIFE in JavaScript — functions that execute immediately after being defined.

---

## What is an IIFE?

An **IIFE (Immediately Invoked Function Expression)** is a function that runs as soon as it is defined. It's commonly used to create a private scope and avoid polluting the global namespace.

---

## 🌟 1. Basic Syntax

### Classic IIFE:

```js
(function () {
  console.log("I run immediately!");
})();
```

### Alternative syntax:

```js
(function () {
  console.log("Also runs immediately!");
})();
```

### Both are valid:

```js
// Style 1: Invoking parentheses outside
(function () {
  /* code */
})();

// Style 2: Invoking parentheses inside
(function () {
  /* code */
})();
```

---

## 🌟 2. Why Use IIFE?

### Create private scope:

```js
(function () {
  const privateVar = "secret";
  console.log(privateVar); // "secret"
})();

// console.log(privateVar); // ReferenceError
```

### Avoid global pollution:

```js
// ❌ Without IIFE - pollutes global scope
var counter = 0;
var increment = function () {
  counter++;
};

// ✅ With IIFE - private scope
(function () {
  var counter = 0;
  var increment = function () {
    counter++;
  };
})();
```

### Execute code once:

```js
(function () {
  console.log("Setup complete!");
  // Initialize app, load config, etc.
})();
```

---

## 🌟 3. IIFE with Parameters

### Passing arguments:

```js
(function (name, age) {
  console.log(`${name} is ${age} years old`);
})("John", 30);
// Output: "John is 30 years old"
```

### Multiple parameters:

```js
(function (a, b, c) {
  console.log(a + b + c);
})(1, 2, 3); // 6
```

### Using global objects:

```js
(function (window, document, undefined) {
  // Safely use window and document
  console.log(window.location);
})(window, document);
```

---

## 🌟 4. Returning Values from IIFE

### Basic return:

```js
const result = (function () {
  return "Hello from IIFE!";
})();

console.log(result); // "Hello from IIFE!"
```

### Returning objects:

```js
const calculator = (function () {
  let result = 0;

  return {
    add: function (num) {
      result += num;
      return this;
    },
    subtract: function (num) {
      result -= num;
      return this;
    },
    getResult: function () {
      return result;
    },
  };
})();

calculator.add(10).subtract(3);
console.log(calculator.getResult()); // 7
```

### Module pattern:

```js
const myModule = (function () {
  // Private variables
  let privateCounter = 0;
  const privateData = [];

  // Private functions
  function privateFunction() {
    return "This is private";
  }

  // Public API
  return {
    increment: function () {
      privateCounter++;
    },
    getCount: function () {
      return privateCounter;
    },
    addData: function (item) {
      privateData.push(item);
    },
  };
})();

myModule.increment();
console.log(myModule.getCount()); // 1
```

---

## 🌟 5. Named IIFE

### Useful for recursion:

```js
(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
})(5); // 120
```

### Better stack traces:

```js
(function initialize() {
  console.log("App initialized");
  // If error occurs, stack trace shows "initialize"
})();
```

---

## 🌟 6. Arrow Function IIFE

### Basic syntax:

```js
(() => {
  console.log("Arrow IIFE!");
})();
```

### With parameters:

```js
((name) => {
  console.log(`Hello, ${name}!`);
})("Alice");
```

### Returning values:

```js
const result = (() => {
  return 10 + 20;
})();

console.log(result); // 30
```

### Implicit return:

```js
const sum = ((a, b) => a + b)(5, 3);

console.log(sum); // 8
```

---

## 🌟 7. Classic Use Cases

### Module Pattern:

```js
const app = (function () {
  // Private state
  let isInitialized = false;
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };

  // Private methods
  function validateConfig() {
    return config.apiUrl && config.timeout > 0;
  }

  // Public API
  return {
    init: function () {
      if (!isInitialized && validateConfig()) {
        isInitialized = true;
        console.log("App initialized");
      }
    },
    getConfig: function () {
      return { ...config }; // Return copy
    },
  };
})();

app.init();
console.log(app.getConfig());
```

### Isolating jQuery code:

```js
(function ($) {
  $(document).ready(function () {
    $(".button").click(function () {
      console.log("Button clicked!");
    });
  });
})(jQuery);
```

### Creating private variables:

```js
const counter = (function () {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    getValue: () => count,
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2
counter.reset();
console.log(counter.getValue()); // 0
```

---

## 🌟 8. IIFE for Initialization

### One-time setup:

```js
(function () {
  // Load configuration
  const config = loadConfig();

  // Initialize database
  initDatabase(config);

  // Register event listeners
  registerEventListeners();

  console.log("App ready!");
})();
```

### Creating singletons:

```js
const database = (function () {
  let instance;

  function createInstance() {
    return {
      connect: function () {
        console.log("Database connected");
      },
      query: function (sql) {
        console.log("Executing:", sql);
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const db1 = database.getInstance();
const db2 = database.getInstance();
console.log(db1 === db2); // true (same instance)
```

---

## 🌟 9. IIFE with Closures

### Counter with closure:

```js
const createCounter = (function () {
  let id = 0;

  return function (startValue = 0) {
    let count = startValue;
    const counterId = ++id;

    return {
      id: counterId,
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count,
    };
  };
})();

const counter1 = createCounter(10);
const counter2 = createCounter(20);

console.log(counter1.increment()); // 11
console.log(counter2.increment()); // 21
console.log(counter1.id); // 1
console.log(counter2.id); // 2
```

---

## 🌟 10. IIFE in Loops (Classic Problem)

### The problem (before ES6):

```js
// ❌ This doesn't work as expected with var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Always logs 3!
  }, 100);
}
```

### Solution with IIFE:

```js
// ✅ IIFE creates new scope for each iteration
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // Logs 0, 1, 2
    }, 100);
  })(i);
}
```

### Modern solution (ES6):

```js
// ✅ Using let creates block scope
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs 0, 1, 2
  }, 100);
}
```

---

## 🌟 11. Unary Operators with IIFE

### Using void:

```js
void (function () {
  console.log("Executed with void");
})();
```

### Using !:

```js
!(function () {
  console.log("Executed with !");
})();
```

### Using +:

```js
+(function () {
  console.log("Executed with +");
})();
```

### Using -:

```js
-(function () {
  console.log("Executed with -");
})();
```

### Using ~:

```js
~(function () {
  console.log("Executed with ~");
})();
```

**Note:** These are just alternative syntaxes. The classic `()()` is more readable.

---

## 🌟 12. Real-World Examples

### Feature detection:

```js
const browserFeatures = (function () {
  const hasLocalStorage = (function () {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch (e) {
      return false;
    }
  })();

  const hasGeolocation = "geolocation" in navigator;

  return {
    localStorage: hasLocalStorage,
    geolocation: hasGeolocation,
  };
})();

console.log(browserFeatures);
```

### Creating namespace:

```js
const MyApp = (function () {
  // Private
  const version = "1.0.0";

  function log(message) {
    console.log(`[MyApp v${version}] ${message}`);
  }

  // Public
  return {
    utils: {
      formatDate: function (date) {
        return date.toISOString();
      },
    },
    api: {
      get: function (url) {
        log(`GET ${url}`);
      },
    },
  };
})();

MyApp.api.get("/users");
```

### Configuration with defaults:

```js
const app = (function (config) {
  const defaults = {
    theme: "light",
    language: "en",
    timeout: 5000,
  };

  const settings = { ...defaults, ...config };

  return {
    getSettings: () => settings,
    updateSetting: (key, value) => {
      if (key in settings) {
        settings[key] = value;
      }
    },
  };
})({ theme: "dark", timeout: 3000 });

console.log(app.getSettings());
```

---

## 🌟 13. IIFE Best Practices

### ✅ Use for module pattern:

```js
const myModule = (function () {
  // Private scope
  return {
    // Public API
  };
})();
```

### ✅ Use semicolon before IIFE:

```js
const x = 5;

(function () {
  console.log("Safe IIFE");
})();
```

### ❌ Don't overuse in modern code:

```js
// ❌ Old way with IIFE
const result = (function () {
  const data = processData();
  return data;
})();

// ✅ Modern way with block scope
{
  const data = processData();
  var result = data;
}
```

### ✅ Use for one-time initialization:

```js
(function () {
  // Setup code that runs once
  initializeApp();
})();
```

---

## 🌟 14. Modern Alternatives

### Block scope (ES6):

```js
// Instead of IIFE
(function () {
  const temp = "private";
})();

// Use block scope
{
  const temp = "private";
}
```

### Modules (ES6):

```js
// Instead of IIFE module pattern
const myModule = (function () {
  return { method: () => {} };
})();

// Use ES6 modules
export const method = () => {};
```

### Async IIFE:

```js
(async function () {
  const data = await fetchData();
  console.log(data);
})();

// Or with arrow function
(async () => {
  const data = await fetchData();
  console.log(data);
})();
```

---

## 🧠 Deep CS Understanding

### Execution Context:

- IIFE creates new execution context immediately
- Variables inside IIFE have function scope
- Execution context destroyed after IIFE completes
- Closures can keep references alive

### Memory:

- Variables inside IIFE eligible for GC after execution
- Unless captured by closures
- Returned objects stay in memory
- Private variables inaccessible but not deleted if referenced

### Parsing:

- Parentheses force function expression
- Function statement requires name
- Expression can be anonymous
- Immediately invoked after creation

### Performance:

- Minimal overhead compared to regular functions
- One-time execution cost
- JIT optimizations still apply
- No repeated function creation cost

---

## 🏆 FINAL SUMMARY

### ✔ Executes immediately after definition

### ✔ Creates private scope

### ✔ Avoids global namespace pollution

### ✔ Useful for module pattern

### ✔ Can accept parameters and return values

### ✔ Can be named or anonymous

### ✔ Arrow function syntax also works

### ✔ Less needed in modern ES6+ code

### ✔ Still useful for initialization code

### ✔ Classic pattern in JavaScript

---

## 🚀 Related Topics

- Function expressions
- Anonymous functions
- Closures
- Module pattern
- Block scope
- ES6 modules
- Private variables
- Namespace pattern
