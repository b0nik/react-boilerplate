const router = api.express.Router();
const Page = require('../models/page');
const page = new Page();

router.use('/homepage', (req, res, next)=> {
    if (!!req.headers['x-requested-with']) {
        Page.findOne({link: 'index'})
            .then(
                (data)=> {
                    res.end(JSON.stringify(data))
                }
            )
    } else {
        next()
    }
});

module.exports = router;