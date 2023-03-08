
import { readFile } from 'fs';

readFile('./files/exampleData.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("Error Message");
    }
    console.log(data);
})
console.log("New function and this should not be wait until the another function finished");
console.log("It should executed in Async-manner");
