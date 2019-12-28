const path = require('path');

// Base file name
console.log(path.basename(__filename)); //This prints the base name in the terminal

// Directory Name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename)); //Since this is an object, we can access any property:
console.log(path.parse(__filename).base);

// Concatenate paths
../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))