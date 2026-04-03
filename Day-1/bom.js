// 3. Practice: Complete & Debug Challenge
// Below is a broken script intended to greet a user and check if their screen is large enough to view a "Pro" version of a site.

// Brocken code
// GOAL: Ask name, confirm entry, and check screen width.
function initializeApp() {
  let userName = window.promp("What is your name?"); // Error 1

  if (userName) {
    let isSure = confirm("Are you sure " + userName + " is correct?");

    if (isSure) {
      alert("Welcome, " + userName);
    }
  }

  // Check if screen width is at least 1024px
  if (window.screen - width >= 1024) { // Error 2
    console.log("High-res mode active");
  } else {
    console.log("Mobile mode active");
  }
}

/* 
The Debugging Process
Typo in Method Name: window.promp does not exist. It must be window.prompt.

Property Syntax: In JavaScript, CSS-style hyphens (like screen-width) are not allowed for properties. We use camelCase. The correct property is screen.width or window.innerWidth.
*/

function initializeApp() {
  // 1. Fixed the typo
  let userName = window.prompt("What is your name?");

  if (userName) {
    let isSure = confirm("Are you sure " + userName + " is correct?");

    if (isSure) {
      alert("Welcome, " + userName);
    }
  }

  // 2. Fixed the property access to use the BOM correctly
  if (window.innerWidth >= 1024) {
    alert("You are viewing the Desktop version.");
  } else {
    console.log("Viewport is currently: " + window.innerWidth + "px");
  }
}

initializeApp();