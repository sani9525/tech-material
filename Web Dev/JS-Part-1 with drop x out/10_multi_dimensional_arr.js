let arr=[ // in 2D array we can store as key and value. these kind of data.
    ["John",30],
    ["Thomas",28],
    ["Robert",22]
]

console.log(arr)
console.log(arr[1][0]) // printing a particular values
console.log(arr[2][1])

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }

}