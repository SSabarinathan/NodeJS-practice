//1.EOL -The operating system-specific end-of-line marker.
const os=require('os');
const text= 'Hi' + os.EOL + 'Node Js';
console.log(text);


//2. os.availableParallelism() -Returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero.
//5. os.cpus()-Returns an array of objects containing information about each logical CPU core.
console.log(`The length is: ${os.cpus().length}`);

//3. os.arch() -This code will output the processor architecture of the current system.

console.log(`Processor Architecture is : ${os.arch}`);

//4. os.constants - is a module in Node.js that provides a collection of constants representing various operating system-specific values, such as error codes, signals, and priority levels.
console.log(os.constants);

//6. os.devNull- The platform-specific file path of the null device.
// console.log('This will be printed');
// console.log('This will be discarded');
// console.log = function() {
//   process.stdout.write(os.devNull);
// };
// console.log('This will also be discarded');

//7. os.endianness()- Endianness refers to the byte ordering used to store data in computer memory.

const endianness = os.endianness();
console.log(`The endianness of this machine is ${endianness}.`);
console.log('The value returned by os.endianness() will either be "LE" (little-endian) or "BE" (big-endian), indicating the byte order used by the    system.');


//8. os.freemem() is a method in the Node.js os module that returns the amount of free system memory in bytes as an integer
const freeMemory = os.freemem();
console.log('Free Memory in system is :' , freeMemory);


//9.  os.getPriority([pid]) is a method in the Node.js os module that is used to retrieve the priority of a process.
const result=os.getPriority()
console.log(result);


//10 . In Node.js, os.homedir() is a method of the os module that returns the home directory of the current user as a string. The home directory is the default directory for the user when they log into the operating system.
console.log('Home directory is : ',os.homedir());


//11. os.hostname()- returns the host name of the operating system
console.log('Host name is : ',os.hostname());

//12. os.loadavg() -Returns an array containing the 1, 5, and 15 minute load averages.The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
console.log('Load Average of system is : ', os.loadavg());


//13.os.machine() - Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.
console.log('Machine type is : ', os.machine());

//14. os.networkInterfaces() - is a method in Node.js that returns an object containing information about the network interfaces on the current machine.
console.log('Network Interface for the current machine is  :' , os.networkInterfaces());

//15. os.platform() Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log('Your platform name is : ',os.platform());


//16. os.release() - is a method in Node.js that is used to retrieve the operating system release information of the computer on which Node.js is currently running.
console.log('Information of the computer on which Node.js is currently running on : ',os.release());


//17 . os.setPriority() is a method in Node.js that allows you to set the scheduling priority of a process


//18. os.tmpdir() - Returns the operating system's default directory for temporary files as a string.
console.log('default directory for temporary file name is : ', os.tmpdir());

//19. os.totalmem()-Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

