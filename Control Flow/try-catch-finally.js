/**
 * 🚀 Try...Catch...Finally - JavaScript Implementation
 * Comprehensive examples of error handling in JavaScript
 */

// ===================================
// 1. Basic Try...Catch
// ===================================
console.log("=== 1. Basic Try...Catch ===");

try {
  // Code that might throw an error
  const result = JSON.parse('{"name": "John"}');
  console.log("Parsed:", result);
} catch (error) {
  console.log("Error occurred:", error.message);
}

// With error
try {
  const result = JSON.parse("invalid json");
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error.message);
}

// ===================================
// 2. Try...Catch...Finally
// ===================================
console.log("\n=== 2. Try...Catch...Finally ===");

function processData(data) {
  console.log("Starting process...");
  
  try {
    console.log("Processing...");
    if (!data) {
      throw new Error("No data provided");
    }
    console.log("Data processed:", data);
    return "Success";
  } catch (error) {
    console.log("Error:", error.message);
    return "Failed";
  } finally {
    console.log("Cleanup: Always runs!");
  }
}

console.log("Result 1:", processData({ id: 1 }));
console.log("\nResult 2:", processData(null));

// ===================================
// 3. Error Object Properties
// ===================================
console.log("\n=== 3. Error Object Properties ===");

try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack (first 200 chars):", error.stack?.substring(0, 200));
}

// ===================================
// 4. Built-in Error Types
// ===================================
console.log("\n=== 4. Built-in Error Types ===");

// ReferenceError
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// TypeError
try {
  null.toString();
} catch (error) {
  console.log("TypeError:", error.message);
}

// SyntaxError (caught during eval)
try {
  eval("var x = {");
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// RangeError
try {
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.message);
}

// ===================================
// 5. Catching Specific Error Types
// ===================================
console.log("\n=== 5. Catching Specific Error Types ===");

function handleError(error) {
  if (error instanceof TypeError) {
    console.log("Type Error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("Reference Error:", error.message);
  } else if (error instanceof SyntaxError) {
    console.log("Syntax Error:", error.message);
  } else {
    console.log("Unknown Error:", error.message);
  }
}

try {
  null.method();
} catch (error) {
  handleError(error);
}

// ===================================
// 6. Nested Try...Catch
// ===================================
console.log("\n=== 6. Nested Try...Catch ===");

function innerOperation() {
  throw new Error("Inner error");
}

function outerOperation() {
  try {
    try {
      innerOperation();
    } catch (innerError) {
      console.log("Caught in inner:", innerError.message);
      throw new Error("Re-thrown from inner");
    }
  } catch (outerError) {
    console.log("Caught in outer:", outerError.message);
  }
}

outerOperation();

// ===================================
// 7. Rethrowing Errors
// ===================================
console.log("\n=== 7. Rethrowing Errors ===");

function validateInput(input) {
  try {
    if (typeof input !== "number") {
      throw new TypeError("Input must be a number");
    }
    if (input < 0) {
      throw new RangeError("Input must be positive");
    }
    return input * 2;
  } catch (error) {
    console.log(`Validation failed: ${error.message}`);
    throw error; // Rethrow for caller to handle
  }
}

try {
  validateInput("not a number");
} catch (error) {
  console.log("Caller caught:", error.name);
}

// ===================================
// 8. Finally with Return
// ===================================
console.log("\n=== 8. Finally with Return ===");

function testFinallyReturn() {
  try {
    console.log("Try block");
    return "from try";
  } finally {
    console.log("Finally block runs before return");
  }
}

console.log("Returned:", testFinallyReturn());

// Finally can override return!
function finallyOverride() {
  try {
    return "from try";
  } finally {
    return "from finally"; // This overrides!
  }
}

console.log("Finally override:", finallyOverride());

// ===================================
// 9. Try Without Catch
// ===================================
console.log("\n=== 9. Try Without Catch (Just Finally) ===");

function mustCleanup() {
  try {
    console.log("Doing work...");
    // Even without catch, finally runs
    return "completed";
  } finally {
    console.log("Cleanup happens");
  }
}

console.log("Result:", mustCleanup());

// ===================================
// 10. Async Error Handling
// ===================================
console.log("\n=== 10. Async Error Handling ===");

// With async/await
async function fetchData() {
  try {
    // Simulated async operation
    const response = await Promise.reject(new Error("Network error"));
    return response;
  } catch (error) {
    console.log("Async error:", error.message);
    return null;
  } finally {
    console.log("Async cleanup");
  }
}

// With Promise.catch
function fetchWithPromise() {
  return Promise.reject(new Error("Promise error"))
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.log("Promise catch:", error.message);
    })
    .finally(() => {
      console.log("Promise finally");
    });
}

