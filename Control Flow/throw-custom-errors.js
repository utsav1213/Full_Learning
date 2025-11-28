/**
 * 🚀 Throw Custom Errors - JavaScript Implementation
 * Comprehensive examples of throwing and creating custom errors
 */

// ===================================
// 1. Basic Throw
// ===================================
console.log("=== 1. Basic Throw ===");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (error) {
  console.log("Caught error:", error.message);
}

// ===================================
// 2. Throwing Different Types
// ===================================
console.log("\n=== 2. Throwing Different Types ===");

// Throw string (not recommended)
try {
  throw "String error";
} catch (error) {
  console.log("Caught string:", error);
}

// Throw number (not recommended)
try {
  throw 404;
} catch (error) {
  console.log("Caught number:", error);
}

// Throw object (better)
try {
  throw { code: "ERR_001", message: "Custom error object" };
} catch (error) {
  console.log("Caught object:", error.code, "-", error.message);
}

// Throw Error (recommended)
try {
  throw new Error("Proper error instance");
} catch (error) {
  console.log("Caught Error:", error.message);
}

// ===================================
// 3. Built-in Error Types
// ===================================
console.log("\n=== 3. Built-in Error Types ===");

// TypeError
function processString(str) {
  if (typeof str !== "string") {
    throw new TypeError(`Expected string, got ${typeof str}`);
  }
  return str.toUpperCase();
}

try {
  processString(123);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// RangeError
function createArray(size) {
  if (size < 0 || size > 10000) {
    throw new RangeError("Size must be between 0 and 10000");
  }
  return new Array(size);
}

try {
  createArray(-5);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// ReferenceError (custom throw)
function getConfig(key) {
  const config = { debug: true, apiUrl: "https://api.example.com" };
  if (!(key in config)) {
    throw new ReferenceError(`Config key "${key}" not found`);
  }
  return config[key];
}

try {
  getConfig("invalidKey");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// ===================================
// 4. Custom Error Classes
// ===================================
console.log("\n=== 4. Custom Error Classes ===");

// Basic custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Custom error with additional properties
class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
  }
  
  toJSON() {
    return {
      name: this.name,
      statusCode: this.statusCode,
      message: this.message,
      timestamp: this.timestamp,
    };
  }
}

try {
  throw new ValidationError("Email format is invalid");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  throw new HttpError(404, "Resource not found");
} catch (error) {
  console.log(JSON.stringify(error.toJSON(), null, 2));
}

// ===================================
// 5. Error Hierarchy
// ===================================
console.log("\n=== 5. Error Hierarchy ===");

// Base application error
class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "AppError";
    this.code = code;
  }
}

// Database errors
class DatabaseError extends AppError {
  constructor(message, query = null) {
    super(message, "DB_ERROR");
    this.name = "DatabaseError";
    this.query = query;
  }
}

// Connection error
class ConnectionError extends DatabaseError {
  constructor(host, port) {
    super(`Failed to connect to ${host}:${port}`);
    this.name = "ConnectionError";
    this.host = host;
    this.port = port;
  }
}

// Query error
class QueryError extends DatabaseError {
  constructor(message, query) {
    super(message, query);
    this.name = "QueryError";
  }
}

function handleDbError(error) {
  if (error instanceof ConnectionError) {
    console.log(`Connection failed: ${error.host}:${error.port}`);
  } else if (error instanceof QueryError) {
    console.log(`Query failed: ${error.query}`);
  } else if (error instanceof DatabaseError) {
    console.log(`Database error: ${error.message}`);
  } else {
    console.log(`Unknown error: ${error.message}`);
  }
}

handleDbError(new ConnectionError("localhost", 5432));
handleDbError(new QueryError("Invalid syntax", "SELECT * FORM users"));

// ===================================
// 6. Validation Errors
// ===================================
console.log("\n=== 6. Validation Errors ===");

class FieldValidationError extends Error {
  constructor(field, message, value) {
    super(message);
    this.name = "FieldValidationError";
    this.field = field;
    this.value = value;
  }
}

class FormValidationError extends Error {
  constructor(errors = []) {
    super("Form validation failed");
    this.name = "FormValidationError";
    this.errors = errors;
  }
  
  addError(error) {
    this.errors.push(error);
  }
  
  hasErrors() {
    return this.errors.length > 0;
  }
}

function validateForm(data) {
  const formError = new FormValidationError();
  
  if (!data.email || !data.email.includes("@")) {
    formError.addError(
      new FieldValidationError("email", "Invalid email format", data.email)
    );
  }
  
  if (!data.password || data.password.length < 8) {
    formError.addError(
      new FieldValidationError(
        "password",
        "Password must be at least 8 characters",
        "[hidden]"
      )
    );
  }
  
  if (!data.age || data.age < 18) {
    formError.addError(
      new FieldValidationError("age", "Must be 18 or older", data.age)
    );
  }
  
  if (formError.hasErrors()) {
    throw formError;
  }
  
  return { valid: true };
}

try {
  validateForm({ email: "invalid", password: "short", age: 16 });
} catch (error) {
  if (error instanceof FormValidationError) {
    console.log("Validation errors:");
    for (const err of error.errors) {
      console.log(`  ${err.field}: ${err.message} (value: ${err.value})`);
    }
  }
}

