const http=require('http');
const htmlPage=require('fs');

const html=htmlPage.readFileSync('./files/server-example.html')

const server=http.createServer((request, respond)=>{
  respond.write('<h1>New Server created </h1>');
  respond.write(html);
  respond.end('Hello from the server. Created by sabarinathan');
  console.log('A new request received');

});

server.listen(8000, '127.0.0.1', ()=>{
  console.log('Server has started! In the localhost 8000');
})

//127.0.0.1:8000 --another way to view your page by IP.