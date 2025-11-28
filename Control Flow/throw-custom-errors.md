# 🚀 throw Statement (Custom Errors)

A **comprehensive guide** to the `throw` statement in JavaScript — creating and throwing custom errors for better error handling.

---

## What is the throw Statement?

The `throw` statement **creates and throws an exception** (error), stopping the normal execution flow and transferring control to the nearest `catch` block.

---

## 🌟 1. Basic Syntax

```js
throw expression;
```

You can throw any value, but it's best to throw **Error objects**.

### Example:

```js
throw new Error("Something went wrong!");
```

---

## 🌟 2. Throwing Different Values

### Throw a string:

```js
try {
  throw "Error message";
} catch (error) {
  console.log(error); // "Error message"
}
```

### Throw a number:

```js
try {
  throw 404;
} catch (error) {
  console.log(error); // 404
}
```

### Throw an object:

```js
try {
  throw { message: "Custom error", code: 500 };
} catch (error) {
  console.log(error.message); // "Custom error"
  console.log(error.code); // 500
}
```

### Throw Error object (BEST PRACTICE):

```js
try {
  throw new Error("This is the recommended way");
} catch (error) {
  console.log(error.name); // "Error"
  console.log(error.message); // "This is the recommended way"
  console.log(error.stack); // Stack trace
}
```

---

## 🌟 3. Built-in Error Types

JavaScript has several built-in error types:

### Error (Generic):

```js
throw new Error("Generic error");
```

### TypeError:

```js
throw new TypeError("Type error occurred");
```

### ReferenceError:

```js
throw new ReferenceError("Variable not defined");
```

### RangeError:

```js
throw new RangeError("Number out of range");
```

### SyntaxError:

```js
throw new SyntaxError("Invalid syntax");
```

### URIError:

```js
throw new URIError("Invalid URI");
```

### EvalError (rarely used):

```js
throw new EvalError("Eval error");
```

---

## 🌟 4. Custom Error Classes

Create your own error types by extending `Error`:

### Basic custom error:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (error) {
  console.log(error.name); // "ValidationError"
  console.log(error.message); // "Invalid input"
}
```

### Custom error with additional properties:

```js
class HTTPError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "HTTPError";
    this.statusCode = statusCode;
  }
}

try {
  throw new HTTPError("Not Found", 404);
} catch (error) {
  console.log(error.name); // "HTTPError"
  console.log(error.message); // "Not Found"
  console.log(error.statusCode); // 404
}
```

### Multiple custom error types:

```js
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionError";
  }
}

// Usage
try {
  if (!user.isAuthenticated) {
    throw new AuthenticationError("User not logged in");
  }
  if (!user.hasPermission) {
    throw new PermissionError("Access denied");
  }
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.log("Redirect to login");
  } else if (error instanceof PermissionError) {
    console.log("Show permission error");
  }
}
```

---

## 🌟 5. When to Throw Errors

### Input validation:

```js
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Throws error
} catch (error) {
  console.error(error.message);
}
```

### Precondition checking:

```js
function processUser(user) {
  if (!user) {
    throw new Error("User is required");
  }
  if (!user.id) {
    throw new Error("User ID is required");
  }
  if (!user.email) {
    throw new Error("User email is required");
  }

  // Process user...
}
```

### Business logic violations:

```js
function withdraw(account, amount) {
  if (amount <= 0) {
    throw new Error("Amount must be positive");
  }
  if (amount > account.balance) {
    throw new Error("Insufficient funds");
  }

  account.balance -= amount;
  return account.balance;
}
```

---

## 🌟 6. Real-World Examples

### API response handling:

```js
async function fetchUser(userId) {
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("User not found");
    }
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

try {
  const user = await fetchUser(123);
  console.log(user);
} catch (error) {
  console.error("Failed to fetch user:", error.message);
}
```

### Form validation:

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateForm(data) {
  if (!data.email) {
    throw new ValidationError("Email is required", "email");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new ValidationError("Invalid email format", "email");
  }

  if (!data.password || data.password.length < 8) {
    throw new ValidationError(
      "Password must be at least 8 characters",
      "password"
    );
  }

  return true;
}

try {
  validateForm({ email: "invalid", password: "123" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation error in ${error.field}: ${error.message}`);
  }
}
```

### State management:

```js
class StateError extends Error {
  constructor(message) {
    super(message);
    this.name = "StateError";
  }
}

class StateMachine {
  constructor() {
    this.state = "idle";
  }

  start() {
    if (this.state !== "idle") {
      throw new StateError(`Cannot start from state: ${this.state}`);
    }
    this.state = "running";
  }

