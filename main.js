// Primitive Data types:
// string: Textual data.
// number: Numeric data, both integers and floating points.
// boolean: True/false values.
// null: Represents a null value.
// undefined: Represents an undefined value.
// symbol: Unique and immutable value.
// bigint: For large integers.
let message = "Hello, World!";
let count = 42;
let isActive = true;
let notAssigned;
let noValue = null;
// Arithmetic Operators
// Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%).
let sum = 5 + 3; // 8
let difference = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.6667
let remainder = 5 % 3; // 2
function Addition(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
let result = Addition(2, 3, 45, 5);
console.log(result);
// Optional param
function greet(name) {
    return `Hello, ${name || "Guest"}`;
}
let ans = greet("uzair");
console.log(ans);
// Anonymous Func
let greetings = function (name) {
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Up;
const substraction = (a, b) => {
    return a - b;
};
substraction(1, 5);
export {};
