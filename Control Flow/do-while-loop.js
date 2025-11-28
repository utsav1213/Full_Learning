/**
 * 🚀 Do...While Loop - JavaScript Implementation
 * Comprehensive examples of do-while loops in JavaScript
 */

// ===================================
// 1. Basic Do...While Loop
// ===================================
console.log("=== 1. Basic Do...While Loop ===");

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4

// ===================================
// 2. Key Difference: Runs At Least Once
// ===================================
console.log("\n=== 2. Key Difference: Runs At Least Once ===");

// While loop - condition checked first
console.log("While loop with false condition:");
let a = 10;
while (a < 5) {
  console.log("  This won't print");
  a++;
}
console.log("  (nothing printed)");

// Do-while loop - runs at least once
console.log("\nDo-while loop with false condition:");
let b = 10;
do {
  console.log(`  Value: ${b} (runs at least once!)`);
  b++;
} while (b < 5);

// ===================================
// 3. Menu System Pattern
// ===================================
console.log("\n=== 3. Menu System Pattern ===");

// Simulated menu choices
const menuChoices = [1, 2, 3, 4, 0]; // 0 = exit
let choiceIndex = 0;

do {
  const choice = menuChoices[choiceIndex];
  
  switch (choice) {
    case 1:
      console.log("Option 1: View Profile");
      break;
    case 2:
      console.log("Option 2: Edit Settings");
      break;
    case 3:
      console.log("Option 3: Help");
      break;
    case 4:
      console.log("Option 4: About");
      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid option");
  }
  
  choiceIndex++;
} while (menuChoices[choiceIndex - 1] !== 0);

// ===================================
// 4. Input Validation Pattern
// ===================================
console.log("\n=== 4. Input Validation Pattern ===");

// Simulated inputs (some invalid, last one valid)
const inputs = ["", null, "a", "10"];
let inputIndex = 0;
let validNumber = null;

do {
  const input = inputs[inputIndex];
  console.log(`Checking input: "${input}"`);
  
  if (input && !isNaN(parseInt(input))) {
    validNumber = parseInt(input);
    console.log(`  Valid number: ${validNumber}`);
  } else {
    console.log("  Invalid, try again...");
    inputIndex++;
  }
} while (validNumber === null && inputIndex < inputs.length);

// ===================================
// 5. Password Retry Pattern
// ===================================
console.log("\n=== 5. Password Retry Pattern ===");

const correctPassword = "secret123";
const attempts = ["wrong1", "wrong2", "secret123"];
let attemptIndex = 0;
const maxAttempts = 3;
let authenticated = false;

do {
  const password = attempts[attemptIndex];
  console.log(`Attempt ${attemptIndex + 1}: Checking password...`);
  
  if (password === correctPassword) {
    authenticated = true;
    console.log("  ✅ Login successful!");
  } else {
    console.log("  ❌ Wrong password!");
    attemptIndex++;
  }
} while (!authenticated && attemptIndex < maxAttempts);

if (!authenticated) {
  console.log("Account locked!");
}

// ===================================
// 6. Game Loop Pattern
// ===================================
console.log("\n=== 6. Game Loop Pattern ===");

let health = 100;
const damages = [20, 15, 30, 25, 50]; // Simulated damage
let round = 0;

do {
  console.log(`Round ${round + 1}: Health = ${health}`);
  health -= damages[round];
  round++;
  
  if (health <= 0) {
    console.log("Game Over!");
  }
} while (health > 0 && round < damages.length);

console.log(`Final health: ${Math.max(0, health)}`);

// ===================================
// 7. Number Guessing Game
// ===================================
console.log("\n=== 7. Number Guessing Game ===");

const target = 7;
const guesses = [3, 5, 9, 7]; // Simulated guesses
let guessIndex = 0;
let found = false;

do {
  const guess = guesses[guessIndex];
  console.log(`Guess: ${guess}`);
  
  if (guess === target) {
    console.log("  🎉 Correct!");
    found = true;
  } else if (guess < target) {
    console.log("  Too low!");
  } else {
    console.log("  Too high!");
  }
  
  guessIndex++;
} while (!found && guessIndex < guesses.length);

// ===================================
// 8. Data Processing Until Condition
// ===================================
console.log("\n=== 8. Data Processing Until Condition ===");

const data = [10, 20, 30, 40, -1, 50, 60]; // -1 is sentinel
let dataIndex = 0;
let sum = 0;