// ===================================
// 7. API Error Handling
// ===================================
console.log("\n=== 7. API Error Handling ===");

class APIError extends Error {
  constructor(status, code, message, details = null) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
  
  static badRequest(message, details) {
    return new APIError(400, "BAD_REQUEST", message, details);
  }
  
  static unauthorized(message = "Authentication required") {
    return new APIError(401, "UNAUTHORIZED", message);
  }
  
  static forbidden(message = "Access denied") {
    return new APIError(403, "FORBIDDEN", message);
  }
  
  static notFound(resource) {
    return new APIError(404, "NOT_FOUND", `${resource} not found`);
  }
  
  static serverError(message = "Internal server error") {
    return new APIError(500, "INTERNAL_ERROR", message);
  }
  
  toResponse() {
    return {
      error: {
        code: this.code,
        message: this.message,
        details: this.details,
      },
    };
  }
}

// Usage examples
const errors = [
  APIError.badRequest("Invalid input", { field: "email" }),
  APIError.unauthorized(),
  APIError.notFound("User"),
  APIError.serverError(),
];

for (const error of errors) {
  console.log(`${error.status}: ${JSON.stringify(error.toResponse())}`);
}

// ===================================
// 8. Aggregate Errors
// ===================================
console.log("\n=== 8. Aggregate Errors ===");

// AggregateError for multiple errors
async function processMultiple(items) {
  const errors = [];
  const results = [];
  
  for (const item of items) {
    try {
      if (item.invalid) {
        throw new Error(`Invalid item: ${item.id}`);
      }
      results.push(item.id);
    } catch (error) {
      errors.push(error);
    }
  }
  
  if (errors.length > 0) {
    throw new AggregateError(errors, "Multiple processing errors");
  }
  
  return results;
}

const items = [
  { id: 1, invalid: false },
  { id: 2, invalid: true },
  { id: 3, invalid: false },
  { id: 4, invalid: true },
];

try {
  processMultiple(items);
} catch (error) {
  if (error instanceof AggregateError) {
    console.log(`AggregateError: ${error.message}`);
    error.errors.forEach((e, i) => {
      console.log(`  Error ${i + 1}: ${e.message}`);
    });
  }
}

// ===================================
// 9. Error Factory Pattern
// ===================================
console.log("\n=== 9. Error Factory Pattern ===");

const ErrorFactory = {
  create(type, message, details = {}) {
    const error = new Error(message);
    error.type = type;
    error.details = details;
    error.timestamp = new Date().toISOString();
    return error;
  },
  
  validation(field, message) {
    return this.create("VALIDATION", message, { field });
  },
  
  authentication(message = "Not authenticated") {
    return this.create("AUTH", message);
  },
  
  permission(resource, action) {
    return this.create("PERMISSION", `Cannot ${action} ${resource}`, {
      resource,
      action,
    });
  },
  
  business(code, message) {
    return this.create("BUSINESS", message, { code });
  },
};

try {
  throw ErrorFactory.permission("document", "delete");
} catch (error) {
  console.log(`${error.type}: ${error.message}`);
  console.log("Details:", error.details);
}

// ===================================
// 10. Error Cause (ES2022)
// ===================================
console.log("\n=== 10. Error Cause (ES2022) ===");

function lowLevelOperation() {
  throw new Error("Low-level failure");
}

function midLevelOperation() {
  try {
    lowLevelOperation();
  } catch (error) {
    throw new Error("Mid-level failure", { cause: error });
  }
}

function highLevelOperation() {
  try {
    midLevelOperation();
  } catch (error) {
    throw new Error("High-level failure", { cause: error });
  }
}

try {
  highLevelOperation();
} catch (error) {
  console.log("Error chain:");
  let current = error;
  let level = 0;
  
  while (current) {
    console.log(`  ${"  ".repeat(level)}${current.message}`);
    current = current.cause;
    level++;
  }
}

// ===================================
// 11. Assertion Errors
// ===================================
console.log("\n=== 11. Assertion Errors ===");

class AssertionError extends Error {
  constructor(message, expected, actual) {
    super(message);
    this.name = "AssertionError";
    this.expected = expected;
    this.actual = actual;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new AssertionError(message || "Assertion failed");
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new AssertionError(
      message || `Expected ${expected} but got ${actual}`,
      expected,
      actual
    );
  }
}

try {
  assertEqual(5, 10, "Values should match");
} catch (error) {
  if (error instanceof AssertionError) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`  Expected: ${error.expected}`);
    console.log(`  Actual: ${error.actual}`);
  }
}

// ===================================
// 12. Best Practices
// ===================================
console.log("\n=== 12. Best Practices Summary ===");

console.log(`
✅ DO:
   - Use Error or custom Error subclasses
   - Include descriptive messages
   - Add relevant context (codes, details)
   - Create error hierarchies for complex apps
   - Use Error cause for error chains
   - Document custom errors

❌ DON'T:
   - Throw strings or numbers
   - Use generic error messages
   - Ignore error context
   - Create too many error types
   - Throw errors for flow control

💡 PATTERNS:
   - Custom error classes for domains
   - Factory functions for consistency
   - Error hierarchies for categorization
   - Static factory methods for common errors
   - Error cause for tracing
`);

console.log("✅ All throw custom errors examples completed!");
