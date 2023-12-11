// recursion 1 to 10

function fun(n){
    if(n<=20){
        console.log(n);
        fun(n+1)
    }

}

fun(1);
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

function fact(n){
    if(n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}

console.log('\nThis is factorial no:' +fact(5));