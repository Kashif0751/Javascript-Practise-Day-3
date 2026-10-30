// Reading an array//
const fruits = ["apple", "banana", "mango"];

console.log(fruits);                      // [ 'apple', 'banana', 'mango' ]
console.log(fruits[0]);                   // apple
console.log(fruits[2]);                   // mango
console.log(fruits.length);               // 3
console.log(fruits[5]);                   // undefined
console.log(fruits[fruits.length - 1]);   // mango (last item)

// Changing an array//
fruits.push("orange");       // add to the end
console.log(fruits);         // [ 'apple', 'banana', 'mango', 'orange' ]

fruits.pop();                // remove from the end
console.log(fruits);         // [ 'apple', 'banana', 'mango' ]

fruits.unshift("grapes");    // add to the start
console.log(fruits);         // [ 'grapes', 'apple', 'banana', 'mango' ]

fruits.shift();              // remove from the start
console.log(fruits);         // [ 'apple', 'banana', 'mango' ]

fruits[1] = "kiwi";          // replace one item
console.log(fruits);         // [ 'apple', 'kiwi', 'mango' ]

// Searching //
const names = ["Ali", "Sara", "Omar"];

console.log(names.includes("Sara"));   // true
console.log(names.includes("Zain"));   // false
console.log(names.indexOf("Omar"));    // 2
console.log(names.indexOf("Zain"));    // -1 (not found)

// const, mixed types and typeOf//
const list = [1, 2];
list.push(3);
console.log(list);              // [ 1, 2, 3 ]  (changing contents is allowed)

// list = [9, 9];               // TypeError: Assignment to constant variable.

const info = ["Kashif", 23, true, null];
console.log(info);              // [ 'Kashif', 23, true, null ]

console.log(typeof info);             // object
console.log(Array.isArray(info));     // true

// predict the answer//

const nums = [10, 20, 30, 40];

console.log(nums[1]);                  // 20
console.log(nums[nums.length - 1]);    // 40
console.log(nums.length);              // 4
nums.push(50);
console.log(nums.length);              // 5
console.log(typeof nums);              // object

// Loops through an array//
const marks = [60, 75, 90];

// Classic for loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
// 60
// 75
// 90

// for...of loop (simpler when you don't need the index)
for (const mark of marks) {
  console.log(mark);
}
// 60
// 75
// 90

// template string (backtricks) //

const name = "Kashif";
const age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Kashif and I am 23 years old.

console.log('My name is ${name}');
// My name is ${name}   <- single quotes don't work

// // the numbered list task (worked example)

const drinks = ["tea", "coffee", "juice", "milk", "water"];

console.log(drinks[0]);                    // tea
console.log(drinks[drinks.length - 1]);    // water

drinks.push("lassi");
drinks.shift();
console.log(drinks);   // [ 'coffee', 'juice', 'milk', 'water', 'lassi' ]

for (let i = 0; i < drinks.length; i++) {
  console.log(`${i + 1}. ${drinks[i]}`);
}
// 1. coffee
// 2. juice
// 3. milk
// 4. water
// 5. lassi

// sum, largest and average//
const numbers = [12, 7, 25, 3, 18];

// Sum
let sum = 0;
for (const n of numbers) {
  sum = sum + n;
}
console.log(`Sum: ${sum}`);               // Sum: 65

// Largest
let max = numbers[0];
for (const n of numbers) {
  if (n > max) {
    max = n;
  }
}
console.log(`Largest: ${max}`);           // Largest: 25

// Average
const average = sum / numbers.length;
console.log(`Average: ${average}`);       // Average: 13