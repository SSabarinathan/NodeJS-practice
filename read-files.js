//2.reading and writing to a file
//in order to read and write files we need to import file system module(fs)
//when we use js on browser we cant read and write file, but when we use JS in nodeJS , nodeJS provide us a API to read and write files.
//to read the file in sync manner we use readFileSync().
//this readFileSync read the file in sync manner
//if the file that store the output is not there also , NodeJS created the file and add the values



// const readline=require('readline');
const fs=require('fs');

let text=fs.readFileSync('./files/input.txt', 'utf-8');
console.log(text);

//to write a file
let content=`here the new data  Data read from the input text :${text}. Date is  ${new Date()}`
fs.writeFileSync('./files/output.txt', content);
console.log(content);




