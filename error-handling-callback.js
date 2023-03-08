//Call back is used for async code for error handling
import fs from 'fs';

fs.readFile('./files/exampleData.txtr',(errorHandling, result)=>{
  if(errorHandling){
    console.log('Error caught on if statement by call back function');
  }
  console.log(result);
  
  if(result===undefined){
    console.log('error statement are need to clear');

  }

});


//
