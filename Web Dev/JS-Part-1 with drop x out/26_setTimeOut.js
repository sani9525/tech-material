// setTimeOut is used to set the certain time and will give output after set timeout

setTimeout(()=>{
    console.log("synchronous");


},5000) // its take time in milli-second, 1000milli-second means 1 second and 4000 millisecond means 4 second.

console.log("This");



function fun(){
    console.log("Asynchronous");
}


setTimeout(fun,6000); // set time out in function


console.log("is")

