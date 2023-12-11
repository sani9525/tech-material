// Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.
// Await function is used to wait for the promise. It could be used within the async block only
function ex(){
    await loadingData();
    await collectingData();

}