//try and catch block for sync code

import fs from 'fs';

try{
  const data = fs.readFileSync('./files/exampleData.txts');
  console.log(data);
}
catch{
  console.log('Error is handling now  by using try and catch');

}

console.log('It is the following statement that continues the program!');
//
