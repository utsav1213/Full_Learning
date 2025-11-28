# 🚀 For Loop (Classic)

A **comprehensive guide** to the classic `for` loop in JavaScript — one of the most fundamental control structures in programming.

---

## What is a For Loop?

A `for` loop repeats a block of code a specific number of times. It's perfect when you know how many iterations you need.

---

## 🌟 1. Basic Syntax

```js
for (initialization; condition; increment / decrement) {
  // code to execute in each iteration
}
```

### Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```

---

## 🌟 2. Parts of a For Loop

### 1️⃣ **Initialization**: `let i = 0`

- Runs **once** before the loop starts
- Usually declares and initializes the counter variable

### 2️⃣ **Condition**: `i < 5`

- Checked **before each iteration**
- Loop continues while condition is `true`
- Loop stops when condition is `false`

### 3️⃣ **Increment/Decrement**: `i++`

- Runs **after each iteration**
- Updates the counter variable

### 4️⃣ **Loop Body**: Code inside `{}`

- Executes in each iteration

---

## 🌟 3. Common Patterns

### Count up:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 0 to 9
```

### Count down:

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// 10 to 1
```

### Skip by 2:

```js
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
// 0 2 4 6 8
```

### Multiply by 2:

```js
for (let i = 1; i < 100; i *= 2) {
  console.log(i);
}
// 1 2 4 8 16 32 64
```

---

## 🌟 4. Looping Through Arrays

```js
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// "apple"
// "banana"
// "cherry"
```

### With index and value:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}
// Output:
// "Index 0: apple"
// "Index 1: banana"
// "Index 2: cherry"
```

---

## 🌟 5. Nested Loops

Loops inside loops — useful for multi-dimensional data.

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=1, j=1
// ...
```

### Multiplication table:

```js
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}
```

---

## 🌟 6. Empty Statements

Any part of the for loop can be omitted.

### Infinite loop (no condition):

```js
for (let i = 0; ; i++) {
  if (i > 5) break;
  console.log(i);
}
```

### All parts empty (infinite loop):

```js
for (;;) {
  console.log("Infinite loop");
  break; // Always use break to exit!
}
```

### Initialization outside:

```js
let i = 0;
for (; i < 5; i++) {
  console.log(i);
}
```

---

## 🌟 7. Multiple Variables

```js
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i=${i}, j=${j}`);
}
// Output:
// i=0, j=10
// i=1, j=9
// i=2, j=8
// i=3, j=7
// i=4, j=6
```

---

## 🌟 8. Using `break` and `continue`

### `break` - Exit the loop:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0 1 2 3 4
```

### `continue` - Skip to next iteration:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(i);
}
// Output: 1 3 5 7 9
```

---

## 🌟 9. Real-World Examples

### Sum of numbers:

```js
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050
```

### Find maximum in array:

```js
const numbers = [45, 23, 89, 12, 67];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max); // 89
```

### Reverse an array:

```js
const arr = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(reversed); // [5, 4, 3, 2, 1]
```

### Filter even numbers:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}
console.log(evens); // [2, 4, 6, 8]
```

---

## 🌟 10. Performance Considerations

### ✔ Cache array length:

```js
// Less efficient
for (let i = 0; i < arr.length; i++) {}

// More efficient
const len = arr.length;
for (let i = 0; i < len; i++) {}
```

### ✔ Avoid expensive operations in condition:

```js
// Bad
for (let i = 0; i < calculateExpensiveValue(); i++) {}

// Good
const limit = calculateExpensiveValue();
for (let i = 0; i < limit; i++) {}
```

---

## 🌟 11. Common Mistakes

### ❌ Off-by-one error:

```js
// Wrong: misses last element
for (let i = 0; i < arr.length - 1; i++) {}

// Correct
for (let i = 0; i < arr.length; i++) {}
```

### ❌ Modifying array while looping:

```js
// Dangerous
for (let i = 0; i < arr.length; i++) {
  arr.splice(i, 1); // Length changes!
}

// Better: loop backwards
for (let i = arr.length - 1; i >= 0; i--) {
  arr.splice(i, 1);
}
```

### ❌ Using `var` instead of `let`:

```js
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3 (var has function scope)

// Correct with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0 1 2 (let has block scope)
```

---

## 🧠 Deep CS Understanding

### How a For Loop Works:

1. **Initialization** runs once
2. **Condition** is checked
3. If `true`:
   - **Loop body** executes
   - **Increment/decrement** runs
   - Go back to step 2
4. If `false`: exit loop

### Memory and Performance:

- For loops are **fast** and memory-efficient
- Direct array access: `O(1)` time complexity
- Overall loop: `O(n)` where n = iterations
- Modern engines optimize hot loops

---

## 🌟 12. When to Use For Loop

### ✔ Use `for` when:

- You know the number of iterations
- You need the index
- Performance is critical
- You're working with arrays

### ❌ Consider alternatives when:

- You don't need the index → use `for...of`
- You're iterating objects → use `for...in` or `Object.keys()`
- You want functional style → use `forEach`, `map`, `filter`

---

## 🏆 FINAL SUMMARY

### ✔ Classic `for` loop has 3 parts: initialization, condition, increment

### ✔ Runs a fixed number of times

### ✔ Perfect for array iteration with index access

### ✔ Can be nested for multi-dimensional data

### ✔ Use `break` to exit early

### ✔ Use `continue` to skip iterations

### ✔ Use `let` for block scope, not `var`

### ✔ Cache array length for better performance

### ✔ Watch for off-by-one errors

### ✔ Most performant loop type

---

## 🚀 Related Topics

- for...in loop
- for...of loop
- forEach() method
- while loop
- Array methods (map, filter, reduce)
