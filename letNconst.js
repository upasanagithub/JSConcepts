//let declares a block scope local variable

let x = 9;
if(true){
  let x = 10;
  console.log("x->"+x);//pirnts 10
}

console.log("x->"+x); //prints 9

var t = 11;
if(true){
  var t = 12;
  console.log("t->"+t); //prints 12
}
console.log("t->"+t); //prints 12


//constants are block-scoped much like let variables, can't be redeclared or changed


const y = 88;

try{
  y = 12;
}
catch(err){
  console.log("err->"+err);
}
console.log("y->"+y);
