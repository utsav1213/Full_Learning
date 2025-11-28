# 🚀 break and continue Statements

A **comprehensive guide** to `break` and `continue` statements in JavaScript — essential tools for controlling loop execution.

---

## What are break and continue?

**`break`** and **`continue`** are control flow statements that alter the normal flow of loops.

- **`break`** → Exits the loop entirely
- **`continue`** → Skips the current iteration and moves to the next

---

# PART 1: break Statement

## 🌟 1. What is `break`?

The `break` statement **terminates** the current loop and transfers control to the statement following the loop.

### Syntax:

```js
break;
```

---

## 🌟 2. break in for Loop

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

Loop stops completely when `break` is executed.

---

## 🌟 3. break in while Loop

```js
let count = 0;

while (count < 10) {
  if (count === 5) {
    break;
  }
  console.log(count);
  count++;
}
// Output: 0, 1, 2, 3, 4
```

---

## 🌟 4. break in do...while Loop

```js
let num = 0;

do {
  num++;
  if (num === 5) {
    break;
  }
  console.log(num);
} while (num < 10);
// Output: 1, 2, 3, 4
```

---

## 🌟 5. break in switch Statement

`break` is commonly used in `switch` to prevent fall-through:

```js
const color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break; // Exit switch
  case "yellow":
    console.log("Slow");
    break;
  case "green":
    console.log("Go");
    break;
}
// Output: "Stop"
```

---

## 🌟 6. break in Nested Loops

`break` only exits the **innermost** loop:

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break; // Only breaks inner loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0
```

---

## 🌟 7. Real-World break Examples

### Find first match:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

let found = null;

for (let user of users) {
  if (user.age > 28) {
    found = user;
    break; // Stop searching once found
  }
}
console.log(found); // { name: "Jane", age: 30 }
```

### Search in array:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let index = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    index = i;
    break; // Found it, exit loop
  }
}
console.log(`Found at index: ${index}`); // 4
```

### Validation with early exit:

```js
const scores = [85, 90, 95, 45, 88];
let allPassed = true;

for (let score of scores) {
  if (score < 50) {
    allPassed = false;
    break; // No need to check further
  }
}
console.log(allPassed); // false
```

---

# PART 2: continue Statement

## 🌟 8. What is `continue`?

The `continue` statement **skips the rest** of the current iteration and moves to the next iteration of the loop.

### Syntax:

```js
continue;
```

---

## 🌟 9. continue in for Loop

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

---

## 🌟 10. continue in while Loop

```js
let count = 0;

while (count < 10) {
  count++;

  if (count % 2 === 0) {
    continue; // Skip even numbers
  }

  console.log(count);
}
// Output: 1, 3, 5, 7, 9
```

---

## 🌟 11. continue in do...while Loop

```js
let num = 0;

do {
  num++;

  if (num === 5) {
    continue; // Skip 5
  }

  console.log(num);
} while (num < 10);
// Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
```

---

## 🌟 12. continue in for...of Loop

```js
const fruits = ["apple", "banana", "cherry", "date"];

for (let fruit of fruits) {
  if (fruit.startsWith("b")) {
    continue; // Skip fruits starting with 'b'
  }
  console.log(fruit);
}
// Output: "apple", "cherry", "date"
```

---

## 🌟 13. Real-World continue Examples

### Filter while processing:

```js
const numbers = [1, 2, -3, 4, -5, 6];

for (let num of numbers) {
  if (num < 0) {
    continue; // Skip negative numbers
  }
  console.log(num * 2);
}
// Output: 2, 4, 8, 12
```

### Skip invalid data:

```js
const users = [
  { name: "John", email: "john@example.com" },
  { name: "Jane", email: "" },
  { name: "Bob", email: "bob@example.com" },
];

for (let user of users) {
  if (!user.email) {
    continue; // Skip users without email
  }
  console.log(`Sending email to ${user.email}`);
}
// Output:
// "Sending email to john@example.com"
// "Sending email to bob@example.com"
```

### Process only specific items:

```js
const items = ["apple", "BANANA", "cherry", "DATE"];

for (let item of items) {
  if (item === item.toUpperCase()) {
    continue; // Skip uppercase items
  }
  console.log(item.toUpperCase());
}
// Output: "APPLE", "CHERRY"
```

---

## 🌟 14. break vs continue

### Comparison:

```js
// With break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
// Loop STOPS

// With continue
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
// Loop CONTINUES, skips 5
```

| Feature     | `break`        | `continue`              |
| ----------- | -------------- | ----------------------- |
| Effect      | Exits loop     | Skips current iteration |
| Loop status | Terminates     | Continues               |
| Code after  | Never runs     | Runs in next iterations |
| Use case    | Stop searching | Skip invalid items      |

---

## 🌟 15. Nested Loops with break and continue

### continue in nested loop:

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue; // Skips j=1 in inner loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=0, j=2
// i=1, j=0
// i=1, j=2
// i=2, j=0
// i=2, j=2
```

### break in nested loop:

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break; // Exits inner loop only
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0
```

---

## 🌟 16. Labels with break and continue

**Labels** allow you to break or continue outer loops from inner loops.

### Syntax:

```js
labelName: loop {
  break labelName;
  // or
  continue labelName;
}
```

### Example with break:

```js
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Breaks OUTER loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

### Example with continue:

```js
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop; // Continue OUTER loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=1, j=0
// i=2, j=0
```

---

## 🌟 17. Common Mistakes

### ❌ Using break outside a loop:

```js
if (condition) {
  break; // ❌ SyntaxError: Illegal break statement
}
```

### ❌ Using continue outside a loop:

```js
function test() {
  continue; // ❌ SyntaxError: Illegal continue statement
}
```

### ❌ Using in forEach:

```js
[1, 2, 3].forEach(num => {
  if (num === 2) break; // ❌ SyntaxError
});

// Use return instead (skips iteration)
[1, 2, 3].forEach(num => {
  if (num === 2) return; // ✅ Works like continue
  console.log(num);
});
```

---

## 🌟 18. Alternatives to break and continue

### Early return instead of break:

```js
function findUser(users, id) {
  for (let user of users) {
    if (user.id === id) {
      return user; // Instead of break
    }
  }
  return null;
}
```

### Filter before loop instead of continue:

```js
// Instead of:
for (let num of numbers) {
  if (num < 0) continue;
  process(num);
}

// Use:
numbers.filter((num) => num >= 0).forEach((num) => process(num));
```

---

## 🧠 Deep CS Understanding

### How break Works:

1. Immediately **exits** the loop
2. Transfers control to **next statement** after loop
3. No further iterations occur
4. Loop condition not checked again

### How continue Works:

1. **Skips** remaining code in current iteration
2. Goes to **loop update** expression (in for loop)
3. **Checks condition** for next iteration
4. Continues loop if condition is true

### Performance:

- Both are **very fast** operations
- No significant overhead
- Compiled to jump instructions in machine code

---

## 🏆 FINAL SUMMARY

### ✔ `break` exits the loop completely

### ✔ `continue` skips current iteration, continues loop

### ✔ `break` works in: for, while, do...while, switch

### ✔ `continue` works in: for, while, do...while

### ✔ Both affect only the **innermost** loop by default

### ✔ Use **labels** to break/continue outer loops

### ✔ Cannot use in `forEach()` - use `return` for skip

### ✔ `break` = "stop searching"

### ✔ `continue` = "skip this item"

### ✔ Essential for efficient loop control

---

## 🚀 Related Topics

- for loop
- while loop
- do...while loop
- switch statement
- Label statements
- Loop control flow
