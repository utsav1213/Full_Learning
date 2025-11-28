# 🚀 Callback Functions

A **comprehensive guide** to callback functions in JavaScript — functions passed as arguments to be executed later.

---

## What is a Callback Function?

A **callback function** is a function passed as an argument to another function, which is then invoked (called back) at a later time. Callbacks are fundamental to asynchronous programming in JavaScript.

---

## 🌟 1. Basic Concept

### Simple callback:

```js
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// "Hello, John!"
// "Goodbye!"
```

### Inline callback:

```js
greet("Jane", function () {
  console.log("Nice to meet you!");
});
```

### Arrow function callback:

```js
greet("Bob", () => {
  console.log("See you later!");
});
```

---

## 🌟 2. Synchronous Callbacks

### Array methods:

```js
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function (num) {
  console.log(num * 2);
});

// map
const doubled = numbers.map((num) => num * 2);

// filter
const evens = numbers.filter((num) => num % 2 === 0);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

### Custom synchronous callback:

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(5, 3, (x, y) => x + y);
console.log(result); // 8
```

---

## 🌟 3. Asynchronous Callbacks

### setTimeout:

```js
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// "Start"
// "End"
// "This runs after 2 seconds" (after delay)
```

### setInterval:

```js
let count = 0;

const intervalId = setInterval(function () {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Done!");
  }
}, 1000);
```

### Event listeners:

```js
const button = document.getElementById("myButton");

button.addEventListener("click", function (event) {
  console.log("Button clicked!");
  console.log("Event:", event);
});
```

---

## 🌟 4. Callbacks with Parameters

### Passing data to callbacks:

```js
function fetchUser(userId, callback) {
  // Simulate API call
  setTimeout(function () {
    const user = { id: userId, name: "John Doe" };
    callback(user);
  }, 1000);
}

fetchUser(123, function (user) {
  console.log("User:", user);
});
```

### Multiple parameters:

```js
function divide(a, b, successCallback, errorCallback) {
  if (b === 0) {
    errorCallback("Division by zero!");
  } else {
    successCallback(a / b);
  }
}

divide(
  10,
  2,
  (result) => console.log("Result:", result),
  (error) => console.error("Error:", error)
);
```

---

## 🌟 5. Error-First Callbacks (Node.js Pattern)

### Convention:

```js
function readFile(filename, callback) {
  // Simulate file reading
  setTimeout(function () {
    const error = null; // or new Error("File not found")
    const data = "File contents";

    callback(error, data);
  }, 1000);
}

readFile("data.txt", function (error, data) {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Data:", data);
});
```

### Chaining error-first callbacks:

```js
function step1(callback) {
  setTimeout(() => callback(null, "Result 1"), 100);
}

function step2(data, callback) {
  setTimeout(() => callback(null, `${data} + Result 2`), 100);
}

function step3(data, callback) {
  setTimeout(() => callback(null, `${data} + Result 3`), 100);
}

step1((err, result1) => {
  if (err) return console.error(err);

  step2(result1, (err, result2) => {
    if (err) return console.error(err);

    step3(result2, (err, result3) => {
      if (err) return console.error(err);
      console.log("Final:", result3);
    });
  });
});
```

---

## 🌟 6. Callback Hell (Pyramid of Doom)

### The problem:

```js
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      getYetMoreData(c, function (d) {
        getFinalData(d, function (e) {
          console.log("Finally:", e);
        });
      });
    });
  });
});
```

### Solutions:

#### Named functions:

```js
function handleA(a) {
  getMoreData(a, handleB);
}

function handleB(b) {
  getEvenMoreData(b, handleC);
}

function handleC(c) {
  console.log("Result:", c);
}

getData(handleA);
```

#### Promises (modern approach):

```js
getData()
  .then((a) => getMoreData(a))
  .then((b) => getEvenMoreData(b))
  .then((c) => console.log("Result:", c))
  .catch((error) => console.error(error));
```

#### Async/await (best approach):

```js
async function processData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    console.log("Result:", c);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 🌟 7. Higher-Order Functions with Callbacks

### Custom map:

```js
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, (num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### Custom filter:

```js
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filter(numbers, (num) => num % 2 === 0);

console.log(evens); // [2, 4, 6]
```

---

## 🌟 8. Real-World Examples

### AJAX requests:

```js
function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error(`HTTP ${xhr.status}`));
    }
  };

  xhr.onerror = function () {
    callback(new Error("Network error"));
  };

  xhr.open("GET", url);
  xhr.send();
}

fetchData("/api/users", function (error, data) {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Users:", data);
});
```

### Animation callback:

```js
function animate(element, property, from, to, duration, callback) {
  const start = Date.now();

  function step() {
    const progress = (Date.now() - start) / duration;

    if (progress < 1) {
      const value = from + (to - from) * progress;
      element.style[property] = value + "px";
      requestAnimationFrame(step);
    } else {
      element.style[property] = to + "px";
      if (callback) callback();
    }
  }

  requestAnimationFrame(step);
}

const box = document.getElementById("box");

animate(box, "left", 0, 200, 1000, function () {
  console.log("Animation complete!");
});
```

### File processing:

```js
function processFile(file, onProgress, onComplete, onError) {
  const reader = new FileReader();

  reader.onprogress = function (event) {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      onProgress(percent);
    }
  };

  reader.onload = function (event) {
    onComplete(event.target.result);
  };

  reader.onerror = function () {
    onError(new Error("File read error"));
  };

  reader.readAsText(file);
}

const fileInput = document.getElementById("file");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  processFile(
    file,
    (percent) => console.log(`Progress: ${percent}%`),
    (data) => console.log("Data:", data),
    (error) => console.error("Error:", error)
  );
});
```

---

## 🌟 9. Callback Patterns

### Once callback:

```js
function once(callback) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      callback(...args);
    }
  };
}

const logOnce = once((message) => console.log(message));

logOnce("First call"); // Logs "First call"
logOnce("Second call"); // Nothing happens
logOnce("Third call"); // Nothing happens
```

### Throttle callback:

```js
function throttle(callback, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

### Debounce callback:

```js
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search");

const handleSearch = debounce((event) => {
  console.log("Searching:", event.target.value);
}, 500);

searchInput.addEventListener("input", handleSearch);
```

---

## 🌟 10. Callback Context (`this`)

### Problem with regular callbacks:

```js
const person = {
  name: "John",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, I'm ${this.name}`);
      // 'this' is undefined or window!
    }, 1000);
  },
};

