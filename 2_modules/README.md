# Working with Node.js modules

## Searching modules
```
npm search <module name>
```
There are open modules that inprove functionality, i.e. `npmsearch`
## Installing
```
npm install <module name>
```
To install globally use flag -g (it will be installed in `/usr/local/lib/node_modules`)
## Creating modules
To break up the project in several files, and reuse them, Node has a built in module system based in CommonJS Modules 1.1 spec. 
```js
var myClass = require('./myclass');
var module2 = require('./module-2');

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());

var group = require(./group);
group.one();
group.two();
```
It's common to group modules within folders . A file `package.json` is added in the folder declaring the main file to be required, and the name of the module group.
## Modules and File system
Node.js file system is relative to the project folder. When you need to know the absolute path of the script within the operating system, the global variables `__dirname` and `__filename` can be used. 



