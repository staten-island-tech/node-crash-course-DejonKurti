const fs = require('fs');
const path = require('path');

// Create folder
 fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created...');
});   //asynchronous by default

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;
    console.log("File written to...");
  }
);  //Creates a "hello.txt file to be placed in the same folder"

fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  " I love Node.js",
  err => {
    if (err) throw err;
    console.log("File written to...");
  }
);

//If you run both, hello.txt will contain " I love Node.js" b/c the latter overwrites
//To append...

fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;
    console.log("File written to...");

    //File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love Node.js",
      err => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
);

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});  

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if (err) throw err;
  console.log('File renamed...');
});  









