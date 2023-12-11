// The setInterval() function is used to execute a function repeatedly at a specified interval time(delay)
// The clearInterval() method clears a timer set with the setInterval() method.
// The clearTimeout() function in javascript clears the timeout which has been set by the setTimeout()function before that.
// clearInterval is used to stop the setInterval function after the setted time interval.
let num=0;

var inter=setInterval(fun,2000)

function fun(){
    num=num+1;
    console.log(num);
}

setTimeout(()=>{
    clearInterval(inter);
},10000)