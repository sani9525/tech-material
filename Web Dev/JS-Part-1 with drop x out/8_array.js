let name=["John","jane","Cena",true,null,23,'a']

console.log(name[2]);
console.log(name);
console.log(typeof name);
name.push(34); // it insert the value in array at the last index
console.log(name);
name.unshift(3); // it insert the values at the first index
console.log(name);
name.splice(1,3); // this splice property is used to delete the data in array by putting from index to till index

console.log(name);

let num=[3,4,6,788,9,9,5,4,43,3];

for(let i=0; i<=num.length; i++){
    console.log(num[i]);
}

console.log(num.reverse());
let a=num.slice(1,4); // this slice is store value from index to till index
console.log(a);
console.log(num.sort());

name.filter((val,ind,arr)=>{
    if(val>=10 && val<=25){
        return val;
    }
})

console.log(num);
console.log(num.toString()); // used to convert in string form
console.log(typeof num.toString());
