# 🚀 do...while Loop

A **comprehensive guide** to the `do...while` loop in JavaScript — executes at least once, then repeats while a condition is true.

---

## What is a do...while Loop?

A `do...while` loop **executes the code block first**, then checks the condition. The loop will always run **at least once**, even if the condition is initially false.

---

## 🌟 1. Basic Syntax

```js
do {
  // code to execute
} while (condition);
```

**Key difference:** Code executes **before** condition is checked.

### Example:

```js
let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);
// Output: 0, 1, 2, 3, 4
```

---

## 🌟 2. do...while vs while

The key difference: **when the condition is checked**.

### while loop:

```js
let num = 10;

while (num < 5) {
  console.log(num); // Never executes!
}
// No output
```

### do...while loop:

```js
let num = 10;

do {
  console.log(num); // Executes once!
} while (num < 5);
// Output: 10
```

**The `do...while` loop runs at least once, regardless of condition!**

---

## 🌟 3. How do...while Works

1. **Execute the code block** first
2. **Check the condition**
3. If condition is `true`, **repeat** from step 1
4. If condition is `false`, **exit** the loop

### Flowchart:

```
Start
  ↓
Execute code block
  ↓
Check condition
  ↓
true → back to Execute code block
  ↓
false → Exit
```

---

## 🌟 4. Basic Examples

### Count up:

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1, 2, 3, 4, 5
```

### Count down:

```js
let i = 5;

do {
  console.log(i);
  i--;
} while (i > 0);
// Output: 5, 4, 3, 2, 1
```

### At least one execution:

```js
let password = "wrong";

do {
  console.log("Enter password:");
  // password = prompt("Password:"); // In browser
  password = "correct"; // Simulated
} while (password !== "correct");
console.log("Access granted!");
```

---

## 🌟 5. Common Use Cases

### Menu systems:

```js
let choice;

do {
  console.log("1. Start Game");
  console.log("2. Settings");
  console.log("3. Exit");

  // choice = prompt("Select option:");
  choice = "3"; // Simulated
} while (choice !== "3");
```

### Input validation:

```js
let age;

do {
  // age = prompt("Enter your age:");
  age = 25; // Simulated
} while (age < 0 || age > 120 || isNaN(age));

console.log(`Valid age: ${age}`);
```

### Retry mechanism:

```js
let success = false;
let attempts = 0;

do {
  attempts++;
  console.log(`Attempt ${attempts}...`);

  // Simulate operation
  success = Math.random() > 0.7;

  if (success) {
    console.log("Success!");
  }
} while (!success && attempts < 5);

if (!success) {
  console.log("Failed after max attempts");
}
```

---

## 🌟 6. Using `break` and `continue`

### `break` - Exit loop:

```js
let num = 0;

do {
  num++;
  console.log(num);

  if (num === 3) {
    break; // Exit when num is 3
  }
} while (num < 10);
// Output: 1, 2, 3
```

### `continue` - Skip to next iteration:

```js
let num = 0;

do {
  num++;

  if (num % 2 === 0) {
    continue; // Skip even numbers
  }

  console.log(num);
} while (num < 10);
// Output: 1, 3, 5, 7, 9
```

---

## 🌟 7. Real-World Examples

### Game loop (always runs once):

```js
let playing = true;
let score = 0;

do {
  console.log("Game round started");
  score += 10;
  console.log(`Score: ${score}`);

  // playing = confirm("Play again?");
  playing = false; // Simulated
} while (playing);

console.log(`Final score: ${score}`);
```

### Process at least one item:

```js
const tasks = ["task1", "task2", "task3"];

do {
  const task = tasks.shift();
  console.log(`Processing: ${task}`);
} while (tasks.length > 0);
// Processes all tasks
```

### API retry logic:

```js
let response;
let retries = 0;
const maxRetries = 3;

do {
  retries++;
  console.log(`API call attempt ${retries}...`);

  // Simulate API call
  response = Math.random() > 0.5 ? { success: true } : null;

  if (!response && retries < maxRetries) {
    console.log("Retrying...");
  }
} while (!response && retries < maxRetries);

