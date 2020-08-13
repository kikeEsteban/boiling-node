# Delaying execution with timers

- To delay: `setTimeout(cb,delayMilisecs)`
- To repeate: `setInterval(cb,delayMilisecs)`
- To stop repetition: `clearInterval(timerRef)`
- To delay until next event loop iteration: `process.nextTick(cb)`. Usually run at the end of the eventloop.
- To run an event after I/O Events but before Timming callbacks: `setImmediate(cb)`. To remove: `clearImmediate(cb)`
- Other keypoints:
```
Use of Prototype with bind to keep track of 'this' reference
```