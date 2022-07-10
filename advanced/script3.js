// Descructuring

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
const naming = "john snow";

// dynamic object properties

const obj2 = {
  [naming]: "hello",
  [1 + 3]: "kitty",
};

const a = "Simon";
const b = "true";
const c = "{}";

const obj3 = {
  a,
  b,
  c,
};

// Template strings
const name2 = "sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name2} you seem to be ${
  age - 10
}. What a lovely ${pet} you have`;
console.log(greetingBest);

// default arguments

function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${
    age - 10
  }. What a lovely ${pet} you have!`;
}

// Arrow functions

function sum(a, b) {
  return a + b;
}

const add = (a, b) => a + b;
const subtract = (a, b) => {
  return a - b;
};
