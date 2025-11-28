/**
 * 🚀 Function Declaration - JavaScript Implementation
 * Comprehensive examples of function declarations
 */

// ===================================
// 1. Basic Function Declaration
// ===================================
console.log("=== 1. Basic Function Declaration ===");

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"
console.log(greet("World")); // "Hello, World!"

// ===================================
// 2. Function Hoisting
// ===================================
console.log("\n=== 2. Function Hoisting ===");

// Can call before declaration!
console.log("Before declaration:", add(5, 3)); // 8

function add(a, b) {
  return a + b;
}

console.log("After declaration:", add(10, 20)); // 30

// ===================================
// 3. Multiple Parameters
// ===================================
console.log("\n=== 3. Multiple Parameters ===");

function introduce(name, age, city) {
  return `I'm ${name}, ${age} years old, from ${city}`;
}

console.log(introduce("Alice", 25, "New York"));

// No parameters
function getTimestamp() {
  return Date.now();
}

console.log("Timestamp:", getTimestamp());

// ===================================
// 4. Return Values
// ===================================
console.log("\n=== 4. Return Values ===");

// Single return
function square(num) {
  return num * num;
}

console.log("5² =", square(5)); // 25

// Multiple return paths
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log("Score 85:", getGrade(85)); // "B"
console.log("Score 55:", getGrade(55)); // "F"

// Early return (guard clause)
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

console.log("10 / 2:", divide(10, 2)); // 5
console.log("10 / 0:", divide(10, 0)); // "Cannot divide by zero"

// No return (implicit undefined)
function logMessage(msg) {
  console.log("LOG:", msg);
}

console.log("Return value:", logMessage("test")); // undefined

// ===================================
// 5. Function Scope
// ===================================
console.log("\n=== 5. Function Scope ===");

function outerFunction() {
  const outerVar = "outer";

  function innerFunction() {
    const innerVar = "inner";
    console.log("Inner can access outer:", outerVar);
    console.log("Inner can access inner:", innerVar);
  }

  innerFunction();
  // console.log(innerVar); // ReferenceError
}

outerFunction();

// ===================================
// 6. Functions as Values
// ===================================
console.log("\n=== 6. Functions as Values ===");

function multiply(a, b) {
  return a * b;
}

// Assign to variable
const multiplyRef = multiply;
console.log("Via reference:", multiplyRef(4, 5)); // 20

// Pass as argument
function executeOperation(operation, a, b) {
  return operation(a, b);
}

function subtract(a, b) {
  return a - b;
}

console.log("Execute add:", executeOperation(add, 10, 5)); // 15
console.log("Execute subtract:", executeOperation(subtract, 10, 5)); // 5
console.log("Execute multiply:", executeOperation(multiply, 10, 5)); // 50

// ===================================
// 7. Recursive Functions
// ===================================
console.log("\n=== 7. Recursive Functions ===");

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // 120
console.log("10! =", factorial(10)); // 3628800

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fib(10) =", fibonacci(10)); // 55

// Countdown
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

console.log("\nCountdown:");
countdown(5);

// ===================================
// 8. Default Parameters
// ===================================
console.log("\n=== 8. Default Parameters ===");

function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault("Alice")); // "Hello, Alice!"
console.log(greetWithDefault()); // "Hello, Guest!"

function createUser(name, role = "user", active = true) {
  return { name, role, active };
}

console.log(createUser("John")); // { name: "John", role: "user", active: true }
console.log(createUser("Admin", "admin")); // { name: "Admin", role: "admin", active: true }

// ===================================
// 9. Rest Parameters
// ===================================
console.log("\n=== 9. Rest Parameters ===");

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // 15

function logAll(first, second, ...rest) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

logAll("a", "b", "c", "d", "e");

// ===================================
// 10. Real-World Examples
// ===================================
console.log("\n=== 10. Real-World Examples ===");

// Validation function
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log("Valid email:", isValidEmail("user@example.com")); // true
console.log("Invalid email:", isValidEmail("invalid")); // false

// Formatting function
function formatCurrency(amount, currency = "USD") {
  const symbols = { USD: "$", EUR: "€", GBP: "£" };
  const symbol = symbols[currency] || currency;
  return `${symbol}${amount.toFixed(2)}`;
}

console.log(formatCurrency(1234.5)); // "$1234.50"
console.log(formatCurrency(1234.5, "EUR")); // "€1234.50"

// Data processing
function filterActiveUsers(users) {
  const active = [];
  for (const user of users) {
    if (user.active) {
      active.push(user);
    }
  }
  return active;
}

const users = [
  { name: "John", active: true },
  { name: "Jane", active: false },
  { name: "Bob", active: true },
];

console.log("Active users:", filterActiveUsers(users));

// Factory function
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
    birthday() {
      this.age++;
      return this.age;
    },
  };
}

const person = createPerson("Alice", 25);
console.log(person.greet()); // "Hi, I'm Alice"
console.log("New age:", person.birthday()); // 26

// ===================================
// 11. Named Function Benefits
// ===================================
console.log("\n=== 11. Named Function Benefits ===");

// Self-documenting code
function calculateMonthlyPayment(principal, annualRate, months) {
  const monthlyRate = annualRate / 12 / 100;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

console.log("Monthly payment:", calculateMonthlyPayment(10000, 5, 12).toFixed(2));

// Better stack traces
function fetchUserData() {
  throw new Error("Failed to fetch user");
}

try {
  fetchUserData();
} catch (error) {
  console.log("Error in:", error.message);
}

// ===================================
// 12. Best Practices
// ===================================
console.log("\n=== 12. Best Practices ===");

// ✅ Single responsibility
function validateUsername(username) {
  return username.length >= 3 && username.length <= 20;
}

function sanitizeUsername(username) {
  return username.toLowerCase().trim();
}

// ✅ Descriptive names
function getUserById(id) {
  return { id, name: "User " + id };
}

function isUserActive(user) {
  return user && user.status === "active";
}

// ✅ Early returns
function processOrder(order) {
  if (!order) return { error: "No order" };
  if (!order.items) return { error: "No items" };
  if (order.items.length === 0) return { error: "Empty order" };
  return { success: true, total: order.items.length };
}

console.log(processOrder(null)); // { error: "No order" }
console.log(processOrder({ items: [1, 2, 3] })); // { success: true, total: 3 }

console.log("\n✅ All function declaration examples completed!");
