/**
 * 🚀 For...in Loop - JavaScript Implementation
 * Comprehensive examples of for...in loops in JavaScript
 */

// ===================================
// 1. Basic for...in with Objects
// ===================================
console.log("=== 1. Basic for...in with Objects ===");

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// ===================================
// 2. for...in with Arrays
// ===================================
console.log("\n=== 2. for...in with Arrays ===");

const colors = ["red", "green", "blue"];

// Note: for...in iterates over indices (as strings)
for (const index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}
// Output:
// Index 0: red
// Index 1: green
// Index 2: blue

// ⚠️ Not recommended for arrays - use for...of or forEach instead

// ===================================
// 3. Checking Own Properties
// ===================================
console.log("\n=== 3. Checking Own Properties ===");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

for (const prop in car) {
  if (Object.hasOwn(car, prop)) {
    console.log(`${prop}: ${car[prop]}`);
  }
}

// Alternative using hasOwnProperty
console.log("\nUsing hasOwnProperty:");
for (const prop in car) {
  if (car.hasOwnProperty(prop)) {
    console.log(`${prop}: ${car[prop]}`);
  }
}

// ===================================
// 4. Inherited Properties
// ===================================
console.log("\n=== 4. Inherited Properties ===");

// Create a prototype
const animal = {
  type: "mammal",
  breathes: true,
};

// Create object with prototype
const dog = Object.create(animal);
dog.name = "Buddy";
dog.breed = "Golden Retriever";

console.log("All properties (including inherited):");
for (const prop in dog) {
  console.log(`  ${prop}: ${dog[prop]}`);
}

console.log("\nOwn properties only:");
for (const prop in dog) {
  if (Object.hasOwn(dog, prop)) {
    console.log(`  ${prop}: ${dog[prop]}`);
  }
}

// ===================================
// 5. Nested Objects
// ===================================
console.log("\n=== 5. Nested Objects ===");

const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    zip: "94102",
  },
  employees: 500,
};

function printNestedObject(obj, indent = "") {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        console.log(`${indent}${key}:`);
        printNestedObject(obj[key], indent + "  ");
      } else {
        console.log(`${indent}${key}: ${obj[key]}`);
      }
    }
  }
}

printNestedObject(company);

// ===================================
// 6. Counting Properties
// ===================================
console.log("\n=== 6. Counting Properties ===");

const user = {
  username: "johndoe",
  email: "john@example.com",
  password: "secret123",
  role: "admin",
  createdAt: "2024-01-15",
};

let propertyCount = 0;
for (const _ in user) {
  propertyCount++;
}
console.log(`Number of properties: ${propertyCount}`);

// Alternative method
console.log(`Using Object.keys(): ${Object.keys(user).length}`);

// ===================================
// 7. Filtering Object Properties
// ===================================
console.log("\n=== 7. Filtering Object Properties ===");

const product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  inStock: true,
  category: "Electronics",
  rating: 4.5,
};

// Get only string properties
console.log("String properties:");
for (const key in product) {
  if (typeof product[key] === "string") {
    console.log(`  ${key}: ${product[key]}`);
  }
}

// Get only numeric properties
console.log("\nNumeric properties:");
for (const key in product) {
  if (typeof product[key] === "number") {
    console.log(`  ${key}: ${product[key]}`);
  }
}

// ===================================
// 8. Copying Objects
// ===================================
console.log("\n=== 8. Copying Objects ===");

const source = {
  a: 1,
  b: 2,
  c: 3,
};

// Shallow copy using for...in
const copy = {};
for (const key in source) {
  if (Object.hasOwn(source, key)) {
    copy[key] = source[key];
  }
}

console.log("Original:", source);
console.log("Copy:", copy);
console.log("Are they the same object?", source === copy); // false

// ===================================
// 9. Transforming Objects
// ===================================
console.log("\n=== 9. Transforming Objects ===");

const prices = {
  apple: 1.5,
  banana: 0.75,
  orange: 2.0,
  mango: 3.5,
};

// Double all prices
const doubledPrices = {};
for (const fruit in prices) {
  doubledPrices[fruit] = prices[fruit] * 2;
}
console.log("Original prices:", prices);
console.log("Doubled prices:", doubledPrices);

// Convert to uppercase keys
const upperKeys = {};
for (const key in prices) {
  upperKeys[key.toUpperCase()] = prices[key];
}
console.log("Uppercase keys:", upperKeys);

// ===================================
// 10. Object Comparison
// ===================================
console.log("\n=== 10. Object Comparison ===");

function compareObjects(obj1, obj2) {
  // Get keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check each key and value
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log("obj1 === obj2:", compareObjects(obj1, obj2)); // true
console.log("obj1 === obj3:", compareObjects(obj1, obj3)); // false

// ===================================
// 11. Finding Values
// ===================================
console.log("\n=== 11. Finding Values ===");

const scores = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
  Diana: 88,
  Eve: 91,
};

// Find the highest scorer
let topScorer = null;
let topScore = -Infinity;

for (const student in scores) {
  if (scores[student] > topScore) {
    topScore = scores[student];
    topScorer = student;
  }
}

console.log(`Top scorer: ${topScorer} with ${topScore} points`);

// Find all students above 90
console.log("\nStudents with score above 90:");
for (const student in scores) {
  if (scores[student] > 90) {
    console.log(`  ${student}: ${scores[student]}`);
  }
}

// ===================================
// 12. Object to Array Conversion
// ===================================
console.log("\n=== 12. Object to Array Conversion ===");

const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 25,
  mangoes: 15,
};

// Convert to array of objects
const inventoryArray = [];
for (const item in inventory) {
  inventoryArray.push({
    name: item,
    quantity: inventory[item],
  });
}
console.log("Inventory array:", inventoryArray);

// Create entries array
const entries = [];
for (const key in inventory) {
  entries.push([key, inventory[key]]);
}
console.log("Entries:", entries);

// ===================================
// 13. When to Use for...in
// ===================================
console.log("\n=== 13. Best Practices Summary ===");

console.log(`
✅ USE for...in when:
   - Iterating over object properties
   - Need to access both keys and values
   - Working with configuration objects

❌ AVOID for...in when:
   - Iterating over arrays (use for...of, forEach, or classic for)
   - Order matters (property order is not guaranteed in all cases)
   - Object has inherited properties you want to skip

💡 ALTERNATIVES:
   - Object.keys(obj) - returns array of keys
   - Object.values(obj) - returns array of values
   - Object.entries(obj) - returns array of [key, value] pairs
`);

console.log("\n✅ All for...in loop examples completed!");
