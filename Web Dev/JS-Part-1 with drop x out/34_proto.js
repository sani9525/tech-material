let obj={
    fName:"john"
}

let obj2={
    lName:"Smith"
}

obj2.__proto__=obj; // a _proto_ is a kind of object which show the reference.

console.log(obj2.fName);

/*
prototype is a one type of object that
show the and create a reference of one object
to another object.
 */

var obj5={
    fName:"sani"
}

obj6=Object.create(obj5); // its create a empty object obj6 and also obj5 gives his reference to obj6
obj6.lName="Kumar"; // inserting values in obj6

console.log(obj6.fName);