//The curly braces {} around Buffer indicate that only the Buffer class is being imported
//from the buffer module. This syntax is called object destructuring,
//and it allows you to extract specific properties or methods from an object and assign them to variables.


//1. Buffer.alloc
import { Buffer } from 'buffer';

const buffer1=Buffer.alloc(5)
console.log(buffer1);
const buffer2=Buffer.alloc(5,9)
console.log(buffer2);

const buffer_alloc=Buffer.alloc(10, 0b10101010, 'binary')
console.log("To character: ",buffer_alloc);

//2.Buffer.allocUnsafe

const bufferUnsafe=Buffer.allocUnsafe(10);
console.log(bufferUnsafe);

//3.Buffer.allocUnsafeSlow
const bufferUnsafeslow=Buffer.allocUnsafeSlow(20);
console.log(bufferUnsafeslow);

//4.
const letter= Buffer.from('aaba')
console.log(letter.toJSON());

//5.Static method: Buffer.from(string[, encoding])

const encoding_answer= Buffer.from('The text page');
const encoding_answer1=Buffer.from('7468697320697320612074c3a97374', 'hex')

console.log(encoding_answer.toString());
console.log(encoding_answer1.toString('latin1'));

//6. Buffer.concat(list[, totalLength])

const first_value=Buffer.alloc(3);
const second_value=Buffer.alloc(5);
const third_value=Buffer.alloc(2);

const total_length=first_value.length + second_value.length + third_value.length;
console.log(total_length);


const concat_values=Buffer.concat([first_value, second_value, third_value], total_length)
console.log(concat_values.length);

//
const buf1 = Buffer.from('Hello, ');
const buf2 = Buffer.from('world!');
const buf3 = Buffer.from(' How are you?');
const buf4 = Buffer.concat([buf1, buf2, buf3]);

console.log(buf4.toString());

//7. Buffer.byteLength(string[, encoding])

const byte_length = "Sabari";
const byte_value_is=Buffer.byteLength(byte_length );

console.log("Length is ",byte_value_is);


//8.buf.toString([encoding[, start[, end]]])

const required_value= Buffer.from('There are 100 words');
const required_result= required_value.toString('utf-8', 1, 11)
console.log('Result after we separate : ',required_result);


// //9.buf.write(string[, offset[, length[, encoding]]])


// const write_text=Buffer.alloc(10);
// const write_result=write_text.write('Sabari',3,10,'utf-8')

// console.log("Written text is :", write_result);
// console.log(write_text.toString('utf-8'));


































//
