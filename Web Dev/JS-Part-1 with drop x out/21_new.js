
function fun(){
    let fname="boys";
        this.fname=fname;
}

var obj =new fun(); // this new keyword create a new object.

console.log(obj.fname);