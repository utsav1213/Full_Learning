# 🚀 `typeof` and `instanceof` Operators

A **deep, clear, unforgettable explanation** of **`typeof`** and **`instanceof`** — including internal working, use cases, limitations, advanced CS insights, and real-world examples.

---

# PART 1 — `typeof`

`typeof` is a **JavaScript operator** that returns the **type of a value** as a **string**.

### ✅ Example:

```js
console.log(typeof "hello"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
```

---

## 🔥 `typeof` in TypeScript

In TS, `typeof` can also be used **at type level**.

**Example:**

```ts
const user = { name: "John", age: 20 };
type UserType = typeof user;
```

**Now:**

```ts
UserType = { name: string; age: number }
```

---

## 🧠 Deep JS Behavior of `typeof`

Here are all JavaScript `typeof` results:

| Value                  | Result                      |
| ---------------------- | --------------------------- |
| string                 | "string"                    |
| number                 | "number"                    |
| boolean                | "boolean"                   |
| undefined              | "undefined"                 |
| function               | "function"                  |
| symbol                 | "symbol"                    |
| bigint                 | "bigint"                    |
| object (normal object) | "object"                    |
| array                  | "object"                    |
| null                   | ❗ **"object" (bug in JS)** |

Yes, `typeof null === "object"`

This is a **historic bug** from 1995, but kept for compatibility.

---

## ⭐ When to use `typeof`?

### ✔ Type checking primitives:

```js
if (typeof x === "string") { ... }
```

### ✔ Ensuring number before math:

```js
if (typeof price === "number") { ... }
```

### ✔ Checking for functions:

```js
if (typeof cb === "function") {
  cb();
}
```

### ❌ Cannot check arrays or classes

Because:

```js
typeof []; // "object"
typeof {}; // "object"
typeof new User(); // "object"
```

That's why we use `instanceof`.

---

---

# PART 2 — `instanceof`

`instanceof` checks:

> Whether an object **is derived from a particular class or constructor function**

It checks the **prototype chain**, not the data type.

### Example:

```js
class Person {}
const p = new Person();

console.log(p instanceof Person); // true
```

---

## 🧠 How `instanceof` Works Internally (Deep CS)

`obj instanceof Constructor` checks:

```
Does obj.__proto__ exist in Constructor.prototype chain?
```

In simple words:

> "Is Constructor.prototype somewhere in the prototype chain of obj?"

---

## ⭐ Example with classes:

```js
class Animal {}
class Dog extends Animal {}

const d = new Dog();

console.log(d instanceof Dog); // true
console.log(d instanceof Animal); // true (inheritance)
console.log(d instanceof Object); // true (all objects derive from Object)
```

---

## ⭐ instanceof with built-in types

```js
[] instanceof Array;       // true
{} instanceof Object;      // true
new Date() instanceof Date // true
```

---

## ❌ instanceof does NOT work with primitives

```js
"hello" instanceof String; // false
10 instanceof Number; // false
```

**Why?**

Because `"hello"` is a primitive, not an object.

Only this works:

```js
new String("hello") instanceof String; // true
```

But **don't** use wrapper objects in real code.

---

---

# 🚀 `typeof` vs `instanceof` — Deep Comparison

| Feature                 | `typeof`        | `instanceof`                        |
| ----------------------- | --------------- | ----------------------------------- |
| Returns                 | a string        | boolean                             |
| Checks                  | primitive types | object/class instances              |
| Works on objects?       | No              | Yes                                 |
| Checks prototype chain? | No              | Yes                                 |
| Detects arrays?         | No              | Yes                                 |
| Detects null?           | "object" (bug)  | false                               |
| Detects functions?      | "function"      | true if created with `new Function` |

---

## ⭐ Use Cases

### 👉 Use `typeof` when checking **primitive** types.

```js
typeof x === "string";
typeof id === "number";
```

### 👉 Use `instanceof` when checking **class instances**.

```js
if (user instanceof User) { ... }
```

### 👉 Use `Array.isArray()` to check arrays

Because:

```js
typeof [] instanceof // "object" ❌
  Array; // true, but fails across iframes
```

**So best is:**

```js
Array.isArray([]);
```

---

## 🔥 Real-World Example (Perfect Explanation)

### Example 1 — Validating Input Type

```js
function printId(id) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed());
  }
}
```

Here:

- `typeof` narrows types safely.

---

### Example 2 — Validating Class Type

```js
class User {}
class Admin extends User {}

function checkRole(person) {
  if (person instanceof Admin) {
    console.log("Admin User");
  } else {
    console.log("Normal User");
  }
}
```

Here:

- `instanceof` checks inheritance using the prototype chain.

---

## 🧠 Deeper: Why JS needs both?

### ✔ `typeof` works only for primitives.

Arrays, objects, classes → all return `"object"`.

### ✔ `instanceof` works only for objects.

Primitives like `10`, `"hello"`, `true` → cannot be checked.

So both are required for complete type checking.

---

## 🏆 FINAL SUMMARY (You Will Never Forget)

### 👍 **Use `typeof` for primitive types:**

- string
- number
- boolean
- bigint
- symbol
- undefined
- function

### 👍 **Use `instanceof` for class/object types:**

- custom classes
- Date
- Array
- Error
- RegExp

### ❌ Don't use `typeof` for objects

### ❌ Don't use `instanceof` for primitives

### `typeof` returns string

### `instanceof` returns boolean

### `typeof` = type checking

### `instanceof` = prototype chain checking
