// ==========================================
// JavaScript forEach Method Examples
// ==========================================

// 1. Basic forEach
const fruits = ["apple", "banana", "cherry"];
console.log("Basic forEach:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// 2. Arrow Function Syntax
console.log("\nArrow function syntax:");
fruits.forEach((fruit) => console.log(fruit));

// 3. Parameters: element, index, array
const colors = ["red", "green", "blue"];
console.log("\nWith all parameters:");
colors.forEach((color, index, arr) => {
  console.log(`Index ${index}: ${color} (Array length: ${arr.length})`);
});

// 4. Sum Array Elements
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log("\nSum of numbers:", sum);

// 5. Print with Index
const items = ["apple", "banana", "cherry"];
console.log("\nPrint with index:");
items.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// 6. Modify Another Array (Use map() for this instead)
const originalNumbers = [1, 2, 3, 4];
const doubled = [];
originalNumbers.forEach((num) => {
  doubled.push(num * 2);
});
console.log("\nOriginal:", originalNumbers);
console.log("Doubled:", doubled);

// 7. Update Object Properties
const users = [
  { name: "John", active: false },
  { name: "Jane", active: false },
];

users.forEach((user) => {
  user.active = true;
});
console.log("\nUpdated users:", users);

// 8. forEach with Objects (Array of Objects)
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log("\nProducts list:");
products.forEach((product) => {
  console.log(`${product.name}: $${product.price}`);
});

// 9. Skip Iteration Using return
const nums = [1, 2, 3, 4, 5];
console.log("\nSkipping 3 using return:");
nums.forEach((num) => {
  if (num === 3) return; // Acts like continue
  console.log(num);
});

// 10. forEach with this Context
const multiplier = {
  factor: 2,
  multiply: function (arr) {
    const results = [];
    arr.forEach(function (num) {
      results.push(num * this.factor);
    }, this); // Pass 'this' context
    return results;
  },
};
console.log("\nMultiplied by 2:", multiplier.multiply([1, 2, 3]));

// 11. Arrow Function with this (Better)
const calculator = {
  base: 10,
  addToAll: function (arr) {
    const results = [];
    arr.forEach((num) => {
      results.push(num + this.base); // Arrow function inherits 'this'
    });
    return results;
  },
};
console.log("Added 10 to all:", calculator.addToAll([1, 2, 3]));

// 12. Calculate Total Price
const cart = [
  { item: "Book", price: 15, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Notebook", price: 8, quantity: 3 },
];

let total = 0;
cart.forEach((item) => {
  total += item.price * item.quantity;
});
console.log("\nCart total: $" + total);

// 13. Validation Example
const fields = ["email", "password", "username"];
const formData = { email: "test@test.com", password: "", username: "john" };
const errors = [];

fields.forEach((field) => {
  if (!formData[field]) {
    errors.push(`${field} is required`);
  }
});
console.log("\nValidation errors:", errors);

console.log("\nforEach examples completed!");
