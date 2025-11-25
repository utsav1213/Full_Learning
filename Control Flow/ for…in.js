// Here is a **deep, clear, unforgettable explanation of `for…in`** — from basics to advanced, including internal JS behavior, enumeration rules, prototype chain behavior, differences from `for…of`, and common pitfalls.
// After this, you will MASTER `for…in`.

// ---

// # 📘 `for…in` — The Complete Guide

// `for…in` is a JavaScript loop used to **iterate over the *enumerable property keys*** of an object.

// It loops over **property names**, not values.

// ---

// # 🌟 1. Basic Syntax

// ```js
// for (let key in object) {
//   // use key
// }
// ```

// ---

// # 🌟 2. Basic Example

// ```js
// const user = {
//   name: "Chandan",
//   age: 21
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }
// ```

// ### Output:

// ```
// name Chandan
// age 21
// ```

// `key` → `"name"`, `"age"`
// `user[key]` → `"Chandan"`, `21`

// ---

// # 🌟 3. What Does `for…in` Iterate Over?

// It iterates over:

// * **Own enumerable properties**
// * **Inherited enumerable properties** (from prototype)

// That means `for…in` climbs the **prototype chain**.

// ---

// # 🌟 4. Example: Inherited Properties Show Up

// ```js
// const parent = { a: 1 };
// const child = Object.create(parent);
// child.b = 2;

// for (let key in child) {
//   console.log(key);
// }
// ```

// ### Output:

// ```
// b
// a     // inherited!
// ```

// This is why `for…in` is NOT ideal for arrays or objects where prototype pollution may exist.

// ---

// # 🌟 5. Filtering Only Own Properties

// Use `hasOwnProperty()`:

// ```js
// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(key); 
//   }
// }
// ```

// ---

// # 🌟 6. `for…in` Order of Iteration (Important!)

// JavaScript does **not guarantee** strict ordering, but engines generally do:

// 1. **Numeric keys** (ascending)
// 2. **String keys** (in insertion order)
// 3. **Symbol keys are ignored**

// Examples:

// ```js
// const obj = {
//   3: "three",
//   1: "one",
//   b: "bee",
//   a: "aye"
// };

// for (let key in obj) console.log(key);
// ```

// Output (Chrome / Node.js):

// ```
// 1
// 3
// b
// a
// ```

// ---

// # 🌟 7. Why Not Use `for…in` for Arrays?

// Because it loops over:

// * indexes
// * custom properties
// * prototype properties

// Example:

// ```js
// Array.prototype.sayHi = () => {};

// const arr = [1, 2, 3];

// for (let i in arr) {
//   console.log(i);   
// }
// ```

// Output:

// ```
// 0
// 1
// 2
// sayHi   // unexpected!
// ```

// Use:

// * `for…of`
// * `for`
// * `forEach`

// ---

// # 🌟 8. `for…in` vs `for…of` (Super Important)

// | Feature                   | `for…in` | `for…of`                   |
// | ------------------------- | -------- | -------------------------- |
// | Iterates over             | **Keys** | **Values**                 |
// | Works on                  | Objects  | Arrays, strings, iterables |
// | Looks at prototype chain? | ✔ Yes    | ❌ No                       |
// | Suitable for arrays?      | ❌ No     | ✔ Yes                      |

// Example:

// ### `for…in` (keys)

// ```js
// for (let key in ['a', 'b']) console.log(key);
// ```

// → `0,1`

// ### `for…of` (values)

// ```js
// for (let value of ['a', 'b']) console.log(value);
// ```

// → `a,b`

// ---

// # 🌟 9. Enumerability Rules

// A property is included in `for…in` **only if:**

// * `enumerable: true`
// * Not a symbol
// * Own OR inherited

// Example:

// ```js
// const obj = {};
// Object.defineProperty(obj, "x", {
//   value: 10,
//   enumerable: false
// });

// for (let k in obj) console.log(k); // ❌ empty
// ```

// ---

// # 🌟 10. Real Use Cases

// ### ✔ Loop through object properties

// ```js
// const settings = {
//   theme: "dark",
//   version: 1
// };

// for (let key in settings) {
//   console.log(`${key}: ${settings[key]}`);
// }
// ```

// ### ✔ Iterate through dynamic objects (API response)

// ### ✔ When prototype chain behavior is desired

// ### ✔ Looping over JSON objects

// ---

// # 🌟 11. Under the Hood (Computer Science Insight)

// `for…in` performs:

// 1. Collect **all enumerable keys**
// 2. Walk up the **prototype chain**
// 3. Skip **symbols**
// 4. Yield keys in the JS engine’s ordering rules

// Pseudo implementation:

// ```js
// for (let key in obj) {
//   // internally something like:
//   if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
//     // key found
//   }
// }
// ```

// ---

// # 🏆 Final Summary (You Won't Forget)

// ### ✔ `for…in` loops over **keys**, not values

// ### ✔ Includes **inherited enumerable** properties

// ### ✔ DO NOT use for arrays

// ### ✔ Order: numeric keys → strings → no symbols

// ### ✔ Use for objects or when prototype behavior is needed

// ### ✔ Use `hasOwnProperty()` to filter own keys

// ### ✔ `for…in` ≠ `for…of`

// ---

// # 🚀 Want a README.md for this too?

// Just say **create a readme** and I’ll format everything into a perfect Markdown file.
// // 