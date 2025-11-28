/**
 * 🚀 Recursion - JavaScript Implementation
 * Comprehensive examples of recursive functions
 */

// ===================================
// 1. Basic Recursion
// ===================================
console.log("=== 1. Basic Recursion ===");

function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

// ===================================
// 2. Factorial
// ===================================
console.log("\n=== 2. Factorial ===");

function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  // Recursive case
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // 120
console.log("10! =", factorial(10)); // 3628800

// ===================================
// 3. Fibonacci
// ===================================
console.log("\n=== 3. Fibonacci ===");

// Basic (inefficient)
function fibBasic(n) {
  if (n <= 1) return n;
  return fibBasic(n - 1) + fibBasic(n - 2);
}

console.log("Fib(10):", fibBasic(10)); // 55

// Memoized (efficient)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log("Fib(40) memoized:", fibMemo(40)); // Fast!

// ===================================
// 4. Sum of Array
// ===================================
console.log("\n=== 4. Sum of Array ===");

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5])); // 15

// ===================================
// 5. Find Maximum
// ===================================
console.log("\n=== 5. Find Maximum ===");

function findMax(arr) {
  if (arr.length === 1) return arr[0];
  const restMax = findMax(arr.slice(1));
  return arr[0] > restMax ? arr[0] : restMax;
}

console.log("Max [3,7,2,9,1]:", findMax([3, 7, 2, 9, 1])); // 9

// ===================================
// 6. Reverse String
// ===================================
console.log("\n=== 6. Reverse String ===");

function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log("Reverse 'hello':", reverseString("hello")); // "olleh"

// ===================================
// 7. Palindrome Check
// ===================================
console.log("\n=== 7. Palindrome Check ===");

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log("'racecar' palindrome:", isPalindrome("racecar")); // true
console.log("'hello' palindrome:", isPalindrome("hello")); // false
console.log("'A man a plan a canal Panama':", isPalindrome("A man a plan a canal Panama")); // true

// ===================================
// 8. Power Function
// ===================================
console.log("\n=== 8. Power Function ===");

function power(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);
  return base * power(base, exp - 1);
}

console.log("2^10:", power(2, 10)); // 1024
console.log("3^4:", power(3, 4)); // 81
console.log("2^-2:", power(2, -2)); // 0.25

// ===================================
// 9. GCD (Greatest Common Divisor)
// ===================================
console.log("\n=== 9. GCD ===");

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log("GCD(48, 18):", gcd(48, 18)); // 6
console.log("GCD(100, 25):", gcd(100, 25)); // 25

// ===================================
// 10. Flatten Array
// ===================================
console.log("\n=== 10. Flatten Array ===");

function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const nested = [1, [2, 3], [4, [5, 6, [7]]]];
console.log("Flatten:", flatten(nested)); // [1, 2, 3, 4, 5, 6, 7]

// ===================================
// 11. Deep Clone
// ===================================
console.log("\n=== 11. Deep Clone ===");

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

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const cloned = deepClone(original);
cloned.b.c = 999;

console.log("Original:", original.b.c); // 2
console.log("Cloned:", cloned.b.c); // 999

// ===================================
// 12. Binary Search
// ===================================
console.log("\n=== 12. Binary Search ===");

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }
  return binarySearch(arr, target, left, mid - 1);
}

const sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log("Find 11:", binarySearch(sorted, 11)); // 5
console.log("Find 6:", binarySearch(sorted, 6)); // -1

// ===================================
// 13. Tree Traversal
// ===================================
console.log("\n=== 13. Tree Traversal ===");

const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

// In-order traversal
function inOrder(node, result = []) {
  if (node === null) return result;
  inOrder(node.left, result);
  result.push(node.value);
  inOrder(node.right, result);
  return result;
}

// Pre-order traversal
function preOrder(node, result = []) {
  if (node === null) return result;
  result.push(node.value);
  preOrder(node.left, result);
  preOrder(node.right, result);
  return result;
}

// Post-order traversal
function postOrder(node, result = []) {
  if (node === null) return result;
  postOrder(node.left, result);
  postOrder(node.right, result);
  result.push(node.value);
  return result;
}

console.log("In-order:", inOrder(tree)); // [4, 2, 5, 1, 6, 3, 7]
console.log("Pre-order:", preOrder(tree)); // [1, 2, 4, 5, 3, 6, 7]
console.log("Post-order:", postOrder(tree)); // [4, 5, 2, 6, 7, 3, 1]

// ===================================
// 14. Permutations
// ===================================
console.log("\n=== 14. Permutations ===");

function permutations(arr) {
  if (arr.length <= 1) return [arr];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations(remaining);

    for (const perm of perms) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

console.log("Permutations [1,2,3]:", permutations([1, 2, 3]));

// ===================================
// 15. Merge Sort
// ===================================
console.log("\n=== 15. Merge Sort ===");

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log("Merge sort:", mergeSort(unsorted));

// ===================================
// 16. Tail Recursion
// ===================================
console.log("\n=== 16. Tail Recursion ===");

// Non-tail recursive factorial
function factorialNormal(n) {
  if (n <= 1) return 1;
  return n * factorialNormal(n - 1);
}

// Tail recursive factorial
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator);
}

console.log("Normal factorial:", factorialNormal(5)); // 120
console.log("Tail factorial:", factorialTail(5)); // 120

// ===================================
// 17. Best Practices
// ===================================
console.log("\n=== 17. Best Practices ===");

console.log(`
✅ ALWAYS have a base case to stop recursion
✅ Move toward base case in each call
✅ Use memoization for overlapping subproblems
✅ Consider tail recursion for optimization
✅ Be aware of stack limits

❌ AVOID infinite recursion (no base case)
❌ AVOID excessive memory usage
❌ AVOID when iteration is simpler

💡 CONVERT TO ITERATION when:
   - Deep recursion may overflow stack
   - Performance is critical
   - Problem doesn't benefit from recursion
`);

console.log("✅ All recursion examples completed!");
