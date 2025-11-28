# 🚀 Recursion

A **comprehensive guide** to recursion in JavaScript — functions that call themselves to solve problems.

---

## What is Recursion?

**Recursion** is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems. Every recursive function needs a base case (stopping condition) to prevent infinite loops.

---

## 🌟 1. Basic Structure

### Anatomy of recursion:

```js
function recursive(input) {
  // Base case - stop condition
  if (baseCondition) {
    return baseValue;
  }

  // Recursive case - call itself with smaller problem
  return recursive(smallerInput);
}
```

### Simple example - countdown:

```js
function countdown(n) {
  // Base case
  if (n <= 0) {
    console.log("Done!");
    return;
  }

  console.log(n);

  // Recursive case
  countdown(n - 1);
}

countdown(5);
// Output: 5, 4, 3, 2, 1, Done!
```

---

## 🌟 2. Classic Examples

### Factorial:

```js
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1 = 120
```

### Fibonacci:

```js
function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13
// fibonacci(7) = fibonacci(6) + fibonacci(5)
```

### Sum of array:

```js
function sumArray(arr) {
  // Base case
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

---

## 🌟 3. Recursion vs Iteration

### Factorial - Recursive:

```js
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}
```

### Factorial - Iterative:

```js
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### Comparison:

| Aspect         | Recursion                    | Iteration                 |
| -------------- | ---------------------------- | ------------------------- |
| Readability    | Often clearer for tree/graph | Simpler for simple loops  |
| Memory         | Uses call stack              | Minimal memory            |
| Performance    | Slower (function calls)      | Faster                    |
| Stack overflow | Risk with deep recursion     | No risk                   |
| Use case       | Complex data structures      | Simple loops and counters |

---

## 🌟 4. Types of Recursion

### Direct recursion:

```js
function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1); // Calls itself directly
}
```

### Indirect recursion:

```js
function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}

console.log(isEven(4)); // true
console.log(isOdd(5)); // true
```

### Tail recursion:

```js
// Recursive call is the last operation
function factorial(n, accumulator = 1) {
  if (n <= 1) {
    return accumulator;
  }
  return factorial(n - 1, n * accumulator); // Tail call
}

console.log(factorial(5)); // 120
```

### Non-tail recursion:

```js
// Recursive call is not the last operation
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Multiplication happens after recursive call
}
```

---

## 🌟 5. Working with Arrays

### Reverse array:

```js
function reverseArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  return [...reverseArray(arr.slice(1)), arr[0]];
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

### Find maximum:

```js
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([3, 7, 2, 9, 1])); // 9
```

### Flatten array:

```js
function flatten(arr) {
  if (arr.length === 0) {
    return [];
  }

  const first = arr[0];
  const rest = arr.slice(1);

  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)];
  }

  return [first, ...flatten(rest)];
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
```

---

## 🌟 6. Working with Objects

### Deep clone:

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}

const original = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "gaming"],
};

const copy = deepClone(original);
copy.address.city = "Boston";

console.log(original.address.city); // "New York"
console.log(copy.address.city); // "Boston"
```

### Count properties:

```js
function countProperties(obj) {
  let count = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        count += countProperties(obj[key]);
      }
    }
  }

  return count;
}

const data = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(countProperties(data)); // 5
```

---

## 🌟 7. Tree Traversal

