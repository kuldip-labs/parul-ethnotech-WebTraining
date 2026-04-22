// Creating Dates
const now = new Date(); // Current date and time
const specific = new Date('2024-01-15'); // From string
const timestamp = new Date(1705276800000); // From milliseconds
const parts = new Date(2024, 0, 15); // Year, Month (0-11), Day

// Getting Date Components
const year = now.getFullYear();
const month = now.getMonth(); // 0-11
const day = now.getDate();
const dayOfWeek = now.getDay(); // 0-6 (Sunday-Saturday)
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Formatting Dates
const dateString = now.toDateString(); // "Mon Jan 15 2024"
const isoString = now.toISOString(); // "2024-01-15T10:30:00.000Z"
const localeString = now.toLocaleString(); // Locale-based format

// Date Arithmetic
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

// Comparing Dates
const date1 = new Date('2024-01-15');
const date2 = new Date('2024-01-20');
const isBefore = date1 < date2; // true
const diff = date2 - date1; // Difference in milliseconds

// Useful Methods
const timestamp2 = now.getTime(); // Milliseconds since epoch
const utcString = now.toUTCString(); // UTC format
//