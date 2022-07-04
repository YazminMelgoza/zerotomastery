var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "est healthy",
];
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}

// forEach :)
todos.forEach(function (todo, i) {
  console.log(todo, i);
});

//
var logTodos = function (todo, i) {
  console.log(todo, i);
};

todos.forEach(logTodos);
