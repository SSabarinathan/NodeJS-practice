import { createServer } from 'http';

//create a server object:
createServer(function (request, respond) {

  respond.write('Sabari server works!');
  respond.end();
}).listen(8080);
console.log("loading on 'localhost:8080'");

