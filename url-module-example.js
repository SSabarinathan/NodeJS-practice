const url = require('url');


const myUrl = new url.URL('https://username:SabariPassword@www.example.com:8080/path/to/page?query=queryString#fragment');


console.log(`Hash value is :${myUrl.hash}`);
console.log(`Host is : ${myUrl.host}`);
console.log(`Host name is : ${myUrl.hostname}`);
console.log(`Hypertext reference is (href) : ${myUrl.href}`);
console.log(`Pathname is  :${myUrl.pathname}`);
console.log(`Origin is : ${myUrl.origin}`);
console.log(`Port number is : ${myUrl.port}`);
console.log(`Starting protocols is : ${myUrl.protocol}`);
console.log(`Username is : ${myUrl.username}`);
console.log(`Password is : ${myUrl.password}`);
console.log(`JSON format of the link is : ${JSON.stringify(myUrl.toJSON())}`);

console.log(myUrl.searchParams.get('query'));
