// when the function have inside function and variable declare at fun1 but its accessable at fun2 its called Lexival scope.
// if the same variable is declare at fun2 the fun1 variable is ignore and fun2 will be consider.
// the values globally declare is accesble to all inside function.
// firstly fun2 will be find value in their function.
function fun(){
    var a=5;
    console.log("This is Function: "+a);

      function fun2(){
        var a=2;
    console.log("This is function: "+a);
    }
    fun2();

}


fun();
