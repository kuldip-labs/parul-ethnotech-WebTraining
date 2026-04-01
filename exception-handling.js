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