  stop() {
    if (this.state !== "running") {
      throw new StateError(`Cannot stop from state: ${this.state}`);
    }
    this.state = "idle";
  }
}
```

---

## 🌟 7. Error Throwing Patterns

### Guard clauses:

```js
function processData(data) {
  if (!data) throw new Error("Data is required");
  if (!Array.isArray(data)) throw new TypeError("Data must be an array");
  if (data.length === 0) throw new Error("Data cannot be empty");

  // Process data...
}
```

### Factory pattern with errors:

```js
function createUser(type) {
  switch (type) {
    case "admin":
      return new AdminUser();
    case "regular":
      return new RegularUser();
    default:
      throw new Error(`Unknown user type: ${type}`);
  }
}
```

### Assertion pattern:

```js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function calculateDiscount(price, percentage) {
  assert(price > 0, "Price must be positive");
  assert(percentage >= 0 && percentage <= 100, "Invalid percentage");

  return price * (percentage / 100);
}
```

---

## 🌟 8. Error Context and Details

### Rich error information:

```js
class DetailedError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "DetailedError";
    this.details = details;
    this.timestamp = new Date();
  }
}

try {
  throw new DetailedError("Operation failed", {
    operation: "fetchData",
    params: { id: 123 },
    reason: "Network timeout",
  });
} catch (error) {
  console.log(error.message);
  console.log(error.details);
  console.log(error.timestamp);
}
```

---

## 🌟 9. Async Error Throwing

### In async functions:

```js
async function fetchData() {
  const response = await fetch("/api/data");

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

// Catch async errors
try {
  const data = await fetchData();
} catch (error) {
  console.error("Fetch failed:", error.message);
}
```

### Promise rejection:

```js
function loadUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("User ID is required"));
      return;
    }

    // Load user...
    resolve(user);
  });
}

loadUser()
  .then((user) => console.log(user))
  .catch((error) => console.error(error.message));
```

---

## 🌟 10. Best Practices

### ✅ Always throw Error objects:

```js
// ❌ Bad
throw "Something went wrong";

// ✅ Good
throw new Error("Something went wrong");
```

### ✅ Provide descriptive messages:

```js
// ❌ Bad
throw new Error("Error");

// ✅ Good
throw new Error("Failed to parse JSON: unexpected token at position 5");
```

### ✅ Create custom error types:

```js
// ✅ Better error handling
class ValidationError extends Error {}
class NetworkError extends Error {}
class AuthError extends Error {}
```

### ✅ Include context in errors:

```js
function processOrder(order) {
  if (!order.items || order.items.length === 0) {
    throw new Error(`Order ${order.id} has no items`);
  }
}
```

### ✅ Don't throw in inappropriate places:

```js
// ❌ Don't use errors for control flow
function isEven(num) {
  if (num % 2 === 0) return true;
  throw new Error("Number is odd"); // Bad!
}

// ✅ Use normal return values
function isEven(num) {
  return num % 2 === 0;
}
```

---

## 🌟 11. Common Mistakes

### ❌ Throwing without proper error objects:

```js
throw "error"; // String has no stack trace
```

### ❌ Not handling thrown errors:

```js
function riskyOperation() {
  throw new Error("Failed");
  // If not caught, crashes the program
}
```

### ❌ Throwing too many errors:

```js
// Don't throw for every small condition
// Use return values for expected scenarios
```

---

## 🧠 Deep CS Understanding

### How throw Works:

1. **Creates an exception**
2. **Stops current execution**
3. **Unwinds the call stack**
4. **Searches for catch block**
5. If no catch found → **unhandled exception**

### Performance:

- Throwing errors is **expensive**
- Stack trace creation takes time
- Should be used for **exceptional** cases, not control flow
- Modern engines optimize, but still costly

### Memory:

- Error objects contain stack traces (memory)
- Automatic garbage collection
- Deep stack traces can be large

---

## 🏆 FINAL SUMMARY

### ✔ `throw` creates and throws exceptions

### ✔ Can throw any value, but **Error objects** are best

### ✔ Built-in error types: Error, TypeError, ReferenceError, etc.

### ✔ Create **custom error classes** by extending Error

### ✔ Use for validation, preconditions, business logic violations

### ✔ Include descriptive messages and context

### ✔ Works with async/await and Promises

### ✔ Don't use for control flow (expensive!)

### ✔ Always provide stack traces (use Error objects)

### ✔ Essential for robust error handling

---

## 🚀 Related Topics

- try...catch...finally
- Error handling
- Custom error classes
- Async error handling
- Error propagation
- Defensive programming
