import { readFile } from "fs";

console.log("Program has started ");

readFile("./files/input.txt", () => {
  console.log("File read completed");

  setTimeout(() => {
    console.log("Timeout callback executed");
  }, 0);

  setImmediate(() => {
    console.log("Immediate callback executed");
  });

  process.nextTick(()=>{
    console.log("Next tick process got executed!!");
  })

});

console.log("Program has ended");
