import { createHook } from 'async_hooks';

const asyncHooks= createHook(init(), before())({
  init(){
    console.log('sdv');

  },

  before(){
    console.log('sd');

  },

  after(asyncID){
    console.log(`After async IS is : ${asyncID}`);
  },

  destroy(asyncID){
    console.log(`The async resource is destroyed with the ID of : ${asyncID}`);
  }
});

  function init(asyncId, type, triggeredId){
    console.log(`Init async ID is :${asyncId} and the type is :${type} , triggeredID is ${triggeredId} `);
  };
 function  before(asyncID){
    console.log(`Before async ID is : ${asyncID}`);
  };

function demo(){
  console.log('Inside the demo function.');
}
demo();
// asyncHooks.disable();
asyncHooks.enable();

