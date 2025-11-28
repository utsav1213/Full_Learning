// ==========================================
// JavaScript Switch Statement Examples
// ==========================================

// 1. Basic Switch Statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a regular day");
}

// 2. Switch Without Break (Fall-through)
const num = 2;
console.log("\nFall-through example:");
switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
  default:
    console.log("Default");
}

// 3. Multiple Cases for Same Code
const fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("\nThis is a common fruit");
    break;
  case "mango":
  case "papaya":
    console.log("\nThis is a tropical fruit");
    break;
  default:
    console.log("\nUnknown fruit");
}

// 4. Switch with Expressions
const score = 85;

switch (true) {
  case score >= 90:
    console.log("\nGrade: A");
    break;
  case score >= 80:
    console.log("\nGrade: B");
    break;
  case score >= 70:
    console.log("\nGrade: C");
    break;
  case score >= 60:
    console.log("\nGrade: D");
    break;
  default:
    console.log("\nGrade: F");
}

// 5. Switch with Return (in Functions)
function getDayType(dayName) {
  switch (dayName) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    default:
      return "Invalid day";
  }
}

console.log("\nSaturday is:", getDayType("Saturday"));
console.log("Monday is:", getDayType("Monday"));

// 6. Type Coercion in Switch (Strict Comparison)
const value = "1";

switch (value) {
  case 1:
    console.log("\nNumber 1");
    break;
  case "1":
    console.log("\nString 1");
    break;
}

// 7. Block Scope in Switch Cases
const option = 1;

switch (option) {
  case 1: {
    const message = "Option 1 selected";
    console.log("\n" + message);
    break;
  }
  case 2: {
    const message = "Option 2 selected"; // No conflict due to block scope
    console.log("\n" + message);
    break;
  }
}

// 8. HTTP Status Codes Handler
function handleResponse(status) {
  switch (status) {
    case 200:
    case 201:
      return "Success";
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 404:
      return "Not Found";
    case 500:
      return "Server Error";
    default:
      return "Unknown Status";
  }
}

console.log("\nHTTP 200:", handleResponse(200));
console.log("HTTP 404:", handleResponse(404));
console.log("HTTP 500:", handleResponse(500));

console.log("\nSwitch statement examples completed!");
