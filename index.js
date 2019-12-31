//Node.js Crash Course HW -- Due Jan 2
//No Express used here

//Node runs not on a browser, but on your machine (backend bb)


//NPM INSTALLATION
/*     - Packages stored in "node_modules"
    - Dependencies listed in package.json
    - NPM scripts used to run tasks like running a ServiceWorkerRegistration

npm init
npm install express
npm install -g nodemon  */

//MODULES

    /* const path = require('path');
    const myFile = require('./myFile'); */

//TERMINAL
/*     nodemon makes it so we dont have to constantly restart server
    npm install -D nodemon

    - If you deleted node_modules (which you should b4 deployment b/c file gets huge) and type "npm install"
     node modules folder recreated 
 */





//NODE TIME -- Importing Diff Files

    //console.log('Hello from Node.js...')
    //node index in console will run this and display it

/* const person = require('./person');
console.log(person);  Imported from person.js (diff file) using node
console.log(person.name)  */

/* const Person = require("./person");
const person1 = new Person('John Doe', 30);
person1.greeting();  //Run it in console now and boom, you get the function's string
 */


_____________________________________________ 
//CORE MODULES
   //(check path_demo.js)


//LOGGER DEMO

/* const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World!'); */


// SERVER 

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
/*     if (req.url === "/") {  //can also do //about to load about page
    fs.readFile(
      path.join(__dirname, "public", "index.html"),  //about.html 
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

    if (req.url === "/api/users") {
        const users = [
          { name: "Bob Smith", age: 40 },
          { name: "John Doe", age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } */

// Build file path
    let filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );

    console.log(filePath);
    res.end();

// Extension of file
    let extname = path.extnamen(filePath);

// Initial Content Type
    let contentType = 'text/html';

// Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) 
                => {
                    res.writeHead(200, { "Content-Type": "text/html" });      
                    res.end(content, 'utf8');  
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, 'utf8');  
        }
    });
});


  /* res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Homepage</h1>');  If you reload, doesn't change--have to manually restart server
        Nodemon will continually watch this and update server w/ reload */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



