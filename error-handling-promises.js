//It is alternative for the call backs

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Data successfully fetched");
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 1500);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
////////////////////////////////////////////////////////////////////////

//by using util in promise

// import fs from "fs";
// import util from "util";

// const readFile = util.promisify(fs.readFile);

// readFile("./files/exampleData.txt.")
// .then((result1) => {
//   console.log(result1);
// })
// .catch((error1)=>{
//   console.log(error1);
//   console.log('>>>Error handled by using util.promise');
// });

//
