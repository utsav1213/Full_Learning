# 🚀 for...of Loop

A **comprehensive guide** to the `for...of` loop in JavaScript — the modern way to iterate over iterable objects.

---

## What is a for...of Loop?

The `for...of` loop iterates over **iterable objects** like arrays, strings, maps, sets, and more. It gives you the **values** directly, not the keys/indices.

**Introduced in ES6 (2015)**

---

## 🌟 1. Basic Syntax

```js
for (let value of iterable) {
  // code to execute for each value
}
```

### Example with Array:

```js
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// "apple"
// "banana"
// "cherry"
```

---

## 🌟 2. for...of with Arrays

Perfect for arrays when you don't need the index.

```js
const numbers = [10, 20, 30, 40];

for (let num of numbers) {
  console.log(num);
}
// Output: 10, 20, 30, 40
```

### With operations:

```js
const prices = [100, 200, 150];
let total = 0;

for (let price of prices) {
  total += price;
}
console.log(total); // 450
```

---

## 🌟 3. for...of with Strings

Strings are iterable! Loop through each character.

```js
const word = "hello";

for (let char of word) {
  console.log(char);
}
// Output: "h", "e", "l", "l", "o"
```

### Count vowels:

```js
const text = "JavaScript";
const vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(count); // 3
```

---

## 🌟 4. for...of with Sets

```js
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (let num of uniqueNumbers) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

---

## 🌟 5. for...of with Maps

Iterate over map entries as `[key, value]` pairs.

```js
const userMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "NYC"],
]);

for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// "name: John"
// "age: 30"
// "city: NYC"
```

### Just keys:

```js
for (let key of userMap.keys()) {
  console.log(key);
}
```

### Just values:

```js
for (let value of userMap.values()) {
  console.log(value);
}
```

---

## 🌟 6. for...of with Array Methods

### With entries() - get index and value:

```js
const fruits = ["apple", "banana", "cherry"];

for (let [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
// Output:
// "0: apple"
// "1: banana"
// "2: cherry"
```

---

## 🌟 7. for...of with Objects (NOT DIRECTLY)

Objects are **not iterable** by default!

```js
const person = { name: "John", age: 30 };

// This will throw an error ❌
for (let item of person) {
  console.log(item); // TypeError: person is not iterable
}
```

### Solutions:

**Option 1: Object.keys()**

```js
for (let key of Object.keys(person)) {
  console.log(key, person[key]);
}
```

**Option 2: Object.values()**

```js
for (let value of Object.values(person)) {
  console.log(value);
}
```

**Option 3: Object.entries()** (Best!)

```js
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// "name: John"
// "age: 30"
```

---

## 🌟 8. Using `break` and `continue`

### `break` - Exit early:

```js
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  if (num === 3) break;
  console.log(num);
}
// Output: 1, 2
```

### `continue` - Skip iteration:

```js
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  if (num % 2 === 0) continue;
  console.log(num);
}
// Output: 1, 3, 5
```

---

## 🌟 9. Real-World Examples

### Find first match:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

for (let user of users) {
  if (user.age > 30) {
    console.log(`Found: ${user.name}`);
    break;
  }
}
// Output: "Found: Bob"
```

### Sum array values:

```js
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
  sum += num;
}
console.log(sum); // 150
```

### Filter array:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log(evens); // [2, 4, 6]
```

### Process matrix:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  for (let cell of row) {
    console.log(cell);
  }
}
// Output: 1 2 3 4 5 6 7 8 9
```

---

## 🌟 10. for...of vs for...in vs forEach

### Comparison:

```js
const arr = ["a", "b", "c"];

// for loop - index access, full control
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// for...in - iterates keys (not recommended for arrays)
for (let index in arr) {
  console.log(index, arr[index]); // index is string!
}

// for...of - iterates values (best for arrays)
for (let value of arr) {
  console.log(value);
}

// forEach - functional style
arr.forEach((value, index) => {
  console.log(index, value);
});
```

### When to use each:

| Method     | Use Case                               | Can use break/continue |
| ---------- | -------------------------------------- | ---------------------- |
| `for`      | Need index, performance-critical       | ✅                     |
| `for...in` | Iterate object properties              | ✅                     |
| `for...of` | Iterate values of arrays, strings, etc | ✅                     |
| `forEach`  | Functional style, side effects         | ❌                     |

---

## 🌟 11. Async Iteration

`for...of` works great with async/await!

```js
async function processItems(items) {
  for (let item of items) {
    await processItem(item); // Waits for each item
  }
}
```

**Note:** `forEach` doesn't work well with async/await!

```js
// ❌ This won't wait
items.forEach(async (item) => {
  await processItem(item); // Doesn't wait!
});

// ✅ This will wait
for (let item of items) {
  await processItem(item); // Properly waits
}
```

---

## 🌟 12. What is Iterable?

An object is **iterable** if it implements the **iterable protocol** (has `Symbol.iterator` method).

### Built-in iterables:

- Array
- String
- Map
- Set
- TypedArray
- arguments object
- NodeList

### Not iterable:

- Plain objects `{}`
- Numbers
- Booleans
- null/undefined

---

## 🌟 13. Custom Iterables

You can make your own objects iterable:

```js
const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of range) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

---

## 🧠 Deep CS Understanding

### How for...of Works:

1. Calls `Symbol.iterator` method on the object
2. Gets an **iterator** object
3. Repeatedly calls `iterator.next()`
4. Gets `{ value, done }` object
5. Continues until `done` is `true`

### Performance:

- Slightly slower than regular `for` loop
- Faster than `forEach` for large arrays
- Optimized by modern JS engines
- No function call overhead (unlike forEach)

---

## 🏆 FINAL SUMMARY

### ✔ `for...of` iterates over **iterable objects**

### ✔ Returns **values**, not indices/keys

### ✔ Works with: arrays, strings, Maps, Sets, TypedArrays

### ✔ **Does NOT work** directly with plain objects

### ✔ Use `Object.entries()` to iterate objects

### ✔ Can use `break` and `continue`

### ✔ Works perfectly with **async/await**

### ✔ Cleaner syntax than classic `for` loop

### ✔ Modern alternative introduced in ES6

### ✔ Cannot access index directly (use `.entries()` if needed)

---

## 🚀 Related Topics

- for loop
- for...in loop
- forEach() method
- Array.entries()
- Iterators and Generators
- Symbol.iterator
- Async iteration
