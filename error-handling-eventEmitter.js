import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', (error) => {
  console.error('Error occurred: ', error);
});

function divide(a, b) {
  if (b === 0) {
    myEmitter.emit('error', ('Cannot divide by zero'));
  } else {
    console.log('Result is ');
    return a / b;
  }
}

console.log(divide(10, 5));
console.log(divide(10, 0));
