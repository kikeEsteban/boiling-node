function monitor() {
    console.log(process.memoryUsage());
}

var id = setInterval(monitor, 1000);

// This allow to keep the timer alive until the program clean exits
id.unref();

setTimeout(function() {
    console.log('Done!');
}, 5000);


