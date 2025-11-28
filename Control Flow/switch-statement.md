# 🚀 Switch Statements

A **comprehensive guide** to `switch` statements in JavaScript — a clean alternative to multiple `if...else` statements.

---

## What is a Switch Statement?

A `switch` statement evaluates an expression and executes code based on matching `case` values. It's ideal when you have multiple conditions checking the same variable.

---

## 🌟 1. Basic Syntax

```js
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
  // code to execute if no case matches
}
```

### Example:

```js
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a regular day");
}
// Output: "Start of the week"
```

---

## 🌟 2. The `break` Statement

`break` is **crucial** — it exits the switch block.

### Without `break` (Fall-through):

```js
const num = 2;

switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
  default:
    console.log("Default");
}
// Output:
// "Two"
// "Three"
// "Default"
```

All cases after the match execute! This is called **fall-through**.

### With `break`:

```js
const num = 2;

switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Default");
}
// Output: "Two"
```

---

## 🌟 3. The `default` Case

The `default` case runs when no other case matches.

```js
const color = "purple";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}
// Output: "Invalid color"
```

**Note:** `default` is optional and can be placed anywhere (convention: at the end).

---

## 🌟 4. Multiple Cases for Same Code

Group cases together when they should execute the same code.

```js
const fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("This is a common fruit");
    break;
  case "mango":
  case "papaya":
    console.log("This is a tropical fruit");
    break;
  default:
    console.log("Unknown fruit");
}
// Output: "This is a common fruit"
```

---

## 🌟 5. Switch with Expressions

You can use expressions in cases.

```js
const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}
// Output: "Grade: B"
```

---

## 🌟 6. Switch with Return (in Functions)

When using switch in functions, you can use `return` instead of `break`.

```js
function getDayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    default:
      return "Invalid day";
  }
}

console.log(getDayType("Saturday")); // "Weekend"
console.log(getDayType("Monday")); // "Weekday"
```

---

## 🌟 7. Switch vs if...else

### Use `switch` when:

- Checking the same variable against multiple values
- You have many conditions (3+)
- Cases are discrete values

### Use `if...else` when:

- Complex conditions with different variables
- Range checking (e.g., `age > 18`)
- Conditions with logical operators

### Example comparison:

**With if...else:**

```js
if (status === "pending") {
  console.log("Waiting");
} else if (status === "approved") {
  console.log("Success");
} else if (status === "rejected") {
  console.log("Failed");
} else {
  console.log("Unknown");
}
```

**With switch:**

```js
switch (status) {
  case "pending":
    console.log("Waiting");
    break;
  case "approved":
    console.log("Success");
    break;
  case "rejected":
    console.log("Failed");
    break;
  default:
    console.log("Unknown");
}
```

---

## 🌟 8. Type Coercion in Switch

Switch uses **strict comparison** (`===`), not loose equality (`==`).

```js
const value = "1";

switch (value) {
  case 1:
    console.log("Number 1");
    break;
  case "1":
    console.log("String 1");
    break;
}
// Output: "String 1"
```

---

## 🌟 9. Block Scope in Switch

Use braces `{}` to create block scope for variables in cases.

```js
const option = 1;

switch (option) {
  case 1: {
    const message = "Option 1";
    console.log(message);
    break;
  }
  case 2: {
    const message = "Option 2"; // No conflict!
    console.log(message);
    break;
  }
}
```

---

## 🌟 10. Real-World Examples

### HTTP Status Codes:

```js
function handleResponse(status) {
  switch (status) {
    case 200:
    case 201:
      return "Success";
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 404:
      return "Not Found";
    case 500:
      return "Server Error";
    default:
      return "Unknown Status";
  }
}
```

### Command Handler:

```js
function executeCommand(command) {
  switch (command) {
    case "start":
      startApp();
      break;
    case "stop":
      stopApp();
      break;
    case "restart":
      stopApp();
      startApp();
      break;
    case "status":
      checkStatus();
      break;
    default:
      console.log("Unknown command");
  }
}
```

---

## 🧠 Deep CS Understanding

### How Switch Works Internally:

1. **Evaluate the switch expression** once
2. **Compare** the value with each case using `===`
3. **Execute** matching case block
4. **Continue** executing until `break` or end of switch
5. **Fall-through** behavior allows multiple cases to run

### Performance:

- Switch statements can be **faster** than multiple if...else for many cases
- Modern JS engines optimize switch with **jump tables**
- For 2-3 conditions, performance difference is negligible

---

## 🌟 11. Common Pitfalls

### ❌ Forgetting `break`:

```js
// Bug: fall-through
switch (x) {
  case 1:
    doSomething();
  // Missing break!
  case 2:
    doSomethingElse(); // This runs even if x === 1
}
```

### ❌ Using expressions without `switch(true)`:

```js
// Won't work as expected
switch (age) {
  case age > 18: // This compares age === (age > 18)
    console.log("Adult");
}

// Correct way:
switch (true) {
  case age > 18:
    console.log("Adult");
}
```

---

## 🏆 FINAL SUMMARY

### ✔ Switch evaluates an expression once and compares with cases

### ✔ Uses **strict equality** (`===`)

### ✔ `break` stops execution and exits switch

### ✔ Without `break`, fall-through occurs

### ✔ `default` handles unmatched cases

### ✔ Multiple cases can share the same code block

### ✔ Best for checking one variable against many values

### ✔ Can use `return` in functions instead of `break`

### ✔ Use `{}` for block scope in cases

### ✔ Cleaner than multiple if...else for many conditions

---

## 🚀 Related Topics

- if...else statements
- Ternary operator
- Object lookup pattern (alternative to switch)
- Pattern matching (future JS feature)
