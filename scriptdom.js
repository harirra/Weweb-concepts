// 1. Select the h1 element
const heading = document.querySelector('#greeting');

// 2. Select the button
const button = document.querySelector('#changeText');

// 3. When button is clicked, change h1 text
button.addEventListener('click', () => {
  heading.innerText = "You clicked the button!";
});
