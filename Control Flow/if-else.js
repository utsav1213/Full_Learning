// ==========================================
// JavaScript if-else Statement Examples
// ==========================================

// 1. Basic if Statement
const age = 18;
if (age >= 18) {
  console.log("You can vote!");
}

// 2. if...else Statement
const score = 45;
if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}

// 3. if...else if...else Statement
const grade = 75;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 80) {
  console.log("Grade: B");
} else if (grade >= 70) {
  console.log("Grade: C");
} else if (grade >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 4. Nested if Statements
const userAge = 20;
const hasLicense = true;

if (userAge >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("You need a license first.");
  }
} else {
  console.log("You are too young to drive.");
}

// 5. Ternary Operator (Short if...else)
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// 6. Logical Operators in Conditions
const isWeekend = true;
const isHoliday = false;

// AND (&&)
if (age >= 18 && hasLicense) {
  console.log("You meet all requirements!");
}

// OR (||)
if (isWeekend || isHoliday) {
  console.log("You can relax!");
}

// NOT (!)
const isRaining = false;
if (!isRaining) {
  console.log("Let's go for a walk!");
}

// 7. Truthy and Falsy Values
const name = "John";
if (name) {
  console.log("Name exists!");
}

const value = 0;
if (value) {
  console.log("This won't run");
} else {
  console.log("Value is falsy");
}

// 8. Short-Circuit Evaluation
const user = { name: "John" };
user && console.log("User name:", user.name);

const username = "" || "Guest";
console.log("Username:", username);

// 9. Range Checking
const temperature = 25;
if (temperature >= 20 && temperature <= 30) {
  console.log("Comfortable temperature");
}

console.log("If-else examples completed!");
