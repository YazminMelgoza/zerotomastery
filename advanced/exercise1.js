// condition ? expr1 : expr2

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
  "your Account is " + (isUserValid(false) ? "1234" : "not available");

// Switch
//

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}
