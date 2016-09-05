api.express = require('express');
api.path = require('path');
api.favicon = require('serve-favicon');
api.logger = require('morgan');
api.mongoose = require('./libs/mongoose');
api.cookieParser = require('cookie-parser');
api.bodyParser = require('body-parser');
const router=require('./routes/index');

//development
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConf = require('../../webpack.config');

//main app

var app = api.express();


app.use(api.logger('dev'));
app.use(api.bodyParser.json());
app.use(api.bodyParser.urlencoded({extended: false}));
app.use(api.cookieParser());
app.use(router);

app.use(api.express.static(api.path.join(__dirname, './../../build')));


if (app.get('env') === 'webpack') {
    const compiler = webpack(webpackConf);
    const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConf.output.publicPath,
        stats: {
            colors: true,
            hash: true,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(api.path.join(__dirname, '../../build/index.html')));
        res.end();
    });
} else {
    app.get('*', function response(req, res) {
        res.sendFile(api.path.join(__dirname, './../../build/index.html'));
    });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send("page not found")
});

app.use(function (err, req, res, next) {
    // error handlers

// development error handler
// will print stacktrace
    if (app.get('env') !== 'production') {
        res.status(500).send('file not found');
        console.log(err.stack);

    } else {
        res.status(500).send('file not found');
    }

});


module.exports = app;