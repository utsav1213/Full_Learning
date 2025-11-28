# 🚀 Anonymous Functions

A **comprehensive guide** to anonymous functions in JavaScript — functions without names.

---

## What is an Anonymous Function?

An **anonymous function** is a function that doesn't have a name identifier. These functions are typically used as arguments to other functions or assigned to variables.

---

## 🌟 1. Basic Syntax

```js
function(parameters) {
  // Function body
  return value;
}
```

### Cannot be used alone:

```js
// ❌ This will cause an error!
function(x) {
  return x * 2;
}
// SyntaxError: Function statement requires a name
```

### Must be used in an expression:

```js
// ✅ Assigned to variable
const double = function (x) {
  return x * 2;
};

// ✅ Passed as argument
setTimeout(function () {
  console.log("Hello!");
}, 1000);

// ✅ Immediately invoked
(function () {
  console.log("I run immediately!");
})();
```

---

## 🌟 2. Common Use Cases

### As Function Expression:

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
```

### As Callback:

```js
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function (num) {
  return num * num;
});

console.log(squared); // [1, 4, 9, 16, 25]
```

### In Event Handlers:

```js
button.addEventListener("click", function (event) {
  console.log("Button clicked!");
});
```

### In setTimeout/setInterval:

```js
setTimeout(function () {
  console.log("Delayed message");
}, 2000);

const intervalId = setInterval(function () {
  console.log("Repeating message");
}, 1000);
```

---

## 🌟 3. Anonymous Functions in Array Methods

### map():

```js
const prices = [10, 20, 30, 40];

const withTax = prices.map(function (price) {
  return price * 1.1; // Add 10% tax
});

console.log(withTax); // [11, 22, 33, 44]
```

### filter():

```js
const ages = [15, 18, 21, 25, 30];

const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults); // [18, 21, 25, 30]
```

### reduce():

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum); // 15
```

### forEach():

```js
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: orange
```

### sort():

```js
const numbers = [5, 2, 8, 1, 9];

numbers.sort(function (a, b) {
  return a - b; // Ascending order
});

console.log(numbers); // [1, 2, 5, 8, 9]
```

---

## 🌟 4. IIFE (Immediately Invoked Function Expression)

### Basic IIFE:

```js
(function () {
  console.log("I execute immediately!");
})();
```

### With parameters:

```js
(function (name, age) {
  console.log(`${name} is ${age} years old`);
})("John", 30);
```

### Returning values:

```js
const result = (function () {
  const privateVar = "secret";
  return `The ${privateVar} is revealed!`;
})();

console.log(result); // "The secret is revealed!"
```

### Creating private scope:

```js
(function () {
  const privateCounter = 0;

  // This variable is not accessible outside
  console.log(privateCounter);
})();

// console.log(privateCounter); // ReferenceError
```

---

## 🌟 5. Anonymous Functions as Object Methods

```js
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
};

console.log(calculator.add(5, 3)); // 8
```

---

## 🌟 6. Higher-Order Functions

### Functions that return anonymous functions:

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Functions that accept anonymous functions:

```js
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const result = executeOperation(
  function (x, y) {
    return x + y;
  },
  10,
  5
);

console.log(result); // 15
```

---

## 🌟 7. Closures with Anonymous Functions

```js
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate counter)
```

### Private variables:

```js
const bankAccount = (function () {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function () {
      return balance;
    },
  };
})();

console.log(bankAccount.deposit(100)); // 100
console.log(bankAccount.withdraw(30)); // 70
console.log(bankAccount.getBalance()); // 70
```

---

## 🌟 8. Real-World Examples

### Async operations:

```js
fetch("https://api.example.com/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

### Event delegation:

```js
document.addEventListener("click", function (event) {
  if (event.target.matches(".button")) {
    console.log("Button clicked!");
  }
});
```

### Debouncing:

```js
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      callback.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");
searchInput.addEventListener(
  "input",
  debounce(function (event) {
    console.log("Searching:", event.target.value);
  }, 500)
);
```

### Module pattern:

```js
const app = (function () {
  let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };

  return {
    init: function () {
      console.log("App initialized");
    },
    getConfig: function () {
      return config;
    },
  };
})();

app.init();
```

---

## 🌟 9. Anonymous Functions vs Named Functions

### Anonymous Function:

```js
const greet = function (name) {
  return `Hello, ${name}`;
};

