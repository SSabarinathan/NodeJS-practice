//1.reading input and writing outputs

const readline = require('readline');
const rl=readline.createInterface({

  input:process.stdin,
  output:process.stdout

});
rl.question("Enter your name: " , (name)=>{
    console.log("you entered : " +name);
    rl.close();

})

rl.on('close',()=>{
    console.log("Interface Closed ");
    process.exit(0);

})

