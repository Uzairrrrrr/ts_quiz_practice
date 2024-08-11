// Primitive Data types:
// string: Textual data.
// number: Numeric data, both integers and floating points.
// boolean: True/false values.
// null: Represents a null value.
// undefined: Represents an undefined value.
// symbol: Unique and immutable value.
// bigint: For large integers.

let message: string = "Hello, World!";
let count: number = 42;
let isActive: boolean = true;
let notAssigned: undefined;
let noValue: null = null;

// Arithmetic Operators
// Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%).

let sum: number = 5 + 3; // 8
let difference: number = 5 - 3; // 2
let product: number = 5 * 3; // 15
let quotient: number = 5 / 3; // 1.6667
let remainder: number = 5 % 3; // 2

function Addition(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
let result = Addition(2, 3, 45, 5);
console.log(result);

// Optional param

function greet(name?: string): string {
  return `Hello, ${name || "Guest"}`;
}
let ans = greet("uzair");
console.log(ans);

// Anonymous Func
let greetings = function (name: string): string {
  return `Hello, ${name}`;
};
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Callback hell
setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
    setTimeout(() => {
      console.log("Third");
    }, 1000);
  }, 1000);
}, 1000);

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let dir: Direction = Direction.Up;
