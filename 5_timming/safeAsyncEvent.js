var EventEmitter = require('events').EventEmitter;

function complexOperations() {
    var events = new EventEmitter();
    // This make sure that the event is fired after event
    // emitter is registered in the event loop
    process.nextTick(function(){
        events.emit('success');
    });
    return events;
}

complexOperations().on('success', function(){
    console.log('success');
});
