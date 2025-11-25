# 🚀 REST OPERATOR (`...`)

A **deep, clear, unforgettable explanation** of the **REST OPERATOR** — from basics to advanced CS-level understanding.

---

## What is the Rest Operator (`...`)?

The **rest operator** collects multiple elements into a **single variable**.

Think of it as the opposite of the **spread operator**.

### ✔ Spread → EXPANDS

### ✔ Rest → COLLECTS

Both use `...` but do **opposite jobs**.

---

## 🌟 1. Rest Operator in Function Parameters

### Basic example:

```js
function sum(...nums) {
  console.log(nums);
}
sum(1, 2, 3);
```

### Output:

```
[1, 2, 3]
```

### ✔ What happened?

- `1`, `2`, `3` get **collected** into one array `nums`
- A function can take unlimited arguments using rest

---

## 🌟 2. Real Sum Example

```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### ✔ Key point:

A rest parameter must always be **the last parameter**.

❌ INVALID:

```js
function test(a, ...rest, b) {}
```

---

## 🌟 3. Rest Operator in Array Destructuring

```js
const [first, second, ...rest] = [10, 20, 30, 40, 50];
```

### Result:

```
first  = 10
second = 20
rest   = [30, 40, 50]
```

✔ The rest operator collects the **remaining elements**.

---

## 🌟 4. Rest Operator in Object Destructuring

```js
const user = {
  name: "Chandan",
  age: 23,
  email: "ch@gmail.com",
  city: "Delhi",
};

const { name, ...other } = user;
```

### Result:

```
name  = "Chandan"
other = {
  age: 23,
  email: "ch@gmail.com",
  city: "Delhi"
}
```

✔ The rest operator collects _all remaining properties_.

---

## 🌟 5. Difference: Spread vs Rest (VERY IMPORTANT)

Both use `...`, BUT DO THE OPPOSITE:

| Operator   | Meaning                    | Example                 |
| ---------- | -------------------------- | ----------------------- |
| **Rest**   | collects into a container  | `function sum(...nums)` |
| **Spread** | expands out of a container | `[...arr]`              |

Think of it like:

- **Rest → pack items into a box**
- **Spread → unpack items out of a box**

---

## 🌟 6. Rest Operator in TypeScript Types (SUPER USEFUL)

TypeScript supports rest for tuple types.

```ts
type MyTuple = [string, number, ...boolean[]];
```

This means:

- First element: string
- Second element: number
- Remaining: infinite booleans

---

## 🌟 7. Real-World Use Cases

### ✔ Combine arguments:

```js
function logAll(...values) {
  console.log(values);
}
```

### ✔ Removing first property in an object:

```js
const { password, ...safeUser } = user;
```

### ✔ Variadic functions:

```js
function max(...nums) {
  return Math.max(...nums);
}
```

### ✔ Handling props in React:

```jsx
function Button({ title, ...rest }) {
  return <button {...rest}>{title}</button>;
}
```

---

## 🌟 8. Deep Computer Science Understanding

### ❗Rest operator is NOT a runtime feature.

It is **syntactic sugar**.

**When compiled:**

```js
function sum(...nums) {}
```

**Becomes:**

```js
function sum() {
  var nums = Array.prototype.slice.call(arguments);
}
```

This is how JS internally collects multiple arguments.

### So rest operator performs:

- **Argument object → Array conversion**
- **Creates new arrays/objects using iteration**
- **Always creates a shallow copy**

---

## 🧠 SHALLOW COPY NOTE

Rest operator copies only **top-level values**, NOT nested structures.

```js
const obj = { a: 1, b: { c: 2 } };
const { ...copy } = obj;

copy.b.c = 100;
console.log(obj.b.c); // 100 (same reference)
```

Rest operator **does NOT deep clone**.

---

## 🌟 9. Edge Cases You Must Know

### ❗Cannot use rest twice:

```js
function test(...a, ...b) {} // ❌ Not allowed
```

### ❗Rest parameter must be last:

```js
function test(a, ...rest, b) {} // ❌ Not allowed
```

### ✔ Works only on iterable objects (arrays, strings, sets, etc.)

---

## 🏆 FINAL SUMMARY (You Will Never Forget This)

### ✔ Rest operator (`...`) **COLLECTS** multiple values

### ✔ Used in:

- functions
- arrays
- objects
- TypeScript tuple types

### ✔ Rest parameter becomes an array

### ✔ Opposite of spread

### ✔ Under the hood → converts arguments to array

### ✔ Always performs SHALLOW copy