do {
  const value = data[dataIndex];
  
  if (value === -1) {
    console.log("Sentinel found, stopping.");
    break;
  }
  
  sum += value;
  console.log(`Added ${value}, sum = ${sum}`);
  dataIndex++;
} while (dataIndex < data.length);

console.log(`Final sum: ${sum}`);

// ===================================
// 9. Retry with Delay Pattern
// ===================================
console.log("\n=== 9. Retry Pattern ===");

// Simulated API responses
const responses = [
  { success: false, error: "Connection timeout" },
  { success: false, error: "Server busy" },
  { success: true, data: "Response data" },
];
let retryCount = 0;
const maxRetries = 3;
let result = null;

do {
  const response = responses[retryCount];
  console.log(`Attempt ${retryCount + 1}:`);
  
  if (response.success) {
    result = response.data;
    console.log(`  ✅ Success: ${result}`);
  } else {
    console.log(`  ❌ Failed: ${response.error}`);
    retryCount++;
  }
} while (!result && retryCount < maxRetries);

// ===================================
// 10. Mathematical Operations
// ===================================
console.log("\n=== 10. Mathematical Operations ===");

// Factorial using do-while
function factorial(n) {
  if (n === 0) return 1;
  
  let result = 1;
  do {
    result *= n;
    n--;
  } while (n > 0);
  
  return result;
}

console.log(`5! = ${factorial(5)}`); // 120
console.log(`7! = ${factorial(7)}`); // 5040

// Fibonacci
function fibonacciUpTo(limit) {
  const sequence = [];
  let a = 0, b = 1;
  
  do {
    sequence.push(a);
    const temp = a + b;
    a = b;
    b = temp;
  } while (a <= limit);
  
  return sequence;
}

console.log(`Fibonacci up to 50: [${fibonacciUpTo(50).join(", ")}]`);

// ===================================
// 11. String Processing
// ===================================
console.log("\n=== 11. String Processing ===");

// Read until delimiter
const text = "Hello World! This is a test. End.";
let charIndex = 0;
let word = "";

do {
  const char = text[charIndex];
  
  if (char === " " || char === "." || char === "!") {
    if (word) {
      console.log(`Word: "${word}"`);
      word = "";
    }
  } else {
    word += char;
  }
  
  charIndex++;
} while (charIndex < text.length);

// ===================================
// 12. Random Number Generation
// ===================================
console.log("\n=== 12. Random Number Until Condition ===");

// Simulated "random" numbers
const randomSequence = [3, 7, 2, 8, 5, 4, 6, 1];
let randIndex = 0;
let count = 0;

do {
  const num = randomSequence[randIndex];
  count++;
  console.log(`Generated: ${num}`);
  randIndex++;
} while (randomSequence[randIndex - 1] !== 6 && randIndex < randomSequence.length);

console.log(`Took ${count} tries to get 6`);

// ===================================
// 13. Stack/Queue with Do-While
// ===================================
console.log("\n=== 13. Stack Processing ===");

const stack = [1, 2, 3, 4, 5];
console.log("Processing stack:");

do {
  const item = stack.pop();
  console.log(`  Popped: ${item}`);
} while (stack.length > 0);

// ===================================
// 14. Pagination Pattern
// ===================================
console.log("\n=== 14. Pagination Pattern ===");

// Simulated paginated data
const allItems = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
const pageSize = 10;
let page = 0;

do {
  const start = page * pageSize;
  const end = Math.min(start + pageSize, allItems.length);
  const pageItems = allItems.slice(start, end);
  
  console.log(`Page ${page + 1}:`);
  pageItems.forEach((item) => console.log(`  ${item}`));
  
  page++;
} while (page * pageSize < allItems.length);

// ===================================
// 15. When to Use Do-While
// ===================================
console.log("\n=== 15. Best Practices Summary ===");

console.log(`
✅ USE do-while when:
   - The loop body must execute at least once
   - Input validation (prompt user until valid)
   - Menu systems (show menu before checking choice)
   - Game loops (run game once before checking quit)
   - Retry patterns (try at least once)

❌ AVOID do-while when:
   - You might not need to execute at all
   - The condition should be checked first
   - Simple counting loops (use for instead)

💡 KEY DIFFERENCE from while:
   - while: condition checked BEFORE loop body
   - do-while: condition checked AFTER loop body
   - do-while always runs at least once
`);

console.log("✅ All do-while loop examples completed!");
