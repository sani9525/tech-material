const arr=[10,20,30,40,50,30];
console.log(arr);

const s= new Set([10,200,30,40,50,30]);
s.add(38)
s.add("hello")
console.log(s);
console.log(s.size);

let len=0;
for(let ele of s){
    len++;
}
console.log(len);

// set is used to store the unique values in javascript and its use 
// add() function to insert any value in set.
// to know the set length we can use setName.size or we have to write a loop till end and count all the element that will be our size of set.
