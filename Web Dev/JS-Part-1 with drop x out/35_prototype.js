function Person(name,age){ // when we take a first latter of function is capital so we making maximum constructor
  let person=Object.create(obj);
  person.name=name;
  person.age=age;

  return person;
}

var obj ={
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

let user=Person("sani Kumar",22);
user.greet();
console.log(user);