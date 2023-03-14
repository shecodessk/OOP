// Procedural method
let a = 'Stephany';
let b = 'knows coding'

function Code (){
  return a + " " + b
}
console.log(Code())



//Encapsulation method in OOP

let objVar = {
  a: 'Stephany', //a  is a property as it is used to hold values.
  b: 'knows coding',
  code: function(){ // code is a method is used to defined logic.
  return this.a + " " + this.b}
  
  }
  console.log(objVar.code())
