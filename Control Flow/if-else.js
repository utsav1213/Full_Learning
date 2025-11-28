/**
 * 🚀 if, else if, else Statements - JavaScript Implementation
 * Comprehensive examples of conditional statements in JavaScript
 */

// ===================================
// 1. Basic if Statement
// ===================================
console.log("=== 1. Basic if Statement ===");

const age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
// Output: "You can vote!"

// ===================================
// 2. if...else Statement
// ===================================
console.log("\n=== 2. if...else Statement ===");

const userAge = 15;

if (userAge >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}
// Output: "You cannot vote yet."

// ===================================
// 3. if...else if...else Statement
// ===================================
console.log("\n=== 3. if...else if...else Statement ===");

const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: "Grade: C"

// ===================================
// 4. Nested if Statements
// ===================================
console.log("\n=== 4. Nested if Statements ===");

const driverAge = 20;
const hasLicense = true;

if (driverAge >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("You need a license first.");
  }
} else {
  console.log("You are too young to drive.");
}
// Output: "You can drive!"

// ===================================
// 5. Truthy and Falsy Values
// ===================================
console.log("\n=== 5. Truthy and Falsy Values ===");

// Falsy values: false, 0, "", null, undefined, NaN
const name = "John";

if (name) {
  console.log("Name exists!");
}
// Output: "Name exists!"

const value = 0;

if (value) {
  console.log("This won't run");
} else {
  console.log("Value is falsy");
}
// Output: "Value is falsy"

// ===================================
// 6. Ternary Operator
// ===================================
console.log("\n=== 6. Ternary Operator ===");

const votingAge = 20;
const canVote = votingAge >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`); // "Yes"

// Nested Ternary (use sparingly)
const testScore = 85;
const grade =
  testScore >= 90
    ? "A"
    : testScore >= 80
      ? "B"
      : testScore >= 70
        ? "C"
        : "F";
console.log(`Grade: ${grade}`); // "B"

// ===================================
// 7. Logical Operators in Conditions
// ===================================
console.log("\n=== 7. Logical Operators in Conditions ===");

// AND (&&)
const movieAge = 25;
const hasTicket = true;

if (movieAge >= 18 && hasTicket) {
  console.log("You can enter the movie!");
}

// OR (||)
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax!");
}

// NOT (!)
const isRaining = false;

if (!isRaining) {
  console.log("Let's go for a walk!");
}

// ===================================
// 8. Short-Circuit Evaluation
// ===================================
console.log("\n=== 8. Short-Circuit Evaluation ===");

// Using && for conditional execution
const user = { name: "John" };
user && console.log(`User name: ${user.name}`); // "John"

// Using || for default values
const username = "" || "Guest";
console.log(`Username: ${username}`); // "Guest"

// ===================================
// 9. Common Patterns
// ===================================
console.log("\n=== 9. Common Patterns ===");

// Check for existence
const currentUser = { name: "Alice", active: true };
if (currentUser) {
  console.log("User exists");
}

// Check for specific value
const status = "active";
if (status === "active") {
  console.log("User is active");
}

// Range checking
const personAge = 16;
if (personAge >= 13 && personAge <= 19) {
  console.log("Teenager");
}

// Multiple OR conditions
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
}

// ===================================
// 10. Best Practices - Guard Clauses
// ===================================
console.log("\n=== 10. Guard Clauses (Best Practice) ===");

function checkAccess(user) {
  if (!user) return false;
  if (!user.isActive) return false;
  if (!user.hasPermission) return false;
  return true;
}

const testUser1 = { isActive: true, hasPermission: true };
const testUser2 = { isActive: false, hasPermission: true };
const testUser3 = null;

console.log("User 1 access:", checkAccess(testUser1)); // true
console.log("User 2 access:", checkAccess(testUser2)); // false
console.log("User 3 access:", checkAccess(testUser3)); // false

console.log("\n✅ All if-else examples completed!");
