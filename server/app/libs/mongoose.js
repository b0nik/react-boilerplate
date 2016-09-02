var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chat');

var Schema = mongoose.Schema,
    test=new Schema({
        name: { type: String, default: 'hahaha' },
        age: { type: Number, min: 18, index: true, default:24 }
    });

var MyModel = mongoose.model('test', test);
var instance = new MyModel({name:'bogdan',age:24});
instance.save(function (err) {
    console.log(err);
});