// example 1. Basic Syntax and Usage
try {
  // Code that might throw an error
  const data = JSON.parse(someRawData);
  console.log("Success!");
} catch (error) {



  // Code to handle the error
  console.error("Parsing failed:", error.message);
} finally {
  // Code that always runs
  console.log("Operation attempt complete.");
}

// example 2. The throw Statement
// Sometimes, you want to create your own errors based on business logic (e.g., a user entering a negative age). You can use the throw keyword to trigger the catch block manually

function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  return "Age is valid.";
}

try {
  console.log(checkAge(-5));
} catch (e) {
  console.log("Validation Error: " + e.message);
}

// Async errors
// In modern JavaScript, we often use async/await. To handle errors in these functions, the syntax remains the same:

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
  } catch (error) {
    console.log("Network or Parsing Error:", error);
  } finally {
    stopLoadingSpinner();
  }
}