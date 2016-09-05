const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${api.config.db}`);

module.exports=mongoose;