console.log("sabari nathan started nodeJS");

import { createInterface } from 'readline';
const r=createInterface({
    input:process.stdin,
    output:process.stdout
});
r.question("enter name :", (name)=>{
    console.log(name);
    r.close();
})
