# 🚀 Function Expression

A **comprehensive guide** to function expressions in JavaScript — defining functions as values assigned to variables.

---

## What is a Function Expression?

A **function expression** defines a function as part of an expression, typically by assigning it to a variable. Unlike function declarations, function expressions are **not hoisted**.

---

## 🌟 1. Basic Syntax

```js
const functionName = function (parameters) {
  // Function body
  return value;
};
```

### Example:

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
```

---

## 🌟 2. Named vs Anonymous Function Expressions

### Anonymous Function Expression:

```js
const add = function (a, b) {
  return a + b;
};

console.log(add.name); // "add" (inferred from variable name)
```

### Named Function Expression (NFE):

```js
const multiply = function mult(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12
console.log(multiply.name); // "mult"
// console.log(mult(3, 4));   // ReferenceError: mult is not defined
```

**The internal name is only accessible within the function itself:**

```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use 'fact' internally
};

console.log(factorial(5)); // 120
// console.log(fact(5));   // ReferenceError
```

---

## 🌟 3. Key Characteristics

### ❌ Not Hoisted:

```js
// This will fail!
console.log(multiply(2, 3)); // TypeError: multiply is not a function

const multiply = function (x, y) {
  return x * y;
};
```

### ✔ Assigned to Variables:

```js
const divide = function (a, b) {
  return a / b;
};

// Can be reassigned (if using let)
let operation = function (x) {
  return x * 2;
};
operation = function (x) {
  return x * 3;
};
```

### ✔ Can be Anonymous:

```js
const sum = function (a, b) {
  return a + b;
};
```

---

## 🌟 4. Function Expression vs Function Declaration

### Comparison:

| Feature                 | Declaration               | Expression                  |
| ----------------------- | ------------------------- | --------------------------- |
| Syntax                  | `function name() {}`      | `const name = function(){}` |
| Hoisting                | ✅ Yes                    | ❌ No                       |
| Name required           | ✅ Yes                    | ❌ No                       |
| Can call before defined | ✅ Yes                    | ❌ No                       |
| Variable assignment     | ❌ Creates binding        | ✅ Assigned to variable     |
| Use case                | General purpose functions | Conditional, callbacks      |

### Declaration:

```js
function declared() {
  return "I'm hoisted!";
}

console.log(declared()); // Works before definition
```

### Expression:

```js
const expressed = function () {
  return "I'm not hoisted!";
};

// console.log(expressed()); // Must be called after definition
```

---

## 🌟 5. Why Use Function Expressions?

### ✔ Conditional function creation:

```js
const userType = "admin";

const getPermissions =
  userType === "admin"
    ? function () {
        return ["read", "write", "delete"];
      }
    : function () {
        return ["read"];
      };

console.log(getPermissions()); // ["read", "write", "delete"]
```

### ✔ Callbacks:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
```

### ✔ Closures:

```js
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### ✔ Object methods:

```js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(10, 5)); // 15
```

---

## 🌟 6. Function Expressions with const, let, var

### With const (recommended):

```js
const greet = function (name) {
  return `Hello, ${name}`;
};

// greet = function() {}; // Error: Assignment to constant variable
```

### With let:

```js
let operation = function (x) {
  return x * 2;
};

// Can reassign
operation = function (x) {
  return x * 3;
};
```

### With var (not recommended):

```js
var oldStyle = function () {
  return "Old way";
};

// Variable is hoisted, but not the function
console.log(typeof oldStyle); // "undefined" if called before
```

---

## 🌟 7. Real-World Examples

### Event handlers:

```js
const button = document.getElementById("myButton");

button.addEventListener("click", function (event) {
  console.log("Button clicked!");
  event.preventDefault();
});
```

### Array methods:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

const names = users.map(function (user) {
  return user.name;
});

const adults = users.filter(function (user) {
  return user.age >= 18;
});

const totalAge = users.reduce(function (sum, user) {
  return sum + user.age;
}, 0);
```

### Timeout/Interval:

```js
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

const intervalId = setInterval(function () {
  console.log("This runs every second");
}, 1000);
```

### Module pattern:

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

---

## 🌟 8. Named Function Expressions (NFE)

Named function expressions have an internal name that's only accessible within the function.

### Benefits:

**1. Better stack traces:**

```js
const divide = function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};

// Error stack will show "divideNumbers" instead of "anonymous"
```

