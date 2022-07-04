var database = [
  {
    username: "yazmin",
    password: "supersecret",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "777",
  },
];

var newsFeed = [
  { username: "Bobby", timeline: "Ya soy papa" },
  { username: "Hanbin", timeline: "You are my cosmos" },
  { username: "June", timeline: "kuchau" },
];

function signIn(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      console.log(newsFeed);
      return true;
    }
  }
  alert("Sorry, wrong username and password");
  return false;
}

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);

//function declaration
function newFunction() {}

// function expression
var newFunction = function () {};

// expression
// 1+3;
var a = 2;

//calling or invoking a function
// a methos is something that is is inside an object
//
// var obj = {
// obj.thisIsAMethod()}
