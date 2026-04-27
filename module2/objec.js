//object methods
let person = {
  name: "Alice",
  age: 25,
    greet: function() {
    console.log("Hello, my name is " + this.name);
    }   
};
console.log(person.name); // Output: "Alice"
console.log(person.age); // Output: 25
person.greet(); // Output: "Hello, my name is Alice"
person.name = "Bob";
console.log(person.name); // Output: "Bob"
delete person.age;
console.log(person.age); // Output: undefined
console.log("name" in person); // Output: true
console.log("age" in person); // Output: false
console.log(Object.keys(person)); // Output: ["name", "greet"]
console.log(Object.values(person)); // Output: ["Bob", function() { ... }]
console.log(Object.entries(person)); // Output: [["name", "Bob"], ["greet", function() { ... }]]
