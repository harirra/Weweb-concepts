// script.js

console.log("Welcome, Hari!");

function greetUser(name) {
  console.log("Hello " + name + "! 👋");
}

let userName = "Hari";
greetUser(userName);

function changeText() {
  let heading = document.getElementById("welcome");
  heading.textContent = "You clicked the button! 🎉";
}
