// If a variable's object has a behavior (multiple methods) we use constructor

/* Instead of:

const circle ={
  radius: 1,
  location:{
    x: 1,
    y:1,
  }
}

*/

function CreateCircle(){
  return {
    radius: 1,
    location:{
      x: 1,
      y:1,
}}}
