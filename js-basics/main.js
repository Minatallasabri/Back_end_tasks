document.write("<h1>Hello <span>Page</span></h1>");

console.log("Hello I am Learning JS");

// Task 2
// Variables
//var 
var catName = "Oliver";
console.log(catName); // Oliver
var catSound = "Meow!";
console.log(catSound); // Meow!



//let
// Variable declarations
let studlyCapVar = 10;
let properCamelCase = "A String";
let titleCaseOver = 9000;

// Variable assignments
studlyCapVar = 10;
properCamelCase= "A String";
titleCaseOver  = 9000;

//const
const FAV_PET = "Cats";
console.log(FAV_PET); // Cats

//Task 3
// String and number
let result1 = '5' + 3;  // '53' (string)
let result2 = '5' - 3;  // 2 (number)
let result3 = '5' * 2;  // 10 (number)

// Boolean and number
let result4 = true + 2;  // 3 (true is coerced to 1)
let result5 = false - 1; // -1 (false is coerced to 0)

// Null and undefined
let result6 = null + 5;       // 5 (null is coerced to 0)
let result7 = undefined + 5;  // NaN (undefined cannot be coerced to a number)

// Logging the results
console.log(result1, result2, result3);  // '53', 2, 10
console.log(result4, result5);           // 3, -1
console.log(result6, result7);           // 5, NaN

// Task 4
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

// Task 5
// Arithmetic operators
let addition = 5 + 3;        // 8
let subtraction = 5 - 3;     // 2
let multiplication = 5 * 3;  // 15
let division = 6 / 3;        // 2
let modulus = 5 % 2;         // 1
let increment = 5;
increment++;                 // 6
let decrement = 5;
decrement--;                 // 4

// Comparison operators
let equal = 5 == '5';        // true
let strictEqual = 5 === '5'; // false
let notEqual = 5 != 3;       // true
let greaterThan = 5 > 3;     // true
let lessThanOrEqual = 5 <= 5;// true

// Logical operators
let andOperator = true && false;   // false
let orOperator = true || false;    // true
let notOperator = !true;           // false

// Task 6
let number = 7;  // Change this to test different numbers

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// Task 7
let string1 = "hello";
let string2 = "Hello";  // Try different string values

if (string1.toLowerCase() === string2.toLowerCase()) {
    console.log(`The strings "${string1}" and "${string2}" are equal (case-insensitive).`);
} else {
    console.log(`The strings "${string1}" and "${string2}" are not equal.`);
}
