let a = 10;
let b = [1, 2, 3, 4];
console.log(b);
console.log(a);

// 3 types we can intialize variable
n = 16;
c = 30; // global
var d = 30; //function scope
let e = 50; // block scope
function fun(){
  let a = 5;
  if(a == 5){
    f = 10; //defined for the entire function
    console.log("Inside", f);
  }
  console.log("Outside", f);
}
fun();
console.log(f);
function square_root(n){
  return Math.sqrt(n);
}
console.log(square_root(n));
// function hoisting
var sqrt_n = function(){ //function expression
  console.log("in second sqrt fn");
  return;
}
let arr = ['Apple', 'mango', 'guava'];
console.log(arr);
for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);
}
