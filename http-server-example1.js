let http = require('http');

//create a server object:
http.createServer(function (req, res) {

  res.write('Sabari server works!');
  res.end();
}).listen(8080);
console.log("loading on 'localhost:8080'");

