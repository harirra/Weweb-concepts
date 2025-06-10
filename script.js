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

async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();

    console.log("Fetched User:", user);

    const userDiv = document.getElementById("userInfo");
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>City: ${user.address.city}</p>
    `;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

