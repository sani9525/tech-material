// Constructor functions technically are regular functions.
// there are two conventions though:

// they are named with Capital latter first.
// they should be executed only with new operator.



function user(name,age){

    this.name=name;
    this.age=age;
}

let person=new user("Boys",22);


console.log(person);