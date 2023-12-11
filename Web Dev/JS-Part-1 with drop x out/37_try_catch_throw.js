// if something error is coming on, so we can show the message for that using try chat throw, like we are fetching api and coming error so we can using to display some error message by tying our own message.
function d(a,b){
    try{
        if(b==0){
            throw new Error("can't divide by 0")
        }else{
            return a/b;
        }
    }
    catch(err){
        console.log(err.message)
    }
}

console.log(d(10,0))