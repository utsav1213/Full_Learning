/**
 * 🚀 Labeled Statements - JavaScript Implementation
 * Comprehensive examples of labeled statements in JavaScript
 */

// ===================================
// 1. Basic Labeled Statement
// ===================================
console.log("=== 1. Basic Labeled Statement ===");

// A label is an identifier followed by a colon
myLabel: {
  console.log("Inside labeled block");
  break myLabel; // Exit the labeled block
  console.log("This won't execute");
}
console.log("After labeled block");

// ===================================
// 2. Labeled Loop with Break
// ===================================
console.log("\n=== 2. Labeled Loop with Break ===");

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
    
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop!");
      break outerLoop; // Breaks the outer loop
    }
  }
}
console.log("Exited outer loop");

// ===================================
// 3. Labeled Loop with Continue
// ===================================
console.log("\n=== 3. Labeled Loop with Continue ===");

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      console.log(`Skipping to next outer iteration at i=${i}, j=${j}`);
      continue outer; // Skip to next iteration of outer loop
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// ===================================
// 4. Matrix Search with Labeled Break
// ===================================
console.log("\n=== 4. Matrix Search with Labeled Break ===");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const target = 5;
let found = false;
let position = null;

search: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Checking [${row}][${col}] = ${matrix[row][col]}`);
    
    if (matrix[row][col] === target) {
      found = true;
      position = { row, col };
      break search; // Exit both loops
    }
  }
}

console.log(found ? `Found ${target} at [${position.row}][${position.col}]` : `${target} not found`);

// ===================================
// 5. Multiple Nested Loops
// ===================================
console.log("\n=== 5. Multiple Nested Loops ===");

outermost: for (let i = 0; i < 2; i++) {
  middle: for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);
      
      if (i === 1 && j === 0 && k === 1) {
        console.log("Breaking to middle loop");
        break middle;
      }
    }
  }
}

// ===================================
// 6. Processing Nested Data
// ===================================
console.log("\n=== 6. Processing Nested Data ===");

const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", active: true },
      { name: "Bob", active: true },
    ],
  },
  {
    name: "Sales",
    employees: [
      { name: "Charlie", active: true },
      { name: "Diana", active: false },
    ],
  },
  {
    name: "Marketing",
    employees: [
      { name: "Eve", active: true },
      { name: "Frank", active: false },
    ],
  },
];

// Find first inactive employee
let firstInactive = null;

deptLoop: for (const dept of departments) {
  for (const emp of dept.employees) {
    if (!emp.active) {
      firstInactive = { dept: dept.name, emp: emp.name };
      break deptLoop;
    }
  }
}

console.log("First inactive employee:");
console.log(`  ${firstInactive.emp} in ${firstInactive.dept}`);

// ===================================
// 7. Game Board Pattern
// ===================================
console.log("\n=== 7. Game Board Pattern ===");

const gameBoard = [
  [".", ".", "X"],
  [".", "O", "."],
  ["X", ".", "."],
];

// Find first X
let xPosition = null;

boardSearch: for (let row = 0; row < gameBoard.length; row++) {
  for (let col = 0; col < gameBoard[row].length; col++) {
    if (gameBoard[row][col] === "X") {
      xPosition = { row, col };
      break boardSearch;
    }
  }
}

console.log(`First X found at: row ${xPosition.row}, col ${xPosition.col}`);

// Display board
console.log("\nGame Board:");
for (const row of gameBoard) {
  console.log(`  ${row.join(" ")}`);
}

// ===================================
// 8. Validation with Labeled Break
// ===================================
console.log("\n=== 8. Validation with Labeled Break ===");

const forms = [
  { fields: [{ valid: true }, { valid: true }] },
  { fields: [{ valid: true }, { valid: false }] },
  { fields: [{ valid: true }, { valid: true }] },
];

let allValid = true;
let invalidLocation = null;

validation: for (let formIdx = 0; formIdx < forms.length; formIdx++) {
  for (let fieldIdx = 0; fieldIdx < forms[formIdx].fields.length; fieldIdx++) {
    if (!forms[formIdx].fields[fieldIdx].valid) {
      allValid = false;
      invalidLocation = { form: formIdx, field: fieldIdx };
      break validation;
    }
  }
}

if (allValid) {
  console.log("All forms are valid!");
} else {
  console.log(`Invalid field found at Form ${invalidLocation.form}, Field ${invalidLocation.field}`);
}

// ===================================
// 9. Skip Entire Category
// ===================================
console.log("\n=== 9. Skip Entire Category ===");

const categories = [
  { name: "Electronics", skip: false, items: ["Laptop", "Phone", "Tablet"] },
  { name: "Clothing", skip: true, items: ["Shirt", "Pants", "Jacket"] },
  { name: "Books", skip: false, items: ["Novel", "Textbook", "Magazine"] },
];

categoryLoop: for (const category of categories) {
  if (category.skip) {
    console.log(`Skipping category: ${category.name}`);
    continue categoryLoop;
  }
  
  console.log(`\nProcessing category: ${category.name}`);
  for (const item of category.items) {
    console.log(`  - ${item}`);
  }
}

// ===================================
// 10. While Loops with Labels
// ===================================
console.log("\n=== 10. While Loops with Labels ===");

let outerCount = 0;

outerWhile: while (outerCount < 3) {
  let innerCount = 0;
  
  while (innerCount < 3) {
    console.log(`outer: ${outerCount}, inner: ${innerCount}`);
    
    if (outerCount === 1 && innerCount === 1) {
      console.log("Breaking outer while loop!");
      break outerWhile;
    }
    
    innerCount++;
  }
  
  outerCount++;
}

// ===================================
// 11. Complex Data Navigation
// ===================================
console.log("\n=== 11. Complex Data Navigation ===");

const tree = {
  name: "root",
  children: [
    {
      name: "branch1",
      children: [
        { name: "leaf1a", children: [] },
        { name: "leaf1b", children: [] },
      ],
    },
    {
      name: "branch2",
      children: [
        { name: "leaf2a", children: [] },
        { name: "TARGET", children: [] }, // We're looking for this
        { name: "leaf2c", children: [] },
      ],
    },
  ],
};

// Find TARGET in tree (simplified for demo)
let targetNode = null;

level1: for (const child1 of tree.children) {
  for (const child2 of child1.children) {
    console.log(`Checking: ${child2.name}`);
    
    if (child2.name === "TARGET") {
      targetNode = child2;
      console.log("Found TARGET!");
      break level1;
    }
  }
}

// ===================================
// 12. Alternative Approaches
// ===================================
console.log("\n=== 12. Alternative Approaches ===");

// Using a function (often cleaner than labels)
function findInMatrix(matrix, value) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === value) {
        return { row, col }; // Early return instead of break
      }
    }
  }
  return null;
}

const result = findInMatrix(matrix, 5);
console.log("Using function return:", result);

// Using Array.flat and findIndex
const flatResult = matrix.flat().findIndex((x) => x === 5);
console.log("Using flat + findIndex:", flatResult);

// ===================================
// 13. Best Practices
// ===================================
console.log("\n=== 13. Best Practices Summary ===");

console.log(`
✅ USE labeled statements when:
   - Breaking/continuing outer loops in nested structures
   - Searching multi-dimensional data
   - Complex nested data processing
   - No cleaner alternative exists

❌ AVOID when:
   - A function with early return would be cleaner
   - Array methods (find, some, every) can be used
   - Code becomes hard to follow
   - Simple loops don't need them

💡 NAMING CONVENTIONS:
   - Use descriptive labels: outerLoop, searchLoop, validation
   - Avoid generic names: loop1, label1
   - Keep labels close to their blocks

⚠️ COMMON ISSUES:
   - Labels only work with break and continue
   - Labels can make code harder to understand
   - Over-using labels is a code smell
`);

console.log("✅ All labeled statement examples completed!");
