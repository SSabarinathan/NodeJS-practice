const querystring=require('querystring');

const answer=querystring.parse('name= sabari & company= aspire & area= chennai& mumbai');
const answer1=querystring.stringify({name:'sabari' , company: 'aspire'});
const user='name=sabari & age=22 & work=development';
const user1={
  name:'sabarinathan',
  age: 21,
  role:['web,development']
}
console.log(answer);
console.log(answer1);
const decode_value=querystring.decode(user);
console.log(decode_value);
const encode_value=querystring.encode(user1);
console.log(encode_value);
