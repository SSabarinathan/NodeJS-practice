const function1= function ()
 {
    x=5;
    y=10;
    const result=x+y;
    console.log(result);
    console.log("This is the function exported form this module to another module using export ");
 }

const function2= function()
{
    console.log("This is the second function exported form this module to another module using export ");
}

// module.exports.first= function1;
// module.exports.second=function2;

//or use this another method
module.exports={function1, function2}
