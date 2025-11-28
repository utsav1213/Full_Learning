// ==========================================
// JavaScript break and continue Statements Examples
// ==========================================

// PART 1: break Statement
console.log("=== BREAK STATEMENT ===\n");

// 1. break in for Loop
console.log("break in for loop (stops at 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 2. break in while Loop
let count = 0;
console.log("\nbreak in while loop:");
while (count < 10) {
  if (count === 5) {
    break;
  }
  console.log(count);
  count++;
}

// 3. break in do...while Loop
let num = 0;
console.log("\nbreak in do...while loop:");
do {
  num++;
  if (num === 5) {
    break;
  }
  console.log(num);
} while (num < 10);

// 4. Find First Match
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

let found = null;
console.log("\nFind first user over 28:");
for (let user of users) {
  if (user.age > 28) {
    found = user;
    break;
  }
}
console.log("Found:", found);

// 5. Search in Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let index = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    index = i;
    break;
  }
}
console.log(`\nTarget ${target} found at index:`, index);

// 6. Validation with Early Exit
const scores = [85, 90, 95, 45, 88];
let allPassed = true;

for (let score of scores) {
  if (score < 50) {
    allPassed = false;
    break;
  }
}
console.log("\nAll scores passed:", allPassed);

// PART 2: continue Statement
console.log("\n=== CONTINUE STATEMENT ===\n");

// 7. continue in for Loop
console.log("continue in for loop (skips even numbers):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 8. continue in while Loop
let count2 = 0;
console.log("\ncontinue in while loop (skips even numbers):");
while (count2 < 10) {
  count2++;
  if (count2 % 2 === 0) {
    continue;
  }
  console.log(count2);
}

// 9. continue in for...of Loop
const fruits = ["apple", "banana", "cherry", "date"];
console.log("\ncontinue in for...of (skips fruits starting with 'b'):");
for (let fruit of fruits) {
  if (fruit.startsWith("b")) {
    continue;
  }
  console.log(fruit);
}

// 10. Filter While Processing
const nums = [1, 2, -3, 4, -5, 6];
console.log("\nSkip negative numbers:");
for (let n of nums) {
  if (n < 0) {
    continue;
  }
  console.log(n * 2);
}

// 11. Skip Invalid Data
const userList = [
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: "" },
  { name: "Bob", email: "bob@example.com" },
];

console.log("\nSkip users without email:");
for (let user of userList) {
  if (!user.email) {
    continue;
  }
  console.log(`Sending email to ${user.email}`);
}

// PART 3: break vs continue Comparison
console.log("\n=== BREAK VS CONTINUE ===\n");

// With break
console.log("With break (loop STOPS at 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// With continue
console.log("\nWith continue (loop CONTINUES, skips 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// PART 4: Nested Loops
console.log("\n=== NESTED LOOPS ===\n");

// break in nested loop (breaks only inner loop)
console.log("break in nested loop (breaks inner only):");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// continue in nested loop
console.log("\ncontinue in nested loop (skips j=1):");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("\nbreak and continue examples completed!");
