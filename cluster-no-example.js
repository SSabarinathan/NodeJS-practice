import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end('No Cluster- Home Page')
    }
    else if (req.url ==='/slow-page'){
      for(let i=0; i<6000000000; i++){}
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end('No Cluster- Slow Page');
    }

  });

  server.listen(8080, ()=>console.log('Server is running on port 8080'))
