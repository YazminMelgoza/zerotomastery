function sayHello() {
  console.log("hello!");
}

sayHello();
var a = 5;
console.log(a);

// Anonymous function
var sayBye = function () {
  console.log("Bye bye!");
};

// What does arguments do?
var sing = function (song) {
  console.log(song);
};

function multiply(a, b) {
  return a * b;
}
answer = multiply(4, 5);
console.log(answer);

//Keyless car (even better)

function checkDriverAge() {
  return Number(prompt("Give me your Age"));
}

checkDriverAge();
