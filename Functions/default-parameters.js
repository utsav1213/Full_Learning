/**
 * 🚀 Default Parameters - JavaScript Implementation
 * Comprehensive examples of default parameters in JavaScript
 */

// ===================================
// 1. Basic Default Parameters
// ===================================
console.log("=== 1. Basic Default Parameters ===");

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet()); // "Hello, Guest!"
console.log(greet(undefined)); // "Hello, Guest!" - undefined triggers default

// ===================================
// 2. Multiple Default Parameters
// ===================================
console.log("\n=== 2. Multiple Default Parameters ===");

function createUser(name = "Anonymous", role = "user", active = true) {
  return { name, role, active };
}

console.log(createUser()); // { name: "Anonymous", role: "user", active: true }
console.log(createUser("John")); // { name: "John", role: "user", active: true }
console.log(createUser("Admin", "admin")); // { name: "Admin", role: "admin", active: true }
console.log(createUser("Bob", "user", false)); // { name: "Bob", role: "user", active: false }

// ===================================
// 3. Expressions as Default Values
// ===================================
console.log("\n=== 3. Expressions as Default Values ===");

function createItem(name, timestamp = Date.now(), id = Math.random().toString(36).substr(2, 9)) {
  return { name, timestamp, id };
}

console.log(createItem("Item 1"));
console.log(createItem("Item 2"));

// Default with calculation
function calculateArea(length, width = length) {
  return length * width;
}

console.log("Square 5x5:", calculateArea(5)); // 25
console.log("Rectangle 5x3:", calculateArea(5, 3)); // 15

// ===================================
// 4. Using Earlier Parameters
// ===================================
console.log("\n=== 4. Using Earlier Parameters ===");

function greetPerson(firstName, lastName, fullName = `${firstName} ${lastName}`) {
  return `Hello, ${fullName}!`;
}

console.log(greetPerson("John", "Doe")); // Uses computed default
console.log(greetPerson("Jane", "Smith", "Ms. Smith")); // Uses provided value

// ===================================
// 5. Function Calls as Defaults
// ===================================
console.log("\n=== 5. Function Calls as Defaults ===");

let callCount = 0;

function getDefault() {
  callCount++;
  console.log(`  getDefault called (${callCount})`);
  return "default value";
}

function useDefault(value = getDefault()) {
  return value;
}

console.log("With value:", useDefault("provided")); // getDefault NOT called
console.log("Without value:", useDefault()); // getDefault IS called
console.log("Call count:", callCount); // 1

// ===================================
// 6. Required Parameters Pattern
// ===================================
console.log("\n=== 6. Required Parameters Pattern ===");

function required(paramName) {
  throw new Error(`Parameter "${paramName}" is required`);
}

function createProduct(name = required("name"), price = required("price"), quantity = 1) {
  return { name, price, quantity };
}

console.log(createProduct("Laptop", 999)); // Works
console.log(createProduct("Phone", 599, 5)); // Works

try {
  createProduct(); // Throws error
} catch (e) {
  console.log("Error:", e.message);
}

// ===================================
// 7. Default Object Parameters
// ===================================
console.log("\n=== 7. Default Object Parameters ===");

function configure(options = {}) {
  const defaults = {
    debug: false,
    timeout: 3000,
    retries: 3,
  };

  const config = { ...defaults, ...options };
  return config;
}

console.log(configure()); // Uses all defaults
console.log(configure({ debug: true })); // Overrides debug
console.log(configure({ debug: true, timeout: 5000 })); // Overrides multiple

// ===================================
// 8. Destructuring with Defaults
// ===================================
console.log("\n=== 8. Destructuring with Defaults ===");

// Object destructuring with defaults
function processUser({ name = "Guest", age = 0, active = true } = {}) {
  return `${name}, ${age}, ${active ? "active" : "inactive"}`;
}

console.log(processUser({ name: "John", age: 30 }));
console.log(processUser({ name: "Jane" }));
console.log(processUser({}));
console.log(processUser()); // Works because = {}

// Array destructuring with defaults
function processCoords([x = 0, y = 0, z = 0] = []) {
  return `(${x}, ${y}, ${z})`;
}

console.log(processCoords([1, 2, 3]));
console.log(processCoords([1, 2]));
console.log(processCoords([1]));
console.log(processCoords());

// ===================================
// 9. Null vs Undefined
// ===================================
console.log("\n=== 9. Null vs Undefined ===");

function showValue(value = "default") {
  return value;
}

console.log("undefined:", showValue(undefined)); // "default"
console.log("null:", showValue(null)); // null (NOT default!)
console.log("empty string:", showValue("")); // "" (NOT default!)
console.log("0:", showValue(0)); // 0 (NOT default!)
console.log("false:", showValue(false)); // false (NOT default!)

// ===================================
// 10. Nullish Coalescing for Falsy Values
// ===================================
console.log("\n=== 10. Nullish Coalescing Alternative ===");

function getConfig(value) {
  // Only use default for null/undefined
  return value ?? "default";
}

console.log("undefined:", getConfig(undefined)); // "default"
console.log("null:", getConfig(null)); // "default"
console.log("0:", getConfig(0)); // 0
console.log("'':", getConfig("")); // ""
console.log("false:", getConfig(false)); // false

// ===================================
// 11. Arrow Functions with Defaults
// ===================================
console.log("\n=== 11. Arrow Functions with Defaults ===");

const multiply = (a = 1, b = 1) => a * b;

console.log(multiply(5, 3)); // 15
console.log(multiply(5)); // 5
console.log(multiply()); // 1

// With object destructuring
const formatUser = ({ name = "Anonymous", email = "n/a" } = {}) => `${name} <${email}>`;

console.log(formatUser({ name: "John", email: "john@example.com" }));
console.log(formatUser({ name: "Jane" }));
console.log(formatUser());

// ===================================
// 12. Real-World Examples
// ===================================
console.log("\n=== 12. Real-World Examples ===");

// API request function
function fetchData(
  url,
  {
    method = "GET",
    headers = { "Content-Type": "application/json" },
    body = null,
    timeout = 5000,
  } = {}
) {
  return {
    url,
    method,
    headers,
    body,
    timeout,
  };
}

console.log("GET request:", fetchData("/api/users"));
console.log("POST request:", fetchData("/api/users", { method: "POST", body: { name: "John" } }));

// Logger function
function log(message, level = "info", timestamp = new Date().toISOString()) {
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
}

log("Application started");
log("Connection failed", "error");

// Retry mechanism
function retry(fn, { attempts = 3, delay = 1000 } = {}) {
  return {
    fn: fn.name,
    attempts,
    delay,
    message: `Will retry ${fn.name} up to ${attempts} times with ${delay}ms delay`,
  };
}

const fetchUsers = () => {};
console.log(retry(fetchUsers));
console.log(retry(fetchUsers, { attempts: 5 }));

// ===================================
// 13. Best Practices
// ===================================
console.log("\n=== 13. Best Practices ===");

console.log(`
✅ DO:
   - Place optional parameters after required ones
   - Use = {} for object parameters to allow calling without arguments
   - Use expressions for dynamic defaults
   - Consider nullish coalescing for falsy values

❌ DON'T:
   - Rely on null triggering defaults (it won't!)
   - Use complex side effects in default expressions
   - Overuse defaults when explicit values are clearer

💡 PATTERNS:
   - Required parameter validation
   - Configuration objects with defaults
   - Destructuring with defaults
   - Factory functions with defaults
`);

console.log("✅ All default parameter examples completed!");
