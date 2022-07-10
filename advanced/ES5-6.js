// let + const
//
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

//Difference between let and var
// VAR: when using var declaration
// if you declare again inside a function, the new var will
// have a child scope, only inside the function, so you lose access
// to the root scope
//
// if you dont declare again that variable name, you can Access
// the root scope.
//
// This only has effects inside functions, not into if-conditions
// or another syntax

var myvariable = 0;

console.log("my var before if", myvariable);
if (true) {
  var myvariable = 12;
  console.log("my var inside if", myvariable);
}

console.log("my var outside if, after if execution", myvariable);

// Use const if you're not going to change
// Use let for variables
//
// CONST OBJECTS
// For an object I cant re-assign the variable but I do can change the
//property
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};
