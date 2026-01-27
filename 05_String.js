let s = new String("This is Tejas");
let rev =""
for(let i = s.length -1 ; i>=0; i--){
    rev += s.charAt(i);
}
console.log(rev);
console.log(`Length of Striing is : ${s.length}`);
