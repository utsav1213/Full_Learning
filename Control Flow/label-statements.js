// ==========================================
// JavaScript Label Statements Examples
// ==========================================

// 1. Basic Label with Loops
console.log("Basic labeled loops:");
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer: ${i}`);
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log(`  Inner: ${j}`);
  }
}

// 2. Using break with Labels - Without Label
console.log("\nbreak WITHOUT label (breaks inner loop only):");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// 3. Using break with Labels - With Label
console.log("\nbreak WITH label (breaks outer loop):");
searchOuter: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break searchOuter;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// 4. Using continue with Labels - Without Label
console.log("\ncontinue WITHOUT label (continues inner loop):");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// 5. Using continue with Labels - With Label
console.log("\ncontinue WITH label (continues outer loop):");
continueOuter: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue continueOuter;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// 6. Search in 2D Array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let foundValue = false;
let position = null;

console.log("\nSearch in 2D array for value 5:");
search: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 5) {
      console.log(`Found at [${i}][${j}]`);
      foundValue = true;
      position = [i, j];
      break search;
    }
  }
}
console.log("Position:", position);

// 7. Nested Loop Validation
const grid = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

let isValid = true;

console.log("\nValidate grid (check for zeros):");
validation: for (let row of grid) {
  for (let cell of row) {
    if (cell === 0) {
      console.log("Invalid: contains zero");
      isValid = false;
      break validation;
    }
  }
}
console.log("Grid valid:", isValid);

// 8. Process Until STOP Signal
const data = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "STOP"],
  ["i", "j", "k"],
];

console.log("\nProcess until STOP signal:");
processing: for (let array of data) {
  for (let item of array) {
    if (item === "STOP") {
      console.log("Stopped processing");
      break processing;
    }
    console.log(item);
  }
}

// 9. Labels with while Loops
let i = 0;
console.log("\nLabels with while loops:");
outer: while (i < 3) {
  let j = 0;
  while (j < 3) {
    if (i === 1 && j === 1) {
      break outer;
    }
    console.log(`i=${i}, j=${j}`);
    j++;
  }
  i++;
}

// 10. Labels with Block Statements
const value = 5;
console.log("\nLabels with block statements:");
checkBlock: {
  console.log("Checking value...");
  if (value < 0) {
    console.log("Negative");
    break checkBlock;
  }
  if (value === 0) {
    console.log("Zero");
    break checkBlock;
  }
  console.log("Positive");
}

// 11. Multiple Label Levels
console.log("\nMultiple label levels:");
level1: for (let x = 0; x < 2; x++) {
  level2: for (let y = 0; y < 2; y++) {
    level3: for (let z = 0; z < 2; z++) {
      console.log(`x=${x}, y=${y}, z=${z}`);
      if (z === 1) {
        break level1; // Break to outermost
      }
    }
  }
}

// 12. Find Common Element in Two Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 3, 8, 9];
let commonElement = null;

console.log("\nFind common element:");
findCommon: for (let a of arr1) {
  for (let b of arr2) {
    if (a === b) {
      commonElement = a;
      console.log(`Found common element: ${a}`);
      break findCommon;
    }
  }
}
console.log("Common element:", commonElement);

console.log("\nLabel statements examples completed!");
