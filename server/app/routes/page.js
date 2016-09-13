const Page = require('../models/page');
const page = new Page();


module.exports = function (app) {
    app.get('/pages', (req, res, next)=> {
        if (!!req.headers['x-requested-with']) {
            Page.find({})
                .then(
                    data=>{res.end(JSON.stringify(data))},
                    err=>{
                        console.log(err);
                        res.end(err)
                    }
                )
        } else {
            next()
        }
    });
};