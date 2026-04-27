// array methods
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5
console.log(numbers.push(6)); // Output: 6
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(numbers.pop()); // Output: 6
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers.shift()); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]
console.log(numbers.unshift(0)); // Output: 5
console.log(numbers); // Output: [0, 2, 3, 4, 5]
console.log(numbers.indexOf(3)); // Output: 2
console.log(numbers.slice(1, 4)); // Output: [2, 3, 4]
console.log(numbers.splice(2, 1)); // Output: [3]
console.log(numbers); // Output: [0, 2, 4, 5]
console.log(numbers.concat([6, 7])); // Output: [0, 2, 4, 5, 6, 7]
console.log(numbers.join(", "));    // Output: "0, 2, 4, 5"
console.log(numbers.reverse()); // Output: [5, 4, 2, 0]
console.log(numbers.sort()); // Output: [0, 2, 4, 5]    
    