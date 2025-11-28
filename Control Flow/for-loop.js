// ==========================================
// JavaScript For Loop Examples
// ==========================================

// 1. Basic For Loop
console.log("Basic for loop (0-4):");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. Count Down
console.log("\nCount down (5-1):");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 3. Skip by 2
console.log("\nSkip by 2 (0-8):");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 4. Looping Through Arrays
const fruits = ["apple", "banana", "cherry"];
console.log("\nLooping through array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

// 5. Nested Loops
console.log("\nNested loops (3x3 grid):");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// 6. Multiplication Table (2x)
console.log("\nMultiplication table for 2:");
for (let i = 1; i <= 5; i++) {
  console.log(`2 × ${i} = ${2 * i}`);
}

// 7. Multiple Variables in For Loop
console.log("\nMultiple variables (i increases, j decreases):");
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i=${i}, j=${j}`);
}

// 8. Sum of Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("\nSum of 1-10:", sum);

// 9. Find Maximum in Array
const numbers = [45, 23, 89, 12, 67];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("\nMaximum value:", max);

// 10. Reverse an Array
const arr = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log("\nOriginal array:", arr);
console.log("Reversed array:", reversed);

// 11. Filter Even Numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = [];
for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 === 0) {
    evens.push(allNumbers[i]);
  }
}
console.log("\nEven numbers:", evens);

// 12. Using Break
console.log("\nUsing break (stops at 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// 13. Using Continue
console.log("\nUsing continue (skips even numbers):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

console.log("\nFor loop examples completed!");
