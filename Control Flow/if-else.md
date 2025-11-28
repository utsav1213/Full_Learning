# 🚀 if, else if, else Statements

A **comprehensive guide** to conditional statements in JavaScript — the foundation of decision-making in programming.

---

## What are Conditional Statements?

Conditional statements allow your code to make decisions and execute different code blocks based on whether conditions are `true` or `false`.

---

## 🌟 1. Basic `if` Statement

The simplest form of conditional logic.

```js
if (condition) {
  // code executes if condition is true
}
```

### Example:

```js
const age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
// Output: "You can vote!"
```

---

## 🌟 2. `if...else` Statement

Execute one block if true, another if false.

```js
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

### Example:

```js
const age = 15;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}
// Output: "You cannot vote yet."
```

---

## 🌟 3. `if...else if...else` Statement

Check multiple conditions in sequence.

```js
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if all conditions are false
}
```

### Example:

```js
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: "Grade: C"
```

---

## 🌟 4. Nested `if` Statements

You can nest `if` statements inside each other.

```js
const age = 20;
const hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("You need a license first.");
  }
} else {
  console.log("You are too young to drive.");
}
// Output: "You can drive!"
```

---

## 🌟 5. Truthy and Falsy Values

JavaScript evaluates conditions based on truthy/falsy values.

### Falsy values:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Everything else is truthy!

```js
const name = "John";

if (name) {
  console.log("Name exists!");
}
// Output: "Name exists!"
```

```js
const value = 0;

if (value) {
  console.log("This won't run");
} else {
  console.log("Value is falsy");
}
// Output: "Value is falsy"
```

---

## 🌟 6. Ternary Operator (Short if...else)

A concise way to write simple if...else statements.

```js
condition ? expressionIfTrue : expressionIfFalse;
```

### Example:

```js
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // "Yes"
```

### Nested Ternary (use sparingly):

```js
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

console.log(grade); // "B"
```

---

## 🌟 7. Logical Operators in Conditions

### AND (`&&`)

```js
const age = 25;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("You can enter the movie!");
}
```

### OR (`||`)

```js
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax!");
}
```

### NOT (`!`)

```js
const isRaining = false;

if (!isRaining) {
  console.log("Let's go for a walk!");
}
```

---

## 🌟 8. Short-Circuit Evaluation

### Using `&&` for conditional execution:

```js
const user = { name: "John" };

user && console.log(user.name); // "John"
```

### Using `||` for default values:

```js
const username = "" || "Guest";
console.log(username); // "Guest"
```

---

## 🌟 9. Common Patterns

### Check for existence:

```js
if (user) {
  console.log("User exists");
}
```

### Check for specific value:

```js
if (status === "active") {
  console.log("User is active");
}
```

### Range checking:

```js
if (age >= 13 && age <= 19) {
  console.log("Teenager");
}
```

### Multiple OR conditions:

```js
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
}
```

---

## 🌟 10. Best Practices

### ✔ Use strict equality (`===`) instead of `==`

```js
// Good
if (value === 10) {
}

// Avoid
if (value == 10) {
}
```

### ✔ Keep conditions simple and readable

```js
// Good
const isAdult = age >= 18;
if (isAdult) {
}

// Less readable
if (age >= 18 && status === "active" && hasPermission) {
}
```

### ✔ Avoid deeply nested conditions

Use early returns or guard clauses:

```js
// Good
function checkAccess(user) {
  if (!user) return false;
  if (!user.isActive) return false;
  if (!user.hasPermission) return false;
  return true;
}

// Harder to read
function checkAccess(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return true;
      }
    }
  }
  return false;
}
```

---

## 🧠 Deep CS Understanding

### How JavaScript evaluates conditions:

1. **Condition is evaluated** to a boolean
2. **Type coercion** happens if needed
3. **Truthy/falsy** conversion occurs
4. **Code block** executes based on result

### Under the hood:

```js
if (value) {
  // code
}
```

JavaScript does:

```js
if (Boolean(value) === true) {
  // code
}
```

---

## 🏆 FINAL SUMMARY

### ✔ `if` executes code when condition is `true`

### ✔ `else` provides alternative when condition is `false`

### ✔ `else if` checks multiple conditions in sequence

### ✔ Use `===` for strict equality checks

### ✔ JavaScript has truthy/falsy values

### ✔ Ternary operator is shorthand for simple if...else

### ✔ Logical operators: `&&` (AND), `||` (OR), `!` (NOT)

### ✔ Keep conditions simple and readable

### ✔ Avoid deep nesting - use early returns

---

## 🚀 Related Topics

- Switch statements
- Ternary operators
- Logical operators
- Short-circuit evaluation
- Nullish coalescing (`??`)
