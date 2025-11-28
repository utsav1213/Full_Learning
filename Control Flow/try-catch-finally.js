// ==========================================
// JavaScript try...catch...finally Examples
// ==========================================

// 1. Basic try...catch
console.log("Basic try...catch:");
try {
  console.log("Starting...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Error caught:", error.message);
}

// 2. try...catch...finally
console.log("\ntry...catch...finally:");
try {
  console.log("Trying operation...");
  throw new Error("Operation failed!");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup done (finally block)");
}

// 3. Error Object Properties
console.log("\nError object properties:");
try {
  throw new Error("Custom error message");
} catch (error) {
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack.split("\n")[0]);
}

// 4. Different Error Types
console.log("\nDifferent error types:");

// ReferenceError
try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log("ReferenceError:", error.name);
}

// TypeError
try {
  null.toString();
} catch (error) {
  console.log("TypeError:", error.name);
}

// RangeError
try {
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.name);
}

// 5. Catching Specific Error Types
console.log("\nCatching specific error types:");
try {
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

// 6. Re-throwing Errors
console.log("\nRe-throwing errors:");
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

// 7. finally Always Executes
console.log("\nfinally always executes:");
function testFinally() {
  try {
    return "try";
  } finally {
    console.log("Finally executes before return");
  }
}
console.log("Function returned:", testFinally());

// 8. JSON Parsing Example
console.log("\nJSON parsing with error handling:");
function parseJSON(jsonString) {
  try {
    return { success: true, data: JSON.parse(jsonString) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

console.log(parseJSON('{"name": "John"}'));
console.log(parseJSON("{invalid}"));

// 9. Nested try...catch
console.log("\nNested try...catch:");
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

// 10. Optional catch Binding (ES2019)
console.log("\nOptional catch binding:");
try {
  throw new Error("Some error");
} catch {
  console.log("Error occurred (no error parameter used)");
}

// 11. Resource Cleanup Pattern
console.log("\nResource cleanup pattern:");
let resource = null;
try {
  resource = { name: "Connection", status: "open" };
  console.log("Resource opened:", resource.name);
  // Simulate some operation
  throw new Error("Operation error");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  if (resource) {
    resource.status = "closed";
    console.log("Resource closed:", resource.status);
  }
}

// 12. Validation with Error Handling
console.log("\nValidation with error handling:");
function validateUser(user) {
  try {
    if (!user) throw new Error("User is required");
    if (!user.email) throw new Error("Email is required");
    if (!user.password) throw new Error("Password is required");
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

console.log(validateUser({ email: "test@test.com", password: "123456" }));
console.log(validateUser({ email: "test@test.com" }));
console.log(validateUser(null));

console.log("\ntry...catch...finally examples completed!");
