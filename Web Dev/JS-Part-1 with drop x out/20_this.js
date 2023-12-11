// this property is used to print the in function values which valued is accessed from object.

var obj={
    fname:"sani",
    age:22,
    fun:function(){
        console.log(this.age); // instead of this we can also use obj
        console.log(this.fname)
        }
}
obj.fun();
console.log(this)