// one function is calling to the another function as an argument is called callback function.

function fun(val){
    console.log(val); // 4. then its print the sum values in output;
}

function add(a,b,callback){ // 2. fun function called in callback argument and callback argument is now fun function
    let sum=a+b;
    callback(sum); // 3. then in callback, we called fun with values
}

add(5,10,fun) // 1. we have called function add and in add function we also called fun function