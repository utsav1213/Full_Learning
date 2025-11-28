# 🚀 Label Statements

A **comprehensive guide** to label statements in JavaScript — a rarely used but powerful feature for controlling nested loops.

---

## What are Label Statements?

**Labels** provide identifiers for statements, allowing you to reference them with `break` or `continue`. They're primarily used to break out of or continue outer loops from within nested loops.

**Introduced in:** ES3 (ECMAScript 3)

---

## 🌟 1. Basic Syntax

```js
labelName: statement;
```

### Example:

```js
myLabel: {
  console.log("Statement 1");
  console.log("Statement 2");
}
```

**Note:** Labels are rarely needed for simple blocks. They're most useful with loops.

---

## 🌟 2. Labels with Loops

```js
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer: ${i}`);

  innerLoop: for (let j = 0; j < 3; j++) {
    console.log(`  Inner: ${j}`);
  }
}
```

---

## 🌟 3. Using break with Labels

Break out of **outer loops** from inner loops.

### Without label (breaks only inner loop):

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break; // Only breaks inner loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```

### With label (breaks outer loop):

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
// Stops completely!
```

---

## 🌟 4. Using continue with Labels

Skip to the next iteration of **outer loops**.

### Without label (continues inner loop):

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue; // Skips to next j
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

### With label (continues outer loop):

```js
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop; // Goes to next i
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

## 🌟 5. Real-World Examples

### Search in 2D array:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let found = false;

search: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 5) {
      console.log(`Found at [${i}][${j}]`);
      found = true;
      break search; // Exit both loops
    }
  }
}
// Output: "Found at [1][1]"
```

### Nested loop validation:

```js
const grid = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

let valid = true;

validation: for (let row of grid) {
  for (let cell of row) {
    if (cell === 0) {
      console.log("Invalid: contains zero");
      valid = false;
      break validation; // Exit immediately
    }
  }
}
```

### Process until condition in nested structure:

```js
const data = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "STOP"],
  ["i", "j", "k"],
];

processing: for (let array of data) {
  for (let item of array) {
    if (item === "STOP") {
      console.log("Stopped processing");
      break processing;
    }
    console.log(item);
  }
}
// Output: a, b, c, d, e, f, g, h, "Stopped processing"
```

---

## 🌟 6. Labels with while Loops

```js
let i = 0;

outer: while (i < 3) {
  let j = 0;

  while (j < 3) {
    if (i === 1 && j === 1) {
      break outer; // Breaks outer while loop
    }
    console.log(`i=${i}, j=${j}`);
    j++;
  }

  i++;
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

---

## 🌟 7. Labels with Block Statements

You can label any block, but it's rarely useful:

```js
myBlock: {
  console.log("Step 1");
  console.log("Step 2");

  if (condition) {
    break myBlock; // Exits the block
  }

  console.log("Step 3"); // Won't execute if break was called
}
```

### Example:

```js
const value = 5;

checkBlock: {
  console.log("Checking value...");

  if (value < 0) {
    console.log("Negative");
    break checkBlock;
  }

  if (value === 0) {
    console.log("Zero");
    break checkBlock;
  }

  console.log("Positive");
}
// Output:
// "Checking value..."
// "Positive"
```

---

## 🌟 8. Multiple Labels

You can have multiple levels of labels:

```js
level1: for (let i = 0; i < 3; i++) {
  level2: for (let j = 0; j < 3; j++) {
    level3: for (let k = 0; k < 3; k++) {
      if (k === 1) {
        break level1; // Break to level1
      }
      console.log(`i=${i}, j=${j}, k=${k}`);
    }
  }
}
// Output: i=0, j=0, k=0
```

---

## 🌟 9. When to Use Labels

### ✅ Use labels when:

- You have **nested loops** (2+ levels)
- You need to break/continue **outer loops**
- Alternative solutions are more complex
- The code is clear and well-commented

### ❌ Avoid labels when:

- You can refactor into functions
- Single-level loops are sufficient
- The logic can be simplified
- It makes code harder to read

---

## 🌟 10. Alternatives to Labels

### Option 1: Extract to function

Instead of:

```js
outer: for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      found = arr1[i];
      break outer;
    }
  }
}
```

Use:

```js
function findMatch(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1[i]; // Return exits function
      }
    }
  }
  return null;
}
```

### Option 2: Use flags

```js
let found = false;

for (let i = 0; i < arr1.length && !found; i++) {
  for (let j = 0; j < arr2.length && !found; j++) {
    if (arr1[i] === arr2[j]) {
      found = true;
    }
  }
}
```

### Option 3: Use array methods

```js
const found = arr1.some((item1) => arr2.some((item2) => item1 === item2));
```

---

## 🌟 11. Common Mistakes

### ❌ Label name conflicts:

```js
myLabel: for (let i = 0; i < 3; i++) {
  myLabel: for (let j = 0; j < 3; j++) { // ❌ Duplicate label
    console.log(i, j);
  }
}
```

### ❌ Using label without break/continue:

```js
myLabel: for (let i = 0; i < 5; i++) {
  console.log(i);
  // Label is useless without break/continue
}
```

### ❌ Breaking to non-existent label:

```js
for (let i = 0; i < 5; i++) {
  break nonExistent; // ❌ SyntaxError
}
```

---

## 🌟 12. Naming Conventions

Use descriptive label names:

```js
// ❌ Poor naming
a: for (...) {
  b: for (...) {
    break a;
  }
}

// ✅ Good naming
searchLoop: for (...) {
  validateLoop: for (...) {
    break searchLoop;
  }
}

// ✅ Common patterns
outerLoop: for (...) {
  innerLoop: for (...) {
    break outerLoop;
  }
}
```

---

## 🧠 Deep CS Understanding

### How Labels Work:

1. Labels are **compile-time constructs**
2. They create **jump points** in the code
3. `break` and `continue` generate **goto-like instructions**
4. No runtime performance overhead
5. Similar to assembly language labels

### Comparison to goto:

Labels in JavaScript are **NOT** the same as `goto` in C:

- ❌ Cannot jump to arbitrary locations
- ❌ Can only break/continue loops
- ✅ More structured and safer
- ✅ Only forward jumps (exit), not backward

### Performance:

- **Zero overhead** at runtime
- Compiled to efficient jump instructions
- Same performance as nested loops without labels

---

## 🌟 13. Browser and Environment Support

Labels are supported in:

- ✅ All browsers (ancient feature)
- ✅ Node.js
- ✅ All JavaScript engines
- ✅ Strict mode

---

## 🏆 FINAL SUMMARY

### ✔ Labels identify statements (primarily loops)

### ✔ Syntax: `labelName: statement`

### ✔ Used with `break` and `continue`

### ✔ Allow breaking/continuing **outer loops**

### ✔ Rarely needed in modern JavaScript

### ✔ Best for nested loops with complex exit conditions

### ✔ Can often be replaced with functions or array methods

### ✔ Use descriptive names like `outerLoop`, `searchLoop`

### ✔ No performance overhead

### ✔ Supported in all JavaScript environments

---

## 🚀 Related Topics

- break statement
- continue statement
- Nested loops
- for loop
- while loop
- Code refactoring
- Early returns
