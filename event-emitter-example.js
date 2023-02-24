//here the startEvent and start are the event we created
const EventEmitter=require('events');

const eventEmitter=new EventEmitter();
eventEmitter.on('startEvent',()=>{
    console.log('Event emitter started');
})

eventEmitter.on('startEvent',()=>{
    console.log('It is the another event but created having same name as event and that also executed.');
})


const anotherEvent=new EventEmitter();
anotherEvent.on('start',(name,number)=>{
    console.log('Your name is ',name, ' and your number is ', number );
})

//function calling part
eventEmitter.emit('startEvent');
anotherEvent.emit('start',"Sabari", 9);
