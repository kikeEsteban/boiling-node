function MyClass() {

}

MyClass.prototype = {
    method:function(){
        return 'Hello';
    }
}

var myClass = new MyClass();

// Objects can be exported, including other objects, methods and properties
module.exports = myClass;


