# Logging with Node.js
## Log messages
Different levels of log messages:
```
console.log -> stdout
console.info -> stdout
console.error -> stderr
console.warn -> stderr
```

Admits several arguments, with placeholders for formatting:
- `%s` : String
- `%d` : Number
- `%j` : JSON

To save logs in a file, call node like this:
```
node <program file> 1> log-file.log
node <program file> 2> errors-file.log
```
## Stack trace
To output an stacktrace at a point in the program write `console.trace()`
## Benchmark
Use `console.time('label')` in combination with `console.timeEnd('label')`. Run:
```
node benchmark.js -r README.md 
```
