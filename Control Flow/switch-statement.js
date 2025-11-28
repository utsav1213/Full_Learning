/**
 * 🚀 Switch Statement - JavaScript Implementation
 * Comprehensive examples of switch statements in JavaScript
 */

// ===================================
// 1. Basic Switch Statement
// ===================================
console.log("=== 1. Basic Switch Statement ===");

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "banana":
    console.log("This is a banana");
    break;
  case "orange":
    console.log("This is an orange");
    break;
  default:
    console.log("Unknown fruit");
}
// Output: "This is an apple"

// ===================================
// 2. Switch with Numbers
// ===================================
console.log("\n=== 2. Switch with Numbers ===");

const dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`Day ${dayNumber} is ${dayName}`);
// Output: "Day 3 is Wednesday"

// ===================================
// 3. Fall-through Behavior
// ===================================
console.log("\n=== 3. Fall-through Behavior ===");

const grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("You passed!");
    break;
  case "D":
  case "F":
    console.log("You need to study more.");
    break;
  default:
    console.log("Invalid grade");
}
// Output: "You passed!"

// ===================================
// 4. Default Case
// ===================================
console.log("\n=== 4. Default Case ===");

const color = "purple";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log(`Unknown color: ${color}`);
}
// Output: "Unknown color: purple"

// ===================================
// 5. Switch with Expressions
// ===================================
console.log("\n=== 5. Switch with Expressions ===");

const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}
// Output: "Grade: B"

// ===================================
// 6. Block Scope in Cases
// ===================================
console.log("\n=== 6. Block Scope in Cases ===");

const command = "start";

switch (command) {
  case "start": {
    const message = "Starting the process...";
    console.log(message);
    break;
  }
  case "stop": {
    const message = "Stopping the process...";
    console.log(message);
    break;
  }
  case "restart": {
    const message = "Restarting the process...";
    console.log(message);
    break;
  }
  default: {
    const message = "Unknown command";
    console.log(message);
  }
}
// Output: "Starting the process..."

// ===================================
// 7. Real-World Example: HTTP Status
// ===================================
console.log("\n=== 7. Real-World Example: HTTP Status ===");

function getStatusMessage(statusCode) {
  switch (statusCode) {
    case 200:
      return "OK - Request succeeded";
    case 201:
      return "Created - Resource created";
    case 400:
      return "Bad Request - Invalid request";
    case 401:
      return "Unauthorized - Authentication required";
    case 403:
      return "Forbidden - Access denied";
    case 404:
      return "Not Found - Resource not found";
    case 500:
      return "Internal Server Error";
    case 502:
      return "Bad Gateway";
    case 503:
      return "Service Unavailable";
    default:
      return `Unknown status: ${statusCode}`;
  }
}

console.log(getStatusMessage(200)); // "OK - Request succeeded"
console.log(getStatusMessage(404)); // "Not Found - Resource not found"
console.log(getStatusMessage(503)); // "Service Unavailable"
console.log(getStatusMessage(999)); // "Unknown status: 999"

// ===================================
// 8. Calculator Example
// ===================================
console.log("\n=== 8. Calculator Example ===");

function calculate(a, operator, b) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        return "Error: Division by zero";
      }
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "**":
      result = a ** b;
      break;
    default:
      return "Error: Invalid operator";
  }

  return `${a} ${operator} ${b} = ${result}`;
}

console.log(calculate(10, "+", 5)); // "10 + 5 = 15"
console.log(calculate(10, "-", 5)); // "10 - 5 = 5"
console.log(calculate(10, "*", 5)); // "10 * 5 = 50"
console.log(calculate(10, "/", 5)); // "10 / 5 = 2"
console.log(calculate(10, "%", 3)); // "10 % 3 = 1"
console.log(calculate(2, "**", 8)); // "2 ** 8 = 256"
console.log(calculate(10, "/", 0)); // "Error: Division by zero"

// ===================================
// 9. Month Name Example
// ===================================
console.log("\n=== 9. Month Name Example ===");

function getMonthName(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
}

console.log(getMonthName(1)); // "January"
console.log(getMonthName(6)); // "June"
console.log(getMonthName(12)); // "December"
console.log(getMonthName(13)); // "Invalid month"

// ===================================
// 10. Season Grouping Example
// ===================================
console.log("\n=== 10. Season Grouping Example ===");

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter ❄️";
    case 3:
    case 4:
    case 5:
      return "Spring 🌸";
    case 6:
    case 7:
    case 8:
      return "Summer ☀️";
    case 9:
    case 10:
    case 11:
      return "Fall 🍂";
    default:
      return "Invalid month";
  }
}

console.log(getSeason(1)); // "Winter ❄️"
console.log(getSeason(4)); // "Spring 🌸"
console.log(getSeason(7)); // "Summer ☀️"
console.log(getSeason(10)); // "Fall 🍂"

console.log("\n✅ All switch statement examples completed!");
