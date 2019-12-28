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
