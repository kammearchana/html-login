var name="Jhon";
let age=30;
const city="New York";
console.log(name,age,city);
if(age>18){
    console.log(name+"is an adult.");
}else{
    console.log(name+"is a minor.");
}
for(let i=0;i<5;i++){
    console.log("Count:"+i);
}
function greet(){
    console.log("Hello,"+name+"from"+city+"!")
}
greet();
function hello(user){
    console.log(`Hello,${user}!`);
}
hello("Alice");
const add=(a,b)=>a+b;
console.log("Sum:",add(5,10))