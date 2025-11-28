/**
 * 🚀 Parameters vs Arguments - JavaScript Implementation
 * Comprehensive examples of the difference between parameters and arguments
 */

// ===================================
// 1. Basic Definitions
// ===================================
console.log("=== 1. Basic Definitions ===");

// PARAMETERS: Variables in function DECLARATION
function greet(name, greeting) {
  // 'name' and 'greeting' are PARAMETERS
  return `${greeting}, ${name}!`;
}

// ARGUMENTS: Values passed in function CALL
const result = greet("John", "Hello"); // "John" and "Hello" are ARGUMENTS
console.log(result);

console.log(`
📝 DEFINITIONS:
   - PARAMETERS: Variables listed in the function definition
   - ARGUMENTS: Actual values passed to the function when called
`);

// ===================================
// 2. Number of Parameters
// ===================================
console.log("=== 2. Number of Parameters ===");

function showInfo(a, b, c) {
  console.log(`Parameters received: a=${a}, b=${b}, c=${c}`);
}

// More arguments than parameters
console.log("More arguments than parameters:");
showInfo(1, 2, 3, 4, 5); // Extra arguments ignored

// Fewer arguments than parameters
console.log("\nFewer arguments than parameters:");
showInfo(1); // Missing parameters are undefined

// ===================================
// 3. Function.length Property
// ===================================
console.log("\n=== 3. Function.length (Parameter Count) ===");

function noParams() {}
function oneParam(a) {}
function twoParams(a, b) {}
function threeParams(a, b, c) {}
function withDefault(a, b = 10) {} // Defaults don't count after first default
function withRest(a, ...rest) {} // Rest doesn't count

console.log("noParams.length:", noParams.length); // 0
console.log("oneParam.length:", oneParam.length); // 1
console.log("twoParams.length:", twoParams.length); // 2
console.log("threeParams.length:", threeParams.length); // 3
console.log("withDefault.length:", withDefault.length); // 1 (only counts before default)
console.log("withRest.length:", withRest.length); // 1 (rest doesn't count)

// ===================================
// 4. Arguments Object
// ===================================
console.log("\n=== 4. Arguments Object ===");

function showArguments(a, b, c) {
  console.log("Named parameters:", a, b, c);
  console.log("arguments object:", arguments);
  console.log("arguments.length:", arguments.length);
  console.log("arguments[0]:", arguments[0]);
  console.log("arguments[3]:", arguments[3]); // Extra argument!
}

showArguments(1, 2, 3, 4, 5);

// ===================================
// 5. Arguments vs Rest Parameters
// ===================================
console.log("\n=== 5. Arguments vs Rest Parameters ===");

