/**
 * 🚀 While Loop - JavaScript Implementation
 * Comprehensive examples of while loops in JavaScript
 */

// ===================================
// 1. Basic While Loop
// ===================================
console.log("=== 1. Basic While Loop ===");

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4

// ===================================
// 2. Counting Patterns
// ===================================
console.log("\n=== 2. Counting Patterns ===");

// Count up
console.log("Count up (1-5):");
let count = 1;
while (count <= 5) {
  process.stdout.write(`${count} `);
  count++;
}
console.log();

// Count down
console.log("Count down (5-1):");
let countdown = 5;
while (countdown >= 1) {
  process.stdout.write(`${countdown} `);
  countdown--;
}
console.log();

// ===================================
// 3. While Loop with Arrays
// ===================================
console.log("\n=== 3. While Loop with Arrays ===");

const fruits = ["apple", "banana", "cherry", "date"];
let index = 0;

while (index < fruits.length) {
  console.log(`${index}: ${fruits[index]}`);
  index++;
}

// ===================================
// 4. While Loop with Condition
// ===================================
console.log("\n=== 4. While Loop with Condition ===");

// Find first number divisible by 7
let num = 1;
while (num % 7 !== 0) {
  num++;
}
console.log(`First number divisible by 7: ${num}`);

// Sum until exceeds 100
let sum = 0;
let n = 1;
while (sum + n <= 100) {
  sum += n;
  n++;
}
console.log(`Sum: ${sum}, stopped at n=${n - 1}`);

// ===================================
// 5. Infinite Loop with Break
// ===================================
console.log("\n=== 5. Infinite Loop with Break ===");

let counter = 0;
while (true) {
  counter++;
  if (counter === 5) {
    console.log("Breaking at counter = 5");
    break;
  }
  console.log(`Counter: ${counter}`);
}

// ===================================
// 6. While with Continue
// ===================================
console.log("\n=== 6. While with Continue ===");

let x = 0;
console.log("Skip even numbers:");
while (x < 10) {
  x++;
  if (x % 2 === 0) continue;
  console.log(x);
}
// Output: 1, 3, 5, 7, 9

// ===================================
// 7. Input Validation Pattern
// ===================================
console.log("\n=== 7. Input Validation Pattern ===");

// Simulate input validation
const validInputs = [null, "", "valid input"];
let inputIndex = 0;
let input;

while (!input) {
  input = validInputs[inputIndex];
  inputIndex++;

  if (!input) {
    console.log("Invalid input, trying again...");
  }
}
console.log(`Valid input received: "${input}"`);

// ===================================
// 8. Queue Processing
// ===================================
console.log("\n=== 8. Queue Processing ===");

const queue = ["task1", "task2", "task3", "task4"];

console.log("Processing queue:");
while (queue.length > 0) {
  const task = queue.shift();
  console.log(`  Processing: ${task}`);
}
console.log("Queue empty!");

// ===================================
// 9. Stack Processing
// ===================================
console.log("\n=== 9. Stack Processing ===");

const stack = [1, 2, 3, 4, 5];

console.log("Processing stack (LIFO):");
while (stack.length > 0) {
  const item = stack.pop();
  console.log(`  Popped: ${item}`);
}

// ===================================
// 10. Finding in Data
// ===================================
console.log("\n=== 10. Finding in Data ===");

const numbers = [12, 45, 78, 23, 56, 89, 34];
let searchIndex = 0;

// Find first number > 50
while (searchIndex < numbers.length && numbers[searchIndex] <= 50) {
  searchIndex++;
}

if (searchIndex < numbers.length) {
  console.log(`First number > 50: ${numbers[searchIndex]} at index ${searchIndex}`);
} else {
  console.log("No number > 50 found");
}

// ===================================
// 11. String Processing
// ===================================
console.log("\n=== 11. String Processing ===");

// Remove leading zeros
let numStr = "000123456";
let strIndex = 0;

while (numStr[strIndex] === "0" && strIndex < numStr.length - 1) {
  strIndex++;
}

console.log(`Original: "${numStr}"`);
console.log(`Without leading zeros: "${numStr.slice(strIndex)}"`);

// ===================================
// 12. Mathematical Operations
// ===================================
console.log("\n=== 12. Mathematical Operations ===");

// Factorial using while
function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

console.log(`5! = ${factorial(5)}`); // 120
console.log(`10! = ${factorial(10)}`); // 3628800

// Power function
function power(base, exp) {
  let result = 1;
  while (exp > 0) {
    result *= base;
    exp--;
  }
  return result;
}

console.log(`2^8 = ${power(2, 8)}`); // 256
console.log(`3^4 = ${power(3, 4)}`); // 81

// ===================================
// 13. Collatz Conjecture
// ===================================
console.log("\n=== 13. Collatz Conjecture ===");

function collatz(n) {
  const sequence = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }

  return sequence;
}

console.log("Collatz sequence for 7:");
console.log(collatz(7).join(" -> "));

// ===================================
// 14. Binary Search
// ===================================
console.log("\n=== 14. Binary Search ===");

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(`Array: [${sortedArray.join(", ")}]`);
console.log(`Index of 11: ${binarySearch(sortedArray, 11)}`); // 5
console.log(`Index of 6: ${binarySearch(sortedArray, 6)}`); // -1

// ===================================
// 15. Greatest Common Divisor
// ===================================
console.log("\n=== 15. Greatest Common Divisor (GCD) ===");

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(`GCD(48, 18) = ${gcd(48, 18)}`); // 6
console.log(`GCD(100, 25) = ${gcd(100, 25)}`); // 25

// ===================================
// 16. Digit Operations
// ===================================
console.log("\n=== 16. Digit Operations ===");

// Count digits
function countDigits(n) {
  n = Math.abs(n);
  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count === 0 ? 1 : count;
}

console.log(`Digits in 12345: ${countDigits(12345)}`); // 5

// Sum of digits
function sumDigits(n) {
  n = Math.abs(n);
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(`Sum of digits in 12345: ${sumDigits(12345)}`); // 15

// Reverse number
function reverseNumber(n) {
  const isNegative = n < 0;
  n = Math.abs(n);
  let reversed = 0;

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return isNegative ? -reversed : reversed;
}

console.log(`Reverse of 12345: ${reverseNumber(12345)}`); // 54321

console.log("\n✅ All while loop examples completed!");
