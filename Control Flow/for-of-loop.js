// ==========================================
// JavaScript for...of Loop Examples
// ==========================================

// 1. Basic for...of with Arrays
const fruits = ["apple", "banana", "cherry"];
console.log("Iterating over array:");
for (let fruit of fruits) {
  console.log(fruit);
}

// 2. for...of with Numbers
const numbers = [10, 20, 30, 40];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("\nSum of numbers:", sum);

// 3. for...of with Strings
const word = "hello";
console.log("\nIterating over string:");
for (let char of word) {
  console.log(char);
}

// 4. Count Vowels in String
const text = "JavaScript";
const vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let char of text) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}
console.log(`\nVowels in "${text}":`, vowelCount);

// 5. for...of with Sets
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
console.log("\nIterating over Set:");
for (let num of uniqueNumbers) {
  console.log(num);
}

// 6. for...of with Maps
const userMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "NYC"],
]);

console.log("\nIterating over Map:");
for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// 7. for...of with entries() - Get Index and Value
console.log("\nWith entries() (index and value):");
for (let [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}

// 8. for...of with Objects (using Object.entries)
const person = { name: "John", age: 30 };
console.log("\nIterating over Object using Object.entries():");
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// 9. Using break in for...of
console.log("\nUsing break (stops at 3):");
for (let num of [1, 2, 3, 4, 5]) {
  if (num === 3) break;
  console.log(num);
}

// 10. Using continue in for...of
console.log("\nUsing continue (skips even numbers):");
for (let num of [1, 2, 3, 4, 5]) {
  if (num % 2 === 0) continue;
  console.log(num);
}

// 11. Find First Match
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

console.log("\nFinding first user over 30:");
for (let user of users) {
  if (user.age > 30) {
    console.log(`Found: ${user.name}`);
    break;
  }
}

// 12. Filter Array with for...of
const allNumbers = [1, 2, 3, 4, 5, 6];
const evens = [];

for (let num of allNumbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log("\nEven numbers:", evens);

// 13. Process Matrix (Nested for...of)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("\nProcessing matrix:");
for (let row of matrix) {
  for (let cell of row) {
    process.stdout.write(cell + " ");
  }
  console.log();
}

console.log("\nfor...of loop examples completed!");
