let emp={};
emp.name="john";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",
{
    value:21,
    Writable:false,
    configurable:true,
    enumerable:true

})

console.log(emp); 