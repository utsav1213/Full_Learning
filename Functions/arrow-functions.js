/**
 * 🚀 Arrow Functions - JavaScript Implementation
 * Comprehensive examples of arrow functions
 */

// ===================================
// 1. Basic Arrow Function
// ===================================
console.log("=== 1. Basic Arrow Function ===");

// Traditional function
const greetTraditional = function (name) {
  return `Hello, ${name}!`;
};

// Arrow function
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Concise arrow function
const greetConcise = (name) => `Hello, ${name}!`;

console.log(greetTraditional("World"));
console.log(greetArrow("World"));
console.log(greetConcise("World"));

// ===================================
// 2. Syntax Variations
// ===================================
console.log("\n=== 2. Syntax Variations ===");

// No parameters - need parentheses
const sayHello = () => "Hello!";
console.log(sayHello());

// One parameter - parentheses optional
const square = (x) => x * x;
const squareNoParens = (x) => x * x;
console.log("Square:", square(5), squareNoParens(5));

// Multiple parameters - need parentheses
const add = (a, b) => a + b;
console.log("Add:", add(3, 4));

// With body - need braces and return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Multiply:", multiply(3, 4));

// ===================================
// 3. Returning Objects
// ===================================
console.log("\n=== 3. Returning Objects ===");

// Need parentheses around object literal
const createPerson = (name, age) => ({ name, age });
console.log("Person:", createPerson("John", 30));

// With computation
const createUser = (id) => ({
  id,
  createdAt: Date.now(),
  active: true,
});
console.log("User:", createUser(1));

// ===================================
// 4. Array Methods
// ===================================
console.log("\n=== 4. Array Methods ===");

const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

// filter
const evens = numbers.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find
const firstBig = numbers.find((n) => n > 3);
console.log("First > 3:", firstBig);

// some/every
const hasEven = numbers.some((n) => n % 2 === 0);
const allPositive = numbers.every((n) => n > 0);
console.log("Has even:", hasEven, "All positive:", allPositive);

// Chaining
const result = numbers
  .filter((n) => n % 2 === 1)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log("Chained result:", result); // (1+3+5) * 2 = 18

// ===================================
// 5. No 'this' Binding
// ===================================
console.log("\n=== 5. No 'this' Binding ===");

// Arrow functions don't have their own 'this'
const obj = {
  name: "Object",
  traditional: function () {
    console.log("Traditional this:", this.name);
  },
  arrow: () => {
    console.log("Arrow this:", this.name); // undefined - uses lexical this
  },
  nested: function () {
    // Arrow function inherits this from enclosing function
    const inner = () => {
      console.log("Nested arrow this:", this.name);
    };
    inner();
  },
};

obj.traditional(); // "Object"
obj.arrow(); // undefined
obj.nested(); // "Object"

// Practical example: callbacks in methods
const timer = {
  seconds: 0,
  start() {
    // Arrow function preserves 'this'
    setInterval(() => {
      this.seconds++;
      if (this.seconds <= 3) {
        console.log(`Timer: ${this.seconds}s`);
      }
    }, 100);
  },
};

timer.start();

// ===================================
// 6. No 'arguments' Object
// ===================================
setTimeout(() => {
  console.log("\n=== 6. No 'arguments' Object ===");

  // Traditional function has arguments
  function traditionalSum() {
    return Array.from(arguments).reduce((a, b) => a + b, 0);
  }
  console.log("Traditional sum:", traditionalSum(1, 2, 3));

  // Arrow function uses rest parameters instead
  const arrowSum = (...args) => args.reduce((a, b) => a + b, 0);
  console.log("Arrow sum:", arrowSum(1, 2, 3));
}, 500);

// ===================================
// 7. Cannot be Constructors
// ===================================
setTimeout(() => {
  console.log("\n=== 7. Cannot be Constructors ===");

  // Traditional function as constructor
  function Person(name) {
    this.name = name;
  }
  const p1 = new Person("John");
  console.log("Traditional constructor:", p1.name);

  // Arrow function cannot be constructor
  const PersonArrow = (name) => {
    this.name = name;
  };
  try {
    // const p2 = new PersonArrow("Jane"); // TypeError
    console.log("Arrow function cannot be used with 'new'");
  } catch (e) {
    console.log("Error:", e.message);
  }
}, 700);

