# Process module
Very useful to use system and program call and life cycle

## Reading and writing to standard I/O

Use of process.stdin and process.stdout streams. Run the example like this: `cat file.txt | node stdio.js`

## Branching based in architecture

```js
switch (process.arch) {
    case 'x64':
        require('./lib.x64.node');
        break;
    case 'ia32':
        require('./lib.Win32.node');
        break;
    default:
        throw new Error('Unsupported process.arch:', process.arch);
}
```

## Parsing arguments

`process.argv` is a javascript array. For example call `node arguments.js ./README.md`


## Listening to System signals
`process` is a system signal even emitter:
```js
process.stdin.resume();
process.on('SIGHUP', function () {
    console.log('Reloading configuration...');
}
console.log('PID:', process.pid);
```