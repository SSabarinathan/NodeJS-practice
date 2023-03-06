// import {async_hooks} from 'async_hooks';
import { createHook } from 'async_hooks';

const asyncHooks= createHook({
  init(asyncId, type, triggeredId){
    console.log(`Init async ID is :${asyncId} and the type is :${type} , triggeredID is ${triggeredId} `);
  },

  before(asyncID){
    console.log(`Before async ID is : ${asyncID}`);
  },

  after(asyncID){
    console.log(`After async IS is : ${asyncID}`);
  },

  destroy(asyncID){
    console.log(`The async resource is destroyed with the ID of : ${asyncID}`);
  }
});

function demo(){
  console.log('Inside the demo function.');
}
function doAsyncWork() {
  setTimeout(() => console.log('Async work done!'), 1000);
}

demo();
doAsyncWork();
asyncHooks.enable();
// asyncHooks.disable();






























































/////////////
