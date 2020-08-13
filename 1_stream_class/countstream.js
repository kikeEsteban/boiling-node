var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;

util.inherits(CountStream, Writable);

function CountStream(matchText, options) {
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
}

CountStream.prototype._write = function(chunk, encoding, cb) {
    var matches = chunk.toString().match(this.matcher);
    if (matches) {
    this.count += matches.length;
    }
    cb();
};

// Streams inherits from EventEmitter so they can communicate with
// objects using "emit-on" pattern

CountStream.prototype.end = function(){
    process.nextTick(() => {
        this.emit('total', this.count);
    });
}