**2. Recursion:**

```js
const fibonacci = function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // Using internal name
};

console.log(fibonacci(10)); // 55
```

**3. Self-reference:**

```js
const countdown = function count(n) {
  console.log(n);
  if (n > 0) {
    setTimeout(function () {
      count(n - 1); // Self-reference
    }, 1000);
  }
};

countdown(5);
```

---

## 🌟 9. Function Expression as Arguments

### Passing functions:

```js
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const result = executeOperation(
  function (x, y) {
    return x * y;
  },
  5,
  3
);

console.log(result); // 15
```

### Higher-order functions:

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

---

## 🌟 10. Function Expressions in Objects

### Object literal:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName()); // "John Doe"
```

### Dynamic methods:

```js
const mathOperations = {};

mathOperations.add = function (a, b) {
  return a + b;
};

mathOperations.multiply = function (a, b) {
  return a * b;
};

console.log(mathOperations.add(5, 3)); // 8
```

---

## 🌟 11. Immediately Invoked Function Expression (IIFE)

Function expressions can be immediately invoked:

```js
(function () {
  console.log("I run immediately!");
})();
```

### With parameters:

```js
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");
```

### Returning values:

```js
const result = (function (a, b) {
  return a + b;
})(5, 3);

console.log(result); // 8
```

---

## 🌟 12. Hoisting Behavior

### Function Expression (NOT hoisted):

```js
console.log(typeof myFunc); // "undefined"

const myFunc = function () {
  return "Hello";
};

console.log(typeof myFunc); // "function"
```

### What happens:

```js
// During hoisting:
let myFunc; // Variable is hoisted (in TDZ with let/const)

console.log(myFunc); // ReferenceError (TDZ)

myFunc = function () {
  return "Hello";
};
```

---

## 🌟 13. Common Patterns

### Factory pattern:

```js
const createUser = function (name, email) {
  return {
    name,
    email,
    greet: function () {
      return `Hello, I'm ${this.name}`;
    },
  };
};

const user = createUser("John", "john@example.com");
console.log(user.greet()); // "Hello, I'm John"
```

### Callback pattern:

```js
const fetchData = function (url, callback) {
  // Simulate async operation
  setTimeout(function () {
    const data = { id: 1, name: "John" };
    callback(null, data);
  }, 1000);
};

fetchData("/api/user", function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

### Configuration pattern:

```js
const createApp = function (config) {
  return {
    start: function () {
      console.log(`Starting app on port ${config.port}`);
    },
    stop: function () {
      console.log("Stopping app");
    },
  };
};

const app = createApp({ port: 3000 });
app.start();
```

---

## 🌟 14. Best Practices

### ✅ Use const for function expressions:

```js
// ✅ Good - prevents reassignment
const greet = function (name) {
  return `Hello, ${name}`;
};

// ❌ Avoid - allows reassignment
let greet2 = function (name) {
  return `Hi, ${name}`;
};
```

### ✅ Use named function expressions for recursion:

```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
```

### ✅ Prefer arrow functions for callbacks:

```js
// Modern way
const doubled = numbers.map((num) => num * 2);

// Old way
const doubled2 = numbers.map(function (num) {
  return num * 2;
});
```

---

## 🧠 Deep CS Understanding

### Memory:

- Function expression creates function object when executed
- Stored in the variable's memory location
- If in outer function, can form closures
- Garbage collected when no references remain

### Execution:

1. Variable declared (hoisted to top)
2. Function object created during execution
3. Function assigned to variable
4. Can be invoked after assignment

### Performance:

- Same performance as function declarations
- JIT compilers optimize equally
- Named expressions slightly better for debugging
- No runtime overhead for using expressions

---

## 🏆 FINAL SUMMARY

### ✔ Function expressions assign functions to variables

### ✔ Not hoisted (unlike declarations)

### ✔ Can be anonymous or named

### ✔ Must be defined before use

### ✔ Perfect for callbacks, closures, conditional creation

### ✔ Can be immediately invoked (IIFE)

### ✔ Used in object methods and array methods

### ✔ Named function expressions help with debugging

### ✔ Use `const` to prevent reassignment

### ✔ Modern alternative: arrow functions

---

## 🚀 Related Topics

- Function declarations
- Arrow functions
- IIFE
- Closures
- Callbacks
- Higher-order functions
- Hoisting
- Anonymous functions