person.greet(); // "Hello, I'm undefined"
```

### Solution 1: Arrow function:

```js
const person = {
  name: "John",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`);
      // Arrow function captures 'this' from outer scope
    }, 1000);
  },
};

person.greet(); // "Hello, I'm John"
```

### Solution 2: bind:

```js
const person = {
  name: "John",
  greet: function () {
    setTimeout(
      function () {
        console.log(`Hello, I'm ${this.name}`);
      }.bind(this),
      1000
    );
  },
};

person.greet(); // "Hello, I'm John"
```

### Solution 3: Store reference:

```js
const person = {
  name: "John",
  greet: function () {
    const self = this;
    setTimeout(function () {
      console.log(`Hello, I'm ${self.name}`);
    }, 1000);
  },
};

person.greet(); // "Hello, I'm John"
```

---

## 🌟 11. Testing Callbacks

### Synchronous callback test:

```js
function processArray(array, callback) {
  return array.map(callback);
}

// Test
const result = processArray([1, 2, 3], (num) => num * 2);
console.assert(
  JSON.stringify(result) === JSON.stringify([2, 4, 6]),
  "Should double each number"
);
```

### Asynchronous callback test (using done):

```js
function fetchData(callback) {
  setTimeout(() => {
    callback({ data: "test" });
  }, 100);
}

// Test with Jest
test("fetchData calls callback with data", (done) => {
  fetchData((result) => {
    expect(result).toEqual({ data: "test" });
    done();
  });
});
```

---

## 🌟 12. Common Mistakes

### ❌ Calling callback multiple times:

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
    callback("data"); // ❌ Called again!
  }, 1000);
}
```

### ❌ Forgetting error handling:

```js
function getData(callback) {
  // ❌ No error handling
  const data = JSON.parse(response);
  callback(data);
}

// ✅ With error handling
function getData(callback) {
  try {
    const data = JSON.parse(response);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
}
```

### ❌ Not checking if callback exists:

```js
function doSomething(callback) {
  // Do work
  callback(); // ❌ What if callback is undefined?
}

// ✅ Check first
function doSomething(callback) {
  // Do work
  if (typeof callback === "function") {
    callback();
  }
}
```

---

## 🌟 13. Best Practices

### ✅ Use error-first callbacks:

```js
function operation(callback) {
  try {
    const result = doWork();
    callback(null, result);
  } catch (error) {
    callback(error);
  }
}
```

### ✅ Name your callbacks:

```js
// ❌ Anonymous
array.forEach(function (item) {
  /* ... */
});

// ✅ Named
function processItem(item) {
  /* ... */
}
array.forEach(processItem);
```

### ✅ Keep callbacks simple:

```js
// ❌ Complex callback
data.forEach(function (item) {
  // 50 lines of complex logic
});

// ✅ Extract to function
function processItem(item) {
  // 50 lines of complex logic
}
data.forEach(processItem);
```

### ✅ Consider Promises or async/await:

```js
// Old way with callbacks
getData(function (err, data) {
  if (err) return handleError(err);
  processData(data, function (err, result) {
    if (err) return handleError(err);
    console.log(result);
  });
});

// Modern way with Promises
getData()
  .then(processData)
  .then((result) => console.log(result))
  .catch(handleError);

// Modern way with async/await
async function process() {
  try {
    const data = await getData();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    handleError(error);
  }
}
```

---

## 🧠 Deep CS Understanding

### Event Loop:

- Callbacks enable asynchronous execution
- Placed in callback queue
- Executed when call stack is empty
- Event loop coordinates execution

### Closure:

- Callbacks create closures
- Capture variables from outer scope
- Can access outer variables even after outer function returns
- Important for maintaining state

### Memory:

- Callbacks kept in memory until executed
- Can cause memory leaks if not cleaned up
- Remove event listeners when not needed
- Clear timeouts/intervals

### Performance:

- Callbacks themselves are fast
- Deeply nested callbacks hard to maintain
- Can impact code readability
- Modern alternatives (Promises) preferred

---

## 🏆 FINAL SUMMARY

### ✔ Functions passed as arguments

### ✔ Executed at a later time

### ✔ Core of asynchronous programming

### ✔ Used in events, timers, array methods

### ✔ Error-first pattern in Node.js

### ✔ Can lead to callback hell

### ✔ Solved by Promises and async/await

### ✔ Enable higher-order functions

### ✔ Create closures

### ✔ Fundamental JavaScript pattern

---

## 🚀 Related Topics

- Higher-order functions
- Promises
- Async/await
- Event loop
- Closures
- Arrow functions
- Asynchronous programming
- Error handling