(async () => {
  await fetchData();
  await fetchWithPromise();
})();

// ===================================
// 11. Error Wrapping
// ===================================
console.log("\n=== 11. Error Wrapping ===");

class DatabaseError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = "DatabaseError";
    this.cause = cause;
  }
}

function queryDatabase(query) {
  try {
    // Simulate low-level error
    throw new Error("Connection refused");
  } catch (lowLevelError) {
    // Wrap in more meaningful error
    throw new DatabaseError(
      `Failed to execute query: ${query}`,
      lowLevelError
    );
  }
}

try {
  queryDatabase("SELECT * FROM users");
} catch (error) {
  console.log("Error:", error.message);
  console.log("Original cause:", error.cause?.message);
}

// ===================================
// 12. Global Error Handlers
// ===================================
console.log("\n=== 12. Global Error Handlers (Node.js) ===");

// Uncaught exception handler
process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception:", error.message);
  // In real apps: log, cleanup, exit gracefully
});

// Unhandled promise rejection
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection:", reason);
});

console.log("Global handlers registered (for demo purposes)");

// ===================================
// 13. Resource Cleanup Pattern
// ===================================
console.log("\n=== 13. Resource Cleanup Pattern ===");

class FileHandler {
  constructor(filename) {
    this.filename = filename;
    this.isOpen = false;
  }
  
  open() {
    console.log(`Opening ${this.filename}`);
    this.isOpen = true;
  }
  
  read() {
    if (!this.isOpen) throw new Error("File not open");
    console.log(`Reading ${this.filename}`);
    return "file contents";
  }
  
  close() {
    console.log(`Closing ${this.filename}`);
    this.isOpen = false;
  }
}

function processFile(filename) {
  const file = new FileHandler(filename);
  
  try {
    file.open();
    const data = file.read();
    console.log("Data:", data);
    // Simulate error during processing
    if (filename.includes("error")) {
      throw new Error("Processing error");
    }
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    file.close(); // Always close the file!
  }
}

processFile("normal.txt");
console.log();
processFile("error.txt");

// ===================================
// 14. Validation Pattern
// ===================================
console.log("\n=== 14. Validation Pattern ===");

function validateUser(user) {
  const errors = [];
  
  try {
    if (!user) {
      throw new Error("User is required");
    }
    
    if (!user.name || user.name.length < 2) {
      errors.push("Name must be at least 2 characters");
    }
    
    if (!user.email || !user.email.includes("@")) {
      errors.push("Valid email is required");
    }
    
    if (!user.age || user.age < 18) {
      errors.push("Must be 18 or older");
    }
    
    if (errors.length > 0) {
      const validationError = new Error("Validation failed");
      validationError.details = errors;
      throw validationError;
    }
    
    return { valid: true, user };
  } catch (error) {
    return { 
      valid: false, 
      message: error.message, 
      details: error.details || [] 
    };
  }
}

console.log(validateUser({ name: "J", email: "invalid", age: 16 }));
console.log(validateUser({ name: "John", email: "john@example.com", age: 25 }));

// ===================================
// 15. Best Practices
// ===================================
console.log("\n=== 15. Best Practices Summary ===");

console.log(`
✅ DO:
   - Catch specific errors when possible
   - Use finally for cleanup (close files, connections)
   - Create custom error classes for domains
   - Include helpful error messages
   - Log errors with context
   - Handle async errors properly

❌ DON'T:
   - Catch errors without handling them
   - Use empty catch blocks
   - Catch errors just to log and rethrow
   - Ignore async errors
   - Use try...catch for flow control

💡 PATTERNS:
   - Resource cleanup with finally
   - Error wrapping for abstraction
   - Validation with custom errors
   - Async/await with try...catch
`);

console.log("✅ All try-catch-finally examples completed!");
