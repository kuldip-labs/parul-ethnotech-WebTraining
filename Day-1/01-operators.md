###  1. Basic Arithmetic Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| + | Addition | 10 + 5 | 15 |
| - |Subtraction | 10 - 5 | 5 |
| * |Multiplication | 10 * 5 | 50 |
| / |Division | 10 / 2 | 5 |
| % |Modulus | 10 % 3 | 1 (The remainder)|

### 2. Assignment, Increment, and Decrement
Before we get to complex math, we need to handle how values are stored and changed.

* The Assignment Operator (=)
The = sign does not mean "equals" in JavaScript; it means "assign the value on the right to the variable on the left."

`let x = 10; // x now holds the value 10`
Increment (++) and Decrement (--)
These are shortcuts used to increase or decrease a variable by exactly 1.

x++ is the same as x = x + 1

x-- is the same as x = x - 1

### 3. Compound Assignment Operators

* Addition Assignment (+=)
Adds the right value to the variable and assigns the result back to the variable.

`let score = 10;
score += 5; // Same as: score = score + 5
console.log(score); // Output: 15 `

* Subtraction Assignment (-=)
Subtracts the right value from the variable.

`let health = 100;
health -= 20; // Same as: health = health - 20
console.log(health); // Output: 80`

* Multiplication Assignment (*=)
Multiplies the variable by the right value.

`let salary = 2000;
salary *= 2; // Same as: salary = salary * 2
console.log(salary); // Output: 4000`

* Division Assignment (/=)
Divides the variable by the right value.

`let pizzaSlices = 8;
pizzaSlices /= 2; // Same as: pizzaSlices = pizzaSlices / 2
console.log(pizzaSlices); // Output: 4`

* Modulus Assignment (%=)
Divides the variable by the right value and assigns the remainder to the variable.

`let change = 10;
change %= 3; // Same as: change = 10 % 3
console.log(change); // Output: 1 (Since 3 goes into 10 three times with 1 left over)`