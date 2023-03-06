console.log('It will executed 1st ');

setTimeout(()=>{
  console.log('Timeout function executes at last ');
}, 1000)

setImmediate(()=>{
  console.log('Immediate will execute immediate after the any tick functions');
})

process.nextTick(()=>{
  console.log('Next tick will execute right after any log or simple statements.');
})


//
