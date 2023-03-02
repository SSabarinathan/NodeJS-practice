import { promises } from 'fs';

// Define an asynchronous function
async function readFileAsync() {
  try {
    const data = await promises.readFile('./files/another-async.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log('error..no path is found');
  }
}

// Call the asynchronous function
readFileAsync();
console.log('Program continues to execute.');































