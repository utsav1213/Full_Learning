# 🚀 try...catch...finally

A **comprehensive guide** to error handling in JavaScript — mastering `try...catch...finally` for robust applications.

---

## What is try...catch...finally?

Error handling mechanism that allows you to:

- **Try** code that might fail
- **Catch** errors when they occur
- **Finally** execute cleanup code regardless of success or failure

---

## 🌟 1. Basic Syntax

```js
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Always executes (optional)
}
```

### Example:

```js
try {
  console.log("Starting...");
  throw new Error("Something went wrong!");
  console.log("This won't run");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup done");
}
// Output:
// "Starting..."
// "Error caught: Something went wrong!"
// "Cleanup done"
```

---

## 🌟 2. try...catch (Without finally)

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error.message);
}
```

---

## 🌟 3. The catch Block

### Access error information:

```js
try {
  throw new Error("Custom error message");
} catch (error) {
  console.log(error.name); // "Error"
  console.log(error.message); // "Custom error message"
  console.log(error.stack); // Stack trace
}
```

### Error object properties:

- **`name`** - Error type (e.g., "Error", "TypeError")
- **`message`** - Error description
- **`stack`** - Stack trace (non-standard but widely supported)

---

## 🌟 4. The finally Block

`finally` **always executes**, whether an error occurred or not.

```js
try {
  console.log("Trying...");
  return "Success";
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Finally always runs!");
}
// Output:
// "Trying..."
// "Finally always runs!"
// Returns: "Success"
```

### Even with return:

```js
function test() {
  try {
    return "try";
  } finally {
    console.log("Finally executes before return");
  }
}

console.log(test());
// Output:
// "Finally executes before return"
// "try"
```

---

## 🌟 5. Common Error Types

### ReferenceError:

```js
try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log(error.name); // "ReferenceError"
  console.log(error.message); // "nonExistentVariable is not defined"
}
```

### TypeError:

```js
try {
  null.toString();
} catch (error) {
  console.log(error.name); // "TypeError"
  console.log(error.message); // "Cannot read property 'toString' of null"
}
```

### SyntaxError:

```js
try {
  eval("const x = ;"); // Invalid syntax
} catch (error) {
  console.log(error.name); // "SyntaxError"
}
```

### RangeError:

```js
try {
  const arr = new Array(-1); // Invalid array length
} catch (error) {
  console.log(error.name); // "RangeError"
}
```

---

## 🌟 6. Catching Specific Error Types

```js
try {
  // Some code
  throw new TypeError("Type error occurred");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Handling TypeError:", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("Handling ReferenceError");
  } else {
    console.log("Unknown error:", error);
  }
}
```

---

## 🌟 7. Re-throwing Errors

Catch an error, handle it partially, then re-throw:

```js
try {
  try {
    throw new Error("Inner error");
  } catch (error) {
    console.log("Caught in inner catch");
    throw error; // Re-throw to outer catch
  }
} catch (error) {
  console.log("Caught in outer catch:", error.message);
}
// Output:
// "Caught in inner catch"
// "Caught in outer catch: Inner error"
```

### Selective re-throwing:

```js
try {
  // Some operation
  throw new TypeError("Type error");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Handled TypeError");
  } else {
    throw error; // Re-throw other errors
  }
}
```

---

## 🌟 8. Nested try...catch

```js
try {
  console.log("Outer try");

  try {
    console.log("Inner try");
    throw new Error("Inner error");
  } catch (innerError) {
    console.log("Inner catch:", innerError.message);
    throw new Error("Outer error");
  }
} catch (outerError) {
  console.log("Outer catch:", outerError.message);
}
// Output:
// "Outer try"
// "Inner try"
// "Inner catch: Inner error"
// "Outer catch: Outer error"
```

---

## 🌟 9. Real-World Examples

### JSON parsing:

```js
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null;
  }
}

