// Learning about scope
// Root scope is 5
var fun = 5;
function funFunction() {
  // Here we are declaring ANOTHER fun variable, so root fun still equals 5
  var fun = "hellooo";
  // But child scope fun is 'hellooo'
  console.log(1, fun);
}

function funerFunction() {
  // Here child scope fun is 5, but root scope still five
  var fun = "Byeee";
  console.log(2, fun);
}

function funestFunction() {
  // Here we are NOT declaring a new variable, so JS knows that
  // we are referring to the root scope
  fun = "AAAAHHHHHH";
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
console.log("root", fun);
funerFunction();
console.log("root", fun);
funestFunction();
console.log("root", fun);