if (response) {
  console.log("API call successful!");
} else {
  console.log("API call failed after max retries");
}
```

### User authentication:

```js
let authenticated = false;
let attempts = 0;
const maxAttempts = 3;

do {
  attempts++;
  console.log(`Login attempt ${attempts}`);

  // Simulate login
  const username = "admin";
  const password = "pass123";

  if (username === "admin" && password === "pass123") {
    authenticated = true;
    console.log("Login successful!");
  } else {
    console.log("Invalid credentials");
  }
} while (!authenticated && attempts < maxAttempts);

if (!authenticated) {
  console.log("Account locked");
}
```

---

## 🌟 8. Nested do...while Loops

```js
let i = 1;

do {
  let j = 1;

  do {
    console.log(`i=${i}, j=${j}`);
    j++;
  } while (j <= 2);

  i++;
} while (i <= 2);
// Output:
// i=1, j=1
// i=1, j=2
// i=2, j=1
// i=2, j=2
```

---

## 🌟 9. Comparison: for, while, do...while

### for loop:

```js
for (let i = 10; i < 5; i++) {
  console.log(i); // Never runs
}
```

### while loop:

```js
let i = 10;
while (i < 5) {
  console.log(i); // Never runs
  i++;
}
```

### do...while loop:

```js
let i = 10;
do {
  console.log(i); // Runs once: 10
  i++;
} while (i < 5);
```

**Only `do...while` guarantees at least one execution!**

---

## 🌟 10. When to Use do...while

### ✅ Use do...while when:

- You need to execute code **at least once**
- User input/menu systems
- Validation loops
- Retry mechanisms
- Game loops
- Processing at least one item

### ❌ Don't use when:

- Condition should be checked first
- Loop might not need to run at all
- Regular `while` or `for` is more appropriate

---

## 🌟 11. Common Patterns

### Input validation pattern:

```js
let input;

do {
  input = getInput(); // Get user input
} while (!isValid(input));
```

### Retry pattern:

```js
let result;
let attempts = 0;

do {
  result = tryOperation();
  attempts++;
} while (!result && attempts < maxAttempts);
```

### Process until empty:

```js
do {
  processItem(queue.shift());
} while (queue.length > 0);
```

---

## 🌟 12. Common Mistakes

### ❌ Forgetting semicolon after while:

```js
do {
  console.log("Hello");
} while (condition); // Missing semicolon!
```

**Correct:**

```js
do {
  console.log("Hello");
} while (condition); // ✅
```

### ❌ Not updating condition variable:

```js
let i = 0;
do {
  console.log(i);
  // Forgot i++
} while (i < 5);
// Infinite loop!
```

### ❌ Using when condition should be checked first:

```js
// Wrong choice - should use while
let arr = [];
do {
  console.log(arr.pop()); // undefined on empty array!
} while (arr.length > 0);
```

---

## 🧠 Deep CS Understanding

### Internal Working:

```js
do {
  statement;
} while (condition);

// Conceptually equivalent to:
statement;
while (condition) {
  statement;
}
```

### Performance:

- Same performance as `while` loop
- No significant overhead
- Minimal memory usage
- Optimized by modern JS engines

### Use Cases in Other Languages:

- **C/C++**: Common for menu systems
- **Java**: Input validation
- **Python**: Doesn't have `do...while`! (uses `while True` with break)

---

## 🏆 FINAL SUMMARY

### ✔ `do...while` executes code **at least once**

### ✔ Condition is checked **after** code execution

### ✔ Syntax: `do { } while (condition);` - note the semicolon!

### ✔ Perfect for menus, input validation, retry logic

### ✔ Can use `break` and `continue`

### ✔ Guarantees minimum one iteration

### ✔ Less common than `while` or `for` loops

### ✔ Use when you need guaranteed first execution

### ✔ Same performance as `while` loop

### ✔ Watch for infinite loops!

---

## 🚀 Related Topics

- while loop
- for loop
- break statement
- continue statement
- Input validation
- Retry patterns
- Loop control flow