### Binary tree:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal (left, root, right)
function inOrder(node) {
  if (node === null) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

// Pre-order traversal (root, left, right)
function preOrder(node) {
  if (node === null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

// Post-order traversal (left, right, root)
function postOrder(node) {
  if (node === null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

// Example tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inOrder(root); // 4, 2, 5, 1, 3
```

### Tree sum:

```js
function treeSum(node) {
  if (node === null) return 0;
  return node.value + treeSum(node.left) + treeSum(node.right);
}

console.log(treeSum(root)); // 15
```

---

## 🌟 8. String Manipulation

### Reverse string:

```js
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
```

### Palindrome check:

```js
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

### Count vowels:

```js
function countVowels(str) {
  if (str === "") {
    return 0;
  }

  const vowels = "aeiouAEIOU";
  const count = vowels.includes(str[0]) ? 1 : 0;

  return count + countVowels(str.slice(1));
}

console.log(countVowels("hello world")); // 3
```

---

## 🌟 9. Common Pitfalls

### ❌ No base case:

```js
// ❌ Stack overflow!
function infiniteRecursion(n) {
  return infiniteRecursion(n - 1); // Never stops!
}
```

### ❌ Wrong base case:

```js
// ❌ Never reaches base case for negative numbers
function countdown(n) {
  if (n === 0) return; // Should be n <= 0
  console.log(n);
  countdown(n - 1);
}

countdown(-5); // Stack overflow!
```

### ❌ Not progressing toward base case:

```js
// ❌ Infinite loop
function buggyFunction(n) {
  if (n === 0) return;
  return buggyFunction(n); // Not getting smaller!
}
```

---

## 🌟 10. Optimization Techniques

### Memoization:

```js
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(50)); // Fast!
```

### Tail call optimization:

```js
// Tail-recursive factorial
function factorial(n, accumulator = 1) {
  if (n <= 1) {
    return accumulator;
  }
  return factorial(n - 1, n * accumulator);
}

console.log(factorial(1000)); // Works without stack overflow (in optimized engines)
```

### Convert to iteration:

```js
// Sometimes better to use iteration
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

---

## 🌟 11. Real-World Examples

### File system traversal:

```js
function findFiles(directory, extension) {
  const files = [];

  function traverse(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        traverse(fullPath); // Recursive call
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }

  traverse(directory);
  return files;
}

const jsFiles = findFiles("./src", ".js");
```

### DOM traversal:

```js
function findElementsByClass(element, className) {
  const results = [];

  function traverse(el) {
    if (el.classList && el.classList.contains(className)) {
      results.push(el);
    }

    for (const child of el.children) {
      traverse(child); // Recursive call
    }
  }

  traverse(element);
  return results;
}

const elements = findElementsByClass(document.body, "highlight");
```

### Nested menu rendering:

```js
function renderMenu(items) {
  return items
    .map((item) => {
      if (item.children && item.children.length > 0) {
        return `
        <li>
          ${item.label}
          <ul>${renderMenu(item.children)}</ul>
        </li>
      `;
      }
      return `<li>${item.label}</li>`;
    })
    .join("");
}

const menu = [
  {
    label: "Home",
    children: [],
  },
  {
    label: "Products",
    children: [
      { label: "Electronics", children: [] },
      { label: "Clothing", children: [] },
    ],
  },
];

console.log(renderMenu(menu));
```

---

## 🌟 12. Best Practices

### ✅ Always have a base case:

```js
function recursive(n) {
  if (n <= 0) return; // Base case
  // Recursive logic
}
```

### ✅ Make problem smaller in each call:

```js
function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1); // n gets smaller
}
```

### ✅ Use memoization for expensive operations:

```js
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
};

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
```

### ✅ Consider iteration for simple cases:

```js
// Recursion overkill for simple sum
function sumRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
}

// Iteration is better
function sumIterative(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
```

---

## 🧠 Deep CS Understanding

### Call Stack:

- Each recursive call adds frame to call stack
- Stack has limited size (typically 10,000-100,000 calls)
- Stack overflow occurs when limit exceeded
- Tail call optimization can help (not in all browsers)

### Time Complexity:

- Fibonacci without memoization: O(2^n) - exponential
- Fibonacci with memoization: O(n) - linear
- Tree traversal: O(n) - visit each node once
- Consider time complexity when choosing recursion

### Space Complexity:

- Recursion uses O(n) space for call stack
- Iteration typically uses O(1) space
- Memoization trades space for time
- Deep recursion can cause memory issues

### Tail Call Optimization:

- Some engines optimize tail-recursive functions
- Reuses stack frame instead of creating new one
- Prevents stack overflow for deep recursion
- Not universally supported yet

---

## 🏆 FINAL SUMMARY

### ✔ Function calls itself to solve problem

### ✔ Must have base case to stop

### ✔ Each call works on smaller problem

### ✔ Natural fit for tree/graph structures

### ✔ Can be more readable than iteration

### ✔ Uses call stack memory

### ✔ Risk of stack overflow

### ✔ Optimize with memoization

### ✔ Consider tail recursion

### ✔ Sometimes iteration is better

---

## 🚀 Related Topics

- Call stack
- Closures
- Tail call optimization
- Memoization
- Dynamic programming
- Tree data structures
- Big O notation
- Function calls
