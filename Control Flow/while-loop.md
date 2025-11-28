# 🚀 while Loop

A **comprehensive guide** to the `while` loop in JavaScript — perfect for loops where the number of iterations is unknown.

---

## What is a while Loop?

A `while` loop executes a block of code **as long as** a specified condition is `true`. Unlike `for` loops, you don't need to know how many iterations you'll need upfront.

---

## 🌟 1. Basic Syntax

```js
while (condition) {
  // code to execute while condition is true
}
```

### Example:

```js
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
// Output: 0, 1, 2, 3, 4
```

---

## 🌟 2. How while Loop Works

1. **Check condition** before entering the loop
2. If condition is `true`, **execute the code block**
3. **Repeat** from step 1
4. If condition is `false`, **exit the loop**

### Important:

- Condition is checked **before** each iteration
- If condition is initially `false`, loop body never executes
- Make sure condition eventually becomes `false` (avoid infinite loops!)

---

## 🌟 3. Basic Examples

### Count down:

```js
let num = 5;

while (num > 0) {
  console.log(num);
  num--;
}
// Output: 5, 4, 3, 2, 1
```

### Sum numbers:

```js
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum); // 55
```

### Read until condition:

```js
let password = "";

while (password !== "secret") {
  password = prompt("Enter password:");
}
console.log("Access granted!");
```

---

## 🌟 4. Infinite Loops (Be Careful!)

### ❌ Forgetting to update condition:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++
  // This runs forever!
}
```

### ❌ Condition always true:

```js
while (true) {
  console.log("Forever");
  // No break statement - infinite loop!
}
```

### ✅ Intentional infinite loop with break:

```js
let attempts = 0;

while (true) {
  attempts++;
  if (attempts > 5) {
    break; // Exit loop
  }
  console.log(`Attempt ${attempts}`);
}
```

---

## 🌟 5. Using `break` and `continue`

### `break` - Exit the loop:

```js
let num = 0;

while (num < 10) {
  num++;
  if (num === 5) {
    break; // Exit when num is 5
  }
  console.log(num);
}
// Output: 1, 2, 3, 4
```

### `continue` - Skip to next iteration:

```js
let num = 0;

while (num < 10) {
  num++;
  if (num % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(num);
}
// Output: 1, 3, 5, 7, 9
```

---

## 🌟 6. while vs for Loop

Both loops can do the same job, but syntax differs.

### for loop:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Equivalent while loop:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### When to use which?

**Use `for` when:**

- You know the number of iterations
- You need a counter variable
- You want concise syntax

**Use `while` when:**

- Number of iterations is unknown
- Loop depends on a condition (not a counter)
- Waiting for user input or events
- Checking states or flags

---

## 🌟 7. Real-World Examples

### Process array until condition:

```js
const numbers = [1, 2, 3, 0, 5, 6];
let i = 0;

while (i < numbers.length && numbers[i] !== 0) {
  console.log(numbers[i]);
  i++;
}
// Output: 1, 2, 3
// Stops at 0
```

### Find first match:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

let i = 0;
let found = null;

while (i < users.length && !found) {
  if (users[i].age > 30) {
    found = users[i];
  }
  i++;
}
console.log(found); // { name: "Bob", age: 35 }
```

### Retry logic:

```js
let success = false;
let attempts = 0;
const maxAttempts = 3;

while (!success && attempts < maxAttempts) {
  attempts++;
  console.log(`Attempt ${attempts}...`);

  // Simulate operation
  success = Math.random() > 0.5;

  if (success) {
    console.log("Success!");
  }
}

if (!success) {
  console.log("Failed after max attempts");
}
```

### Game loop:

```js
let playerHealth = 100;
let enemyHealth = 100;

while (playerHealth > 0 && enemyHealth > 0) {
  // Player attacks
  enemyHealth -= 10;
  console.log(`Enemy health: ${enemyHealth}`);

  if (enemyHealth <= 0) {
    console.log("You win!");
    break;
  }

  // Enemy attacks
  playerHealth -= 15;
  console.log(`Your health: ${playerHealth}`);

  if (playerHealth <= 0) {
    console.log("Game over!");
    break;
  }
}
```

### Poll until ready:

```js
let isReady = false;
let checkCount = 0;

while (!isReady && checkCount < 10) {
  checkCount++;
  console.log(`Checking... (${checkCount})`);

  // Simulate checking status
  isReady = checkCount >= 5;

  if (!isReady) {
    // Wait before next check (in real code)
    // await delay(1000);
  }
}
```

---

## 🌟 8. Multiple Conditions

```js
let temperature = 30;
let humidity = 70;

while (temperature > 20 && humidity < 80) {
  console.log(`Temp: ${temperature}, Humidity: ${humidity}`);
  temperature--;
  humidity += 2;
}
```

---

## 🌟 9. Nested while Loops

```js
let i = 1;

while (i <= 3) {
  let j = 1;

  while (j <= 3) {
    console.log(`i=${i}, j=${j}`);
    j++;
  }

  i++;
}
// Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// ...
```

---

## 🌟 10. Processing with while Loop

### Remove elements from array:

```js
const numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0) {
  console.log(numbers.pop());
}
// Output: 5, 4, 3, 2, 1
// Array is now empty
```

### Process queue:

```js
const queue = ["task1", "task2", "task3"];

while (queue.length > 0) {
  const task = queue.shift();
  console.log(`Processing: ${task}`);
}
// Output:
// "Processing: task1"
// "Processing: task2"
// "Processing: task3"
```

---

## 🌟 11. Boolean Flags

```js
let keepRunning = true;
let counter = 0;

while (keepRunning) {
  counter++;
  console.log(counter);

  if (counter >= 5) {
    keepRunning = false;
  }
}
// Output: 1, 2, 3, 4, 5
```

---

## 🌟 12. Common Pitfalls

### ❌ Not updating the condition variable:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  // Forgot i++
}
// Infinite loop!
```

### ❌ Wrong comparison operator:

```js
let i = 0;
while (i <= 5) {
  // Should be i < 5
  console.log(i);
  i++;
}
// Outputs 0-5 instead of 0-4
```

### ❌ Modifying condition incorrectly:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i += 2; // Might skip the exact condition
}
```

---

## 🧠 Deep CS Understanding

### How while Works Internally:

```js
while (condition) {
  statement;
}

// Equivalent to:
loop_start:
if (condition) {
  statement;
  goto loop_start; // Simplified representation
}
```

### Performance:

- While loops are **very efficient**
- No overhead of initialization and increment expressions
- Direct condition checking
- Same performance as `for` loops in practice

### Memory:

- Uses minimal memory
- Only stores variables you declare
- No hidden counters or state

---

## 🏆 FINAL SUMMARY

### ✔ `while` loop runs **as long as** condition is `true`

### ✔ Condition is checked **before** each iteration

### ✔ Perfect when number of iterations is **unknown**

### ✔ Must ensure condition eventually becomes `false`

### ✔ Can use `break` to exit early

### ✔ Can use `continue` to skip iterations

### ✔ Watch out for **infinite loops**

### ✔ Best for: waiting, polling, conditional processing

### ✔ More flexible than `for` loop

### ✔ Similar performance to `for` loop

---

## 🚀 Related Topics

- do...while loop
- for loop
- break statement
- continue statement
- Infinite loops
- Loop control flow
