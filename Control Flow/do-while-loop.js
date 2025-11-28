// ==========================================
// JavaScript do...while Loop Examples
// ==========================================

// 1. Basic do...while Loop
let count = 0;
console.log("Basic do...while loop (0-4):");
do {
  console.log(count);
  count++;
} while (count < 5);

// 2. Guaranteed First Execution
let num = 10;
console.log("\nGuaranteed first execution (condition is false):");
do {
  console.log("This runs once even though num > 5:", num);
} while (num < 5);

// 3. Count Up
let i = 1;
console.log("\nCount up (1-5):");
do {
  console.log(i);
  i++;
} while (i <= 5);

// 4. Count Down
let j = 5;
console.log("\nCount down (5-1):");
do {
  console.log(j);
  j--;
} while (j > 0);

// 5. Menu System Simulation
let choice;
let menuCount = 0;
console.log("\nMenu system simulation:");
do {
  console.log("1. Start Game");
  console.log("2. Settings");
  console.log("3. Exit");
  // Simulating user selecting exit after 2 displays
  menuCount++;
  choice = menuCount >= 2 ? "3" : "1";
  console.log(`User selected: ${choice}`);
} while (choice !== "3");

// 6. Input Validation Simulation
let validInput = false;
let inputAttempts = 0;
console.log("\nInput validation simulation:");
do {
  inputAttempts++;
  console.log(`Attempt ${inputAttempts}: Checking input...`);
  // Simulate valid input on 3rd attempt
  validInput = inputAttempts >= 3;
} while (!validInput);
console.log("Valid input received!");

// 7. Retry Mechanism
let success = false;
let attempts = 0;
const maxRetries = 5;

console.log("\nRetry mechanism:");
do {
  attempts++;
  console.log(`API call attempt ${attempts}...`);
  success = Math.random() > 0.6; // 40% success rate
  if (success) {
    console.log("Success!");
  }
} while (!success && attempts < maxRetries);

if (!success) {
  console.log("Failed after max retries");
}

// 8. Using break
let num2 = 0;
console.log("\nUsing break (stops at 3):");
do {
  num2++;
  console.log(num2);
  if (num2 === 3) {
    break;
  }
} while (num2 < 10);

// 9. Using continue
let num3 = 0;
console.log("\nUsing continue (skips 5):");
do {
  num3++;
  if (num3 === 5) {
    continue;
  }
  console.log(num3);
} while (num3 < 8);

// 10. Nested do...while Loops
let outer = 1;
console.log("\nNested do...while loops:");
do {
  let inner = 1;
  do {
    console.log(`outer=${outer}, inner=${inner}`);
    inner++;
  } while (inner <= 2);
  outer++;
} while (outer <= 2);

// 11. Game Round Simulation
let playing = true;
let score = 0;
let rounds = 0;

console.log("\nGame round simulation:");
do {
  console.log("Game round started");
  score += 10;
  rounds++;
  console.log(`Score: ${score}`);
  playing = rounds < 3; // Play 3 rounds
} while (playing);
console.log(`Final score: ${score}`);

// 12. Process At Least One Item
const tasks = ["task1", "task2", "task3"];
console.log("\nProcess at least one task:");
do {
  const task = tasks.shift();
  console.log(`Processing: ${task}`);
} while (tasks.length > 0);

// 13. Authentication Simulation
let authenticated = false;
let loginAttempts = 0;
const maxLoginAttempts = 3;

console.log("\nAuthentication simulation:");
do {
  loginAttempts++;
  console.log(`Login attempt ${loginAttempts}`);
  authenticated = loginAttempts >= 2; // Succeed on 2nd attempt
  if (authenticated) {
    console.log("Login successful!");
  }
} while (!authenticated && loginAttempts < maxLoginAttempts);

if (!authenticated) {
  console.log("Account locked");
}

console.log("\ndo...while loop examples completed!");
