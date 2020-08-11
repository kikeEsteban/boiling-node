var CountStream = require('./countstream');
var countStream = new CountStream('book');
var https = require('https');

// get function returns an stream. To process it we pipe our custom stream
https.get('https://www.manning.com', function(res) {
    // Process stream with pipe
    res.pipe(countStream);
});

// emited event 'total' by Countstream
countStream.on('total', function(count) {
    console.log('Total matches:', count);
});