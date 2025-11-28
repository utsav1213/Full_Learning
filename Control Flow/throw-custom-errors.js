// ==========================================
// JavaScript throw and Custom Errors Examples
// ==========================================

// 1. Basic throw Statement
console.log("Basic throw statement:");
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught:", error.message);
}

// 2. Throwing Different Values
console.log("\nThrowing different values:");

// Throw a string
try {
  throw "Error message string";
} catch (error) {
  console.log("String:", error);
}

// Throw a number
try {
  throw 404;
} catch (error) {
  console.log("Number:", error);
}

// Throw an object
try {
  throw { message: "Custom error", code: 500 };
} catch (error) {
  console.log("Object:", error.message, "Code:", error.code);
}

// 3. Built-in Error Types
console.log("\nBuilt-in error types:");

try {
  throw new TypeError("Type error occurred");
} catch (e) {
  console.log("TypeError:", e.name, "-", e.message);
}

try {
  throw new ReferenceError("Variable not defined");
} catch (e) {
  console.log("ReferenceError:", e.name, "-", e.message);
}

try {
  throw new RangeError("Number out of range");
} catch (e) {
  console.log("RangeError:", e.name, "-", e.message);
}

// 4. Custom Error Class
console.log("\nCustom error class:");

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (error) {
  console.log("Name:", error.name);
  console.log("Message:", error.message);
}

// 5. Custom Error with Additional Properties
console.log("\nCustom error with additional properties:");

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
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Status Code:", error.statusCode);
}

// 6. Multiple Custom Error Types
console.log("\nMultiple custom error types:");

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

function checkAccess(user) {
  if (!user.isAuthenticated) {
    throw new AuthenticationError("User not logged in");
  }
  if (!user.hasPermission) {
    throw new PermissionError("Access denied");
  }
  return true;
}

try {
  checkAccess({ isAuthenticated: false, hasPermission: false });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.log("Auth Error:", error.message);
  } else if (error instanceof PermissionError) {
    console.log("Permission Error:", error.message);
  }
}

// 7. Input Validation
console.log("\nInput validation:");

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
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}

// 8. Precondition Checking
console.log("\nPrecondition checking:");

function processUser(user) {
  if (!user) throw new Error("User is required");
  if (!user.id) throw new Error("User ID is required");
  if (!user.email) throw new Error("User email is required");
  return `Processing user: ${user.id}`;
}

try {
  console.log(processUser({ id: 1, email: "test@test.com" }));
  console.log(processUser({ id: 1 }));
} catch (error) {
  console.log("Error:", error.message);
}

// 9. Business Logic Validation
console.log("\nBusiness logic validation:");

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

try {
  const account = { balance: 100 };
  console.log("Remaining balance:", withdraw(account, 30));
  console.log("Remaining balance:", withdraw(account, 200));
} catch (error) {
  console.log("Error:", error.message);
}

// 10. Form Validation with Custom Error
console.log("\nForm validation with custom error:");

class FormValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "FormValidationError";
    this.field = field;
  }
}

function validateForm(data) {
  if (!data.email) {
    throw new FormValidationError("Email is required", "email");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new FormValidationError("Invalid email format", "email");
  }
  if (!data.password || data.password.length < 8) {
    throw new FormValidationError(
      "Password must be at least 8 characters",
      "password"
    );
  }
  return true;
}

try {
  validateForm({ email: "invalid", password: "123" });
} catch (error) {
  if (error instanceof FormValidationError) {
    console.log(`Validation error in ${error.field}: ${error.message}`);
  }
}

// 11. Assertion Pattern
console.log("\nAssertion pattern:");

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

try {
  console.log("Discount:", calculateDiscount(100, 20));
  console.log("Discount:", calculateDiscount(-100, 20));
} catch (error) {
  console.log("Assertion Error:", error.message);
}

// 12. Error with Rich Details
console.log("\nError with rich details:");

class DetailedError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "DetailedError";
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}

try {
  throw new DetailedError("Operation failed", {
    operation: "fetchData",
    params: { id: 123 },
    reason: "Network timeout",
  });
} catch (error) {
  console.log("Message:", error.message);
  console.log("Details:", error.details);
  console.log("Timestamp:", error.timestamp);
}

console.log("\nthrow and custom errors examples completed!");
