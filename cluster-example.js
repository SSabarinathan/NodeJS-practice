import cluster from 'cluster';
import http from 'http';

if(cluster.isPrimary){
  console.log(`It is the master Process running in ID : ${process.pid}`);
  cluster.fork();
  cluster.fork();
}
else{
  console.log(`Worker started in the ID : ${process.pid}`);
  const server=http.createServer((req,res)=>{
    if(req.url==='/'){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end('Cluster - Home Page')
    }
    else if (req.url ==='/slow-page'){
      for(let i=0; i<6000000000; i++){}
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end('Cluster - Slow Page');
    }
    });
 server.listen(8000, ()=>console.log('Server is running on port 8000'))
// process.exit();
}




















































































//
