'use strict';

var server = require('./app');

var port = process.env.PORT || 8080;

server.listen(port);

console.log('App listening on port ' + port);