// ===================================
// 8. Event Handlers
// ===================================
setTimeout(() => {
  console.log("\n=== 8. Event Handlers ===");

  // Simulated button
  const button = {
    text: "Click Me",
    listeners: [],
    on(event, handler) {
      this.listeners.push({ event, handler });
      return this;
    },
    emit(event) {
      this.listeners.filter((l) => l.event === event).forEach((l) => l.handler());
    },
  };

  // Arrow function in event handler
  button.on("click", () => console.log("Button clicked!"));
  button.emit("click");
}, 900);

// ===================================
// 9. Promises and Async
// ===================================
setTimeout(() => {
  console.log("\n=== 9. Promises and Async ===");

  // Promise with arrow functions
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("Data received"), 100);
    });

  fetchData()
    .then((data) => {
      console.log("Promise result:", data);
      return data.toUpperCase();
    })
    .then((data) => console.log("Transformed:", data));

  // Async arrow function
  const asyncFetch = async () => {
    const data = await fetchData();
    console.log("Async result:", data);
  };

  asyncFetch();
}, 1100);

// ===================================
// 10. Higher-Order Functions
// ===================================
setTimeout(() => {
  console.log("\n=== 10. Higher-Order Functions ===");

  // Function returning function
  const createMultiplier = (factor) => (num) => num * factor;

  const double = createMultiplier(2);
  const triple = createMultiplier(3);

  console.log("Double 5:", double(5));
  console.log("Triple 5:", triple(5));

  // Currying with arrow functions
  const curry = (fn) => (a) => (b) => fn(a, b);
  const curriedAdd = curry((a, b) => a + b);

  console.log("Curried add:", curriedAdd(3)(4)); // 7

  // Compose functions
  const compose =
    (...fns) =>
    (x) =>
      fns.reduceRight((acc, fn) => fn(acc), x);

  const addOne = (x) => x + 1;
  const multiplyByTwo = (x) => x * 2;
  const subtractThree = (x) => x - 3;

  const composed = compose(subtractThree, multiplyByTwo, addOne);
  console.log("Composed(5):", composed(5)); // (5+1)*2-3 = 9
}, 1400);

// ===================================
// 11. Practical Examples
// ===================================
setTimeout(() => {
  console.log("\n=== 11. Practical Examples ===");

  // Data transformation
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
  ];

  // Get names of adults
  const adultNames = users.filter((u) => u.age >= 30).map((u) => u.name);
  console.log("Adult names:", adultNames);

  // Sort by age
  const byAge = [...users].sort((a, b) => a.age - b.age);
  console.log(
    "By age:",
    byAge.map((u) => `${u.name}:${u.age}`)
  );

  // Group by age range
  const groupByAgeRange = users.reduce((groups, user) => {
    const range = user.age < 30 ? "young" : "adult";
    groups[range] = groups[range] || [];
    groups[range].push(user.name);
    return groups;
  }, {});
  console.log("By age range:", groupByAgeRange);

  // Debounce function
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 200);
  debouncedLog("First");
  debouncedLog("Second");
  debouncedLog("Third"); // Only this one logs
}, 1600);

// ===================================
// 12. Best Practices
// ===================================
setTimeout(() => {
  console.log("\n=== 12. Best Practices ===");

  console.log(`
✅ USE arrow functions when:
   - Short callbacks (map, filter, reduce)
   - Need lexical 'this' binding
   - Want concise syntax
   - Functional programming patterns

❌ AVOID arrow functions when:
   - Object methods needing 'this'
   - Constructors
   - Need 'arguments' object
   - Functions with many statements

💡 TIPS:
   - Use implicit return for single expressions
   - Wrap object returns in parentheses
   - Use rest parameters instead of arguments
   - Be aware of 'this' binding differences
`);

  console.log("✅ All arrow function examples completed!");
}, 2000);
