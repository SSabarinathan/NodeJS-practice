//1.reading input and writing outputs

import { createInterface } from 'readline';
const rl=createInterface({

  input:process.stdin,
  output:process.stdout

});
rl.question("Enter your name: " , (name)=>{
    console.log(`you entered :${name} , And your name is ${name}` );
    rl.close();

})

rl.on('close',()=>{
    console.log("Interface Closed ");





    
////////////////////////////////////////////////////////
// console.log('My %s has %d ears', 'cat', 2);
// const chalk = require('chalk');

// console.log(chalk.blue('hi!'));
// process.exit(0);

})

