import { config } from "dotenv";

const environment1 = config();

console.log(environment1);
console.log(process.env.PORT_NUMBER);

// const environment1=process.env.PORT_NUMBER ;
// require('dotenv').config();
// console.log(process.env.port_number);
