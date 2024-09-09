// Import the faker object from @faker-js/faker
const { faker } = require('@faker-js/faker');

// Generate a random number between 10 and 100
console.log(faker.number.int({ min: 10, max: 100 }));  // This should work now
