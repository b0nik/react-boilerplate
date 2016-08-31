var nconf=require('nconf');
nconf.env().argv();
//
nconf.file({file:api.path.join(__dirname,'config.json')});
module.exports=nconf;
