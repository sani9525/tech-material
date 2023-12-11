// map is used to store key and values , we can print it by map_name.get(key_name);
// we can set map value in new map which is mapped below !


var map1=new Map([
    [1,"one"],
    ["fname","sani"],
    ["whole number",[1,2,3,4,5,6]]
])
console.log(map1.get("whole number"));
console.log(map1);

var map2=new Map();

map2.set("fname","Mouse")
console.log(map2);

var k=map1.keys();

for(var key of k){
    console.log(key);

}