console.log(greet.name); // "greet" (inferred from variable)
```

### Named Function Expression:

```js
const greet = function greeting(name) {
  return `Hello, ${name}`;
};

console.log(greet.name); // "greeting"
```

### When anonymous causes issues:

```js
// Stack trace shows "anonymous"
const buggyFunc = function () {
  throw new Error("Something went wrong");
};

// Stack trace shows "myFunction"
const betterFunc = function myFunction() {
  throw new Error("Something went wrong");
};
```

---

## 🌟 10. Drawbacks of Anonymous Functions

### ❌ Harder to debug:

```js
const operations = [
  function () {
    throw new Error("Error 1");
  },
  function () {
    throw new Error("Error 2");
  },
  function () {
    throw new Error("Error 3");
  },
];

// Stack trace shows "anonymous" - hard to identify which one!
```

### ❌ Cannot self-reference:

```js
const countdown = function (n) {
  console.log(n);
  if (n > 0) {
    // Cannot call itself by name!
    // countdown(n - 1); // This works but relies on outer variable
  }
};
```

### ❌ Less readable in complex code:

```js
// Hard to understand
array
  .map(function (x) {
    return x * 2;
  })
  .filter(function (x) {
    return x > 10;
  })
  .reduce(function (a, b) {
    return a + b;
  });

// More readable
const double = function (x) {
  return x * 2;
};
const greaterThan10 = function (x) {
  return x > 10;
};
const sum = function (a, b) {
  return a + b;
};

array.map(double).filter(greaterThan10).reduce(sum);
```

---

## 🌟 11. Modern Alternative: Arrow Functions

Anonymous functions can be written more concisely with arrow functions:

### Traditional anonymous:

```js
const double = function (x) {
  return x * 2;
};

numbers.map(function (n) {
  return n * 2;
});
```

### Arrow function:

```js
const double = (x) => x * 2;

numbers.map((n) => n * 2);
```

### But arrow functions are always anonymous:

```js
const myFunc = () => {
  console.log("Hello");
};

console.log(myFunc.name); // "myFunc" (inferred)
```

---

## 🌟 12. Best Practices

### ✅ Use for simple callbacks:

```js
// ✅ Good for simple operations
[1, 2, 3].map(function (n) {
  return n * 2;
});
```

### ✅ Use IIFE for isolation:

```js
(function () {
  const privateVar = "secret";
  // Do something with privateVar
})();
```

### ❌ Avoid for complex logic:

```js
// ❌ Hard to understand and debug
const result = array.filter(function (x) {
  // 20 lines of complex logic
  // ...
});

// ✅ Better - named function
function isValid(x) {
  // 20 lines of complex logic
  // ...
}
const result = array.filter(isValid);
```

### ✅ Consider arrow functions for modern code:

```js
// Old way
numbers.map(function (n) {
  return n * 2;
});

// Modern way
numbers.map((n) => n * 2);
```

---

## 🧠 Deep CS Understanding

### Function Objects:

- Anonymous functions are still function objects
- Have prototype, call, apply, bind methods
- Stored in memory like any other function
- Name property may be inferred or empty string

### Debugging:

- Stack traces show "anonymous" or inferred name
- Makes debugging harder in complex applications
- Modern dev tools try to infer names from context
- Named functions always better for stack traces

### Memory:

- No memory difference vs named functions
- Closures work identically
- Garbage collected when no references remain
- Can be optimized by JIT compilers

### Performance:

- No performance difference vs named functions
- JIT optimizations apply equally
- Function creation cost is the same
- Call overhead is identical

---

## 🏆 FINAL SUMMARY

### ✔ Anonymous functions have no name identifier

### ✔ Must be used in expressions, not statements

### ✔ Commonly used as callbacks and event handlers

### ✔ Perfect for IIFE pattern

### ✔ Used in array methods (map, filter, reduce)

### ✔ Can create closures and private scope

### ✔ Harder to debug than named functions

### ✔ Cannot self-reference easily

### ✔ Arrow functions are modern alternative

### ✔ Use judiciously for simple, one-time operations

---

## 🚀 Related Topics

- Function expressions
- Arrow functions
- IIFE
- Closures
- Callbacks
- Higher-order functions
- Named function expressions
- Event handlers
