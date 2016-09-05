#!/usr/bin/env node

/**
 * Module dependencies.
 */
global.api = {};
api.config=require('./app/config/config.json');
const app = require('./app/app');
const debug = require('debug')('node:server');
const http = require('http');

/**
 * Listen on provided port, on all network interfaces.
 */

const port = api.config.port;

app.listen(port, console.log(`started at localhost:${port}`));
app.on('error', onError);
app.on('listening', onListening);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