// Using arguments (old way)
function sumOld() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Using rest parameters (modern way)
function sumNew(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Old sum:", sumOld(1, 2, 3, 4, 5)); // 15
console.log("New sum:", sumNew(1, 2, 3, 4, 5)); // 15

console.log(`
📝 ARGUMENTS OBJECT:
   - Array-like but NOT an array
   - Available in regular functions (not arrow)
   - Contains ALL arguments passed
   
📝 REST PARAMETERS:
   - Real Array with all methods
   - Only contains "rest" after named params
   - Modern and preferred approach
`);

// ===================================
// 6. Arrow Functions and Arguments
// ===================================
console.log("\n=== 6. Arrow Functions ===");

// Arrow functions DON'T have their own 'arguments'
const arrowFunc = (...args) => {
  // console.log(arguments); // Would error or use outer scope's arguments
  console.log("Arrow with rest:", args);
};

arrowFunc(1, 2, 3);

// ===================================
// 7. Pass by Value vs Reference
// ===================================
console.log("\n=== 7. Pass by Value vs Reference ===");

// Primitives: passed by VALUE
function modifyPrimitive(num) {
  num = num + 100;
  console.log("Inside function:", num);
}

let myNum = 10;
modifyPrimitive(myNum);
console.log("Outside function:", myNum); // Still 10

// Objects: passed by REFERENCE
function modifyObject(obj) {
  obj.value = 100;
  console.log("Inside function:", obj);
}

let myObj = { value: 10 };
modifyObject(myObj);
console.log("Outside function:", myObj); // { value: 100 }

// Reassigning object parameter
function reassignObject(obj) {
  obj = { value: 200 }; // Creates new object, doesn't affect original
  console.log("Inside function:", obj);
}

let anotherObj = { value: 10 };
reassignObject(anotherObj);
console.log("Outside function:", anotherObj); // Still { value: 10 }

// ===================================
// 8. Parameter Destructuring
// ===================================
console.log("\n=== 8. Parameter Destructuring ===");

// Object destructuring
function printUser({ name, age, city = "Unknown" }) {
  console.log(`${name}, ${age}, from ${city}`);
}

printUser({ name: "John", age: 30 });
printUser({ name: "Jane", age: 25, city: "NYC" });

// Array destructuring
function printCoords([x, y, z = 0]) {
  console.log(`Coordinates: (${x}, ${y}, ${z})`);
}

printCoords([10, 20]);
printCoords([10, 20, 30]);

// ===================================
// 9. Named Arguments Pattern
// ===================================
console.log("\n=== 9. Named Arguments Pattern ===");

// Problem with many arguments
function createUserBad(name, age, email, role, active, createdAt) {
  // Hard to remember order!
}

// Solution: Object parameter
function createUserGood({
  name,
  age,
  email,
  role = "user",
  active = true,
  createdAt = new Date(),
}) {
  return { name, age, email, role, active, createdAt };
}

// Caller can use named properties in any order
const user = createUserGood({
  email: "john@example.com",
  name: "John",
  age: 30,
});

console.log("User:", user);

// ===================================
// 10. Checking Argument Count
// ===================================
console.log("\n=== 10. Checking Argument Count ===");

function requireArgs(a, b, c) {
  const required = 3;
  if (arguments.length < required) {
    throw new Error(`Expected ${required} arguments, got ${arguments.length}`);
  }
  return a + b + c;
}

try {
  console.log("Valid call:", requireArgs(1, 2, 3));
  console.log("Invalid call:", requireArgs(1, 2));
} catch (e) {
  console.log("Error:", e.message);
}

// Modern way with rest
function requireArgsModern(...args) {
  if (args.length < 3) {
    throw new Error(`Expected 3 arguments, got ${args.length}`);
  }
  return args[0] + args[1] + args[2];
}

// ===================================
// 11. Optional Arguments
// ===================================
console.log("\n=== 11. Optional Arguments ===");

function configure(required, optional1, optional2) {
  const config = {
    required,
    optional1: optional1 !== undefined ? optional1 : "default1",
    optional2: optional2 !== undefined ? optional2 : "default2",
  };
  return config;
}

console.log(configure("must have"));
console.log(configure("must have", "custom1"));
console.log(configure("must have", "custom1", "custom2"));

// ===================================
// 12. Summary
// ===================================
console.log("\n=== 12. Summary ===");

console.log(`
╔════════════════════════════════════════════════════════════╗
║                 PARAMETERS vs ARGUMENTS                    ║
╠════════════════════════════════════════════════════════════╣
║ PARAMETERS:                                                ║
║   • Variables in function DEFINITION                       ║
║   • Act as placeholders                                    ║
║   • Counted by function.length                             ║
║   • Can have default values                                ║
║                                                            ║
║ ARGUMENTS:                                                 ║
║   • Values in function CALL                                ║
║   • Actual data passed to function                         ║
║   • Counted by arguments.length                            ║
║   • Can be more or fewer than parameters                   ║
╠════════════════════════════════════════════════════════════╣
║ BEST PRACTICES:                                            ║
║   ✅ Use default parameters for optional values            ║
║   ✅ Use rest parameters instead of arguments object       ║
║   ✅ Use object destructuring for many parameters          ║
║   ✅ Document expected parameters clearly                  ║
╚════════════════════════════════════════════════════════════╝
`);

console.log("✅ All parameters vs arguments examples completed!");
