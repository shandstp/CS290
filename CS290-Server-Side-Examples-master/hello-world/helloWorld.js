var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
}).listen(7170);

console.log('Server started on localhost:7170; press Ctrl-C to terminate....');
