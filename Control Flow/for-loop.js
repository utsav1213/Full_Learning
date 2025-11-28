/**
 * 🚀 For Loop (Classic) - JavaScript Implementation
 * Comprehensive examples of for loops in JavaScript
 */

// ===================================
// 1. Basic For Loop
// ===================================
console.log("=== 1. Basic For Loop ===");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// ===================================
// 2. Counting Patterns
// ===================================
console.log("\n=== 2. Counting Patterns ===");

// Count up
console.log("Count up (0-9):");
for (let i = 0; i < 10; i++) {
  process.stdout.write(`${i} `);
}
console.log();

// Count down
console.log("Count down (10-1):");
for (let i = 10; i > 0; i--) {
  process.stdout.write(`${i} `);
}
console.log();

// Skip by 2
console.log("Skip by 2 (0-8):");
for (let i = 0; i < 10; i += 2) {
  process.stdout.write(`${i} `);
}
console.log();

// Multiply by 2
console.log("Multiply by 2 (1-64):");
for (let i = 1; i < 100; i *= 2) {
  process.stdout.write(`${i} `);
}
console.log();

// ===================================
// 3. Looping Through Arrays
// ===================================
console.log("\n=== 3. Looping Through Arrays ===");

const fruits = ["apple", "banana", "cherry", "date"];

// Basic array iteration
console.log("Array elements:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`  ${fruits[i]}`);
}

// With index and value
console.log("\nWith index:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`  Index ${i}: ${fruits[i]}`);
}

// ===================================
// 4. Nested Loops
// ===================================
console.log("\n=== 4. Nested Loops ===");

// Simple nested loop
console.log("Grid coordinates:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`  (${i}, ${j})`);
  }
}

// Multiplication table (5x5)
console.log("\nMultiplication Table (5x5):");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += `${(i * j).toString().padStart(3)} `;
  }
  console.log(row);
}

// ===================================
// 5. Empty Statements & Variations
// ===================================
console.log("\n=== 5. Loop Variations ===");

// Initialization outside
let counter = 0;
for (; counter < 3; counter++) {
  console.log(`Counter: ${counter}`);
}

// Multiple variables
console.log("\nMultiple variables:");
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`  i=${i}, j=${j}`);
}

// ===================================
// 6. Break and Continue
// ===================================
console.log("\n=== 6. Break and Continue ===");

// Break - exit the loop
console.log("Using break (stop at 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  process.stdout.write(`${i} `);
}
console.log();

// Continue - skip to next iteration
console.log("Using continue (skip even numbers):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  process.stdout.write(`${i} `);
}
console.log();

// ===================================
// 7. Real-World Examples
// ===================================
console.log("\n=== 7. Real-World Examples ===");

// Sum of numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of 1-100: ${sum}`); // 5050

// Find maximum in array
const numbers = [45, 23, 89, 12, 67, 34];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(`Max value: ${max}`); // 89

// Find minimum in array
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(`Min value: ${min}`); // 12

// Reverse an array
const arr = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(`Reversed: [${reversed.join(", ")}]`); // [5, 4, 3, 2, 1]

// Filter even numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = [];
for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 === 0) {
    evens.push(allNumbers[i]);
  }
}
console.log(`Even numbers: [${evens.join(", ")}]`); // [2, 4, 6, 8]

// ===================================
// 8. String Manipulation
// ===================================
console.log("\n=== 8. String Manipulation ===");

const str = "Hello World";

// Iterate through string
console.log("Characters in string:");
for (let i = 0; i < str.length; i++) {
  console.log(`  Position ${i}: '${str[i]}'`);
}

// Count specific character
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === "l") {
    count++;
  }
}
console.log(`Count of 'l': ${count}`); // 3

// ===================================
// 9. 2D Array (Matrix)
// ===================================
console.log("\n=== 9. 2D Array (Matrix) ===");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matrix:");
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += `${matrix[i][j]} `;
  }
  console.log(`  ${row}`);
}

// Sum of all elements
let matrixSum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrixSum += matrix[i][j];
  }
}
console.log(`Sum of matrix: ${matrixSum}`); // 45

// ===================================
// 10. Fibonacci Sequence
// ===================================
console.log("\n=== 10. Fibonacci Sequence ===");

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(`First 10 Fibonacci numbers: [${fibonacci(10).join(", ")}]`);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// ===================================
// 11. Prime Numbers
// ===================================
console.log("\n=== 11. Prime Numbers ===");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primes = [];
for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}
console.log(`Prime numbers up to 50: [${primes.join(", ")}]`);

// ===================================
// 12. Performance Tips
// ===================================
console.log("\n=== 12. Performance Tips ===");

// Cache array length
const largeArray = new Array(1000).fill(1);

console.time("Without cache");
for (let i = 0; i < largeArray.length; i++) {
  // operations
}
console.timeEnd("Without cache");

console.time("With cache");
const len = largeArray.length;
for (let i = 0; i < len; i++) {
  // operations
}
console.timeEnd("With cache");

console.log("\n✅ All for loop examples completed!");
