// With the call() method, you can write a method that can be used on different objects.
function fun(age,gender){
    console.log(this.fname,age,gender); // here this property is obj1 to access the data from obj1 by using this, instead of this.fname we can also use obj1.fname
}

let obj1={
    fname:"sani_kumar"
}

let obj2={
    fname:"sani kumar sharma"
}

fun.call(obj2,21,"Male");