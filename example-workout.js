console.log("sabari nathan started nodeJS");

const rl=require('readline');
const r=rl.createInterface({
    input:process.stdin,
    output:process.stdout
});
r.question("enter name :", (name)=>{
    console.log(name);
    r.close();
})
