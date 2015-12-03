var morgan = require('morgan');

var server = require('./app');

var cluster = require('cluster');

var port = process.env.PORT || 8080;
var workers = require('os').cpus().length;

server.use(morgan('dev', {immediate: true}));

if (cluster.isMaster) {
  for (var i = 1; i < workers; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died');
    console.log('Spawining new worker...');
    cluster.fork();
  });
} else {
  server.listen(port);
}

console.log("App listening on port " + port);
