console.log("LetsUpgrade JS Assignment : Day6 - Question 3");

// get name from user and display a welcome message
const welcome = document.getElementById('welcome');
const name = prompt("Enter your name","Anonymous");
welcome.innerText += `Welcome ${name}!`;

const button = document.getElementById('dark');

function toggleDark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

const ctime = document.getElementById('clock');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

