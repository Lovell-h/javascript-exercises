// my solution
const reverseString = function(input) 
{
    let output="";
    let len =input.length
    for (let i=len;i>-1;i--){
         output = output + input.charAt(i);
        }
    return output;
};

 // Their much simpler solution :-) 
/*const reverseString=function(input)
{
    return input.split("").reverse().join("");
}*/

// Do not edit below this line
module.exports = reverseString;