const result1 = parseJSON('{"name": "John"}'); // ✅ Works
const result2 = parseJSON("{invalid}"); // ❌ Returns null
```

### API call handling:

```js
async function fetchUser(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    throw error; // Re-throw for caller to handle
  } finally {
    console.log("API call completed");
  }
}
```

### File operations:

```js
function readConfig() {
  let file;

  try {
    file = openFile("config.json");
    const data = file.read();
    return JSON.parse(data);
  } catch (error) {
    console.error("Config error:", error.message);
    return getDefaultConfig();
  } finally {
    if (file) {
      file.close(); // Always close file
    }
  }
}
```

### Database transaction:

```js
async function transferMoney(from, to, amount) {
  try {
    await db.beginTransaction();

    await db.debit(from, amount);
    await db.credit(to, amount);

    await db.commit();
    console.log("Transfer successful");
  } catch (error) {
    await db.rollback();
    console.error("Transfer failed:", error.message);
    throw error;
  }
}
```

---

## 🌟 10. Error Handling Best Practices

### ✅ Be specific with error messages:

```js
try {
  if (!userId) {
    throw new Error("User ID is required");
  }
  if (typeof userId !== "string") {
    throw new TypeError("User ID must be a string");
  }
} catch (error) {
  console.error(error.message);
}
```

### ✅ Don't catch errors silently:

```js
// ❌ Bad
try {
  riskyOperation();
} catch (error) {
  // Silent failure - bad!
}

// ✅ Good
try {
  riskyOperation();
} catch (error) {
  console.error("Operation failed:", error);
  // Handle or log the error
}
```

### ✅ Use finally for cleanup:

```js
let connection;

try {
  connection = openDatabase();
  performOperations(connection);
} catch (error) {
  console.error("Database error:", error);
} finally {
  if (connection) {
    connection.close(); // Always cleanup
  }
}
```

---

## 🌟 11. try...catch with Async/Await

### Async function error handling:

```js
async function getData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
```

### Multiple async operations:

```js
async function processData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);

    return { user, posts, comments };
  } catch (error) {
    console.error("Processing failed:", error.message);
    return null;
  }
}
```

---

## 🌟 12. Optional catch Binding (ES2019)

You can omit the error parameter if you don't need it:

```js
// Old way
try {
  riskyOperation();
} catch (error) {
  // error is unused
  console.log("Something went wrong");
}

// New way (ES2019+)
try {
  riskyOperation();
} catch {
  console.log("Something went wrong");
}
```

---

## 🌟 13. Limitations of try...catch

### ❌ Doesn't catch asynchronous errors:

```js
// This won't work
try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch (error) {
  console.log("Won't catch"); // Never executes
}

// Use async/await instead
async function example() {
  try {
    await delay(1000);
    throw new Error("Async error");
  } catch (error) {
    console.log("Caught!"); // This works
  }
}
```

### ❌ Doesn't catch syntax errors in the same script:

```js
try {
  const x = ; // SyntaxError - can't be caught
} catch (error) {
  // Never executes
}
```

---

## 🌟 14. Global Error Handling

### Browser:

```js
window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global error:", message);
  return true; // Prevents default error handling
};

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});
```

### Node.js:

```js
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection:", reason);
});
```

---

## 🧠 Deep CS Understanding

### How try...catch Works:

1. **Try block** executes normally
2. If error occurs, **execution stops immediately**
3. **Stack unwinds** to find catch block
4. **Catch block** executes
5. **Finally block** always executes
6. Execution continues after try...catch

### Performance:

- try...catch has **minimal overhead** in modern engines
- Only significant cost when exception is actually thrown
- Throwing and catching is expensive, but rare in normal flow
- Don't use for control flow!

### Memory:

- Error objects contain stack traces (memory intensive)
- Modern engines optimize error handling
- No memory leaks from proper try...catch usage

---

## 🏆 FINAL SUMMARY

### ✔ `try` block contains code that might fail

### ✔ `catch` block handles errors

### ✔ `finally` block always executes (cleanup)

### ✔ Error object has `name`, `message`, `stack`

### ✔ Can catch specific error types with `instanceof`

### ✔ Can re-throw errors with `throw error`

### ✔ Works great with async/await

### ✔ `finally` runs even with `return` statements

### ✔ Can omit error parameter (ES2019+)

### ✔ Essential for robust error handling

---

## 🚀 Related Topics

- throw statement
- Error types
- Custom errors
- Async error handling
- Promise rejection
- Global error handlers
