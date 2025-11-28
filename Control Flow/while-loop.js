// ==========================================
// JavaScript while Loop Examples
// ==========================================

// 1. Basic while Loop
let count = 0;
console.log("Basic while loop (0-4):");
while (count < 5) {
  console.log(count);
  count++;
}

// 2. Count Down
let num = 5;
console.log("\nCount down (5-1):");
while (num > 0) {
  console.log(num);
  num--;
}

// 3. Sum Numbers
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("\nSum of 1-10:", sum);

// 4. Process Array Until Condition
const numbers = [1, 2, 3, 0, 5, 6];
let idx = 0;
console.log("\nProcess until zero:");
while (idx < numbers.length && numbers[idx] !== 0) {
  console.log(numbers[idx]);
  idx++;
}

// 5. Find First Match
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

let userIndex = 0;
let found = null;

while (userIndex < users.length && !found) {
  if (users[userIndex].age > 30) {
    found = users[userIndex];
  }
  userIndex++;
}
console.log("\nFirst user over 30:", found);

// 6. Retry Logic Simulation
let success = false;
let attempts = 0;
const maxAttempts = 5;

console.log("\nRetry logic simulation:");
while (!success && attempts < maxAttempts) {
  attempts++;
  console.log(`Attempt ${attempts}...`);
  success = Math.random() > 0.7; // 30% chance of success
  if (success) {
    console.log("Success!");
  }
}
if (!success) {
  console.log("Failed after max attempts");
}

// 7. Using break
let counter = 0;
console.log("\nUsing break (stops at 5):");
while (counter < 10) {
  counter++;
  if (counter === 5) {
    break;
  }
  console.log(counter);
}

// 8. Using continue
let num2 = 0;
console.log("\nUsing continue (skips even numbers):");
while (num2 < 10) {
  num2++;
  if (num2 % 2 === 0) {
    continue;
  }
  console.log(num2);
}

// 9. Multiple Conditions
let temperature = 30;
let humidity = 70;
console.log("\nMultiple conditions:");
while (temperature > 20 && humidity < 80) {
  console.log(`Temp: ${temperature}, Humidity: ${humidity}`);
  temperature--;
  humidity += 2;
}

// 10. Nested while Loops
let outer = 1;
console.log("\nNested while loops:");
while (outer <= 2) {
  let inner = 1;
  while (inner <= 2) {
    console.log(`outer=${outer}, inner=${inner}`);
    inner++;
  }
  outer++;
}

// 11. Process Queue
const queue = ["task1", "task2", "task3"];
console.log("\nProcess queue:");
while (queue.length > 0) {
  const task = queue.shift();
  console.log(`Processing: ${task}`);
}

// 12. Boolean Flag
let keepRunning = true;
let loopCounter = 0;
console.log("\nBoolean flag control:");
while (keepRunning) {
  loopCounter++;
  console.log(loopCounter);
  if (loopCounter >= 5) {
    keepRunning = false;
  }
}

console.log("\nwhile loop examples completed!");
