# 🚀 Nullish Coalescing Operator (`??`)

This operator is one of the MOST important features in modern JavaScript/TypeScript for handling missing values safely.

---

## What is Nullish Coalescing (`??`)?

`??` is an operator that returns the **right-hand value** ONLY when the left-hand value is either:

### ✔ `null`

### ✔ `undefined`

These two values are called **nullish**.

### Otherwise, it returns the left value.

---

## 🌟 1. Basic Example

```js
let username = null;
let displayName = username ?? "Guest";

console.log(displayName); // "Guest"
```

**Explanation:**

- `username` is null → **nullish**
- So JS picks `"Guest"`

---

## 🌟 2. undefined case

```js
let age = undefined;
let displayAge = age ?? 18;

console.log(displayAge); // 18
```

---

## 🌟 3. What values are considered "nullish"?

**ONLY:**

- `null`
- `undefined`

**Not:**

- `0`
- `""`
- `false`
- `NaN`

This is the most important point.

---

## 🚨 4. Difference Between `??` and `||` (VERY IMPORTANT)

### `||` considers MANY values "falsey"

So it replaces:

- `0`
- `""`
- `false`
- `NaN`

**Example:**

```js
let count = 0;
console.log(count || 10); // 10 ❌ (because 0 is falsey)
console.log(count ?? 10); // 0  ✔
```

### Summary:

| Value     | `          |          | `   | `??` |
| --------- | ---------- | -------- | --- | ---- |
| null      | → right    | → right  |
| undefined | → right    | → right  |
| 0         | → right ❌ | → left ✔ |
| ""        | → right ❌ | → left ✔ |
| false     | → right ❌ | → left ✔ |

`??` is ONLY for **missing values**, not for **falsey values**.

---

## 🌟 5. Real Example: API Responses

```js
const data = response.user?.name ?? "Anonymous";
```

If `response.user` is:

- missing
- undefined
- null

then `"Anonymous"` is used.

---

## 🌟 6. Real Example: Input Handling

```js
function greet(name) {
  console.log(name ?? "Guest");
}

greet("Chandan"); // Chandan
greet(); // Guest
```

---

## 🌟 7. Combined with Optional Chaining

This is where `??` becomes **super powerful**.

```js
const city = user.address?.city ?? "No city found";
```

**Explanation:**

- If any part of `user.address.city` is missing → undefined → `"No city found"`

---

## 🌟 8. Used with Function Parameters

```js
function multiply(value) {
  return value ?? 1; // default 1
}

console.log(multiply(undefined)); // 1
console.log(multiply(5)); // 5
```

---

## 🧠 9. Deep Internal CS Explanation

`??` is equivalent to:

```js
left !== null && left !== undefined ? left : right;
```

It **ONLY** checks for "nullish" values.

**Internal logic:**

```js
if (x === null || x === undefined) return y;
else return x;
```

---

## 🌟 10. Cannot mix `??` with `||` or `&&` without parentheses

This will throw error:

```js
a && b ?? c   // ❌
```

You must write:

```js
(a && b) ?? c; // ✔
```

Because `??` has its own precedence rules.

---

## 🌟 11. Nullish Coalescing Assignment (Advanced)

```js
let value = undefined;
value ??= 10;

console.log(value); // 10
```

Equivalent to:

```js
value = value ?? 10;
```

---

## 🏆 FINAL SUMMARY (You Will Never Forget)

### ✔ `??` returns right-hand value when left is **null or undefined**

### ✔ Unlike `||`, it does NOT treat:

- `0`
- `""`
- `false`
- `NaN`

as missing values.

### ✔ Best used for default values

### ✔ Often used with Optional Chaining (`?.`)

### ✔ Helps prevent runtime crashes
