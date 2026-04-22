// Variable Declaration Examples in JavaScript

// 1. VAR - Function scoped, can be redeclared and reassigned
var name = "John";
var name = "Jane"; // Can be redeclared
name = "Bob"; // Can be reassigned
console.log("var name:", name);

var age = 25;
console.log("var age:", age);

// 2. LET - Block scoped, cannot be redeclared but can be reassigned
let country = "USA";
country = "Canada"; // Can be reassigned
console.log("let country:", country);

let city = "New York";
// let city = "Boston"; // Error: Identifier 'city' has already been declared
console.log("let city:", city);

// 3. CONST - Block scoped, cannot be redeclared or reassigned
const PI = 3.14159;
console.log("const PI:", PI);
// PI = 3.14; // Error: Assignment to constant variable

const MAX_USERS = 100;
// const MAX_USERS = 200; // Error: Identifier 'MAX_USERS' has already been declared
console.log("const MAX_USERS:", MAX_USERS);

// Const object/array can be modified but not reassigned
const person = { firstName: "Alice", lastName: "Smith" };
person.firstName = "Alicia"; // This is allowed
console.log("const person (modified):", person);
// person = { firstName: "Bob" }; // Error: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log("const numbers (modified):", numbers);
// numbers = [5, 6, 7]; // Error: Assignment to constant variable

// Scope Demonstration
function scopeExample() {
  var funcVar = "function scoped";
  let blockLet = "block scoped";
  const blockConst = "block scoped";
  
  if (true) {
    var funcVar = "redeclared in block";
    let blockLet = "new block scoped"; // Different variable
    const blockConst = "new block scoped"; // Different variable
    console.log("Inside if - var:", funcVar);
    console.log("Inside if - let:", blockLet);
    console.log("Inside if - const:", blockConst);
  }
  
  console.log("Outside if - var:", funcVar);
  console.log("Outside if - let:", blockLet);
  console.log("Outside if - const:", blockConst);
}

scopeExample();
