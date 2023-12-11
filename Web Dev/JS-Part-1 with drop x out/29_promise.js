// A JavaScript Promise object contains both the producing code and calls to the consuming code:

function fun(task){
    return new promise((resolve,reject)=>{
        if(task){
            resolve("completed");
        }else{
            reject("Not completed");
        }
    }
    )
}

let onResolve=(res)=>{
    console.log(res);
}

let onReject=(err)=>{
    console.log(err);
}

fun(true).then(onrResolve).catch(onReject);

Async function ex(){
    await loadingData();
    await collectingData();

}

ex();