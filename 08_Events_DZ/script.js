function generateRandomNumber()
{
    const randomNumber = document.getElementById("randomNumber");
    randomNumber.innerText = Math.floor(Math.random() * 101);
}

document.addEventListener("mousemove", (event) => {
    const coordinates = document.getElementById("coordinates");
    coordinates.innerText = `X = ${event.x}, Y = ${event.y}`;
});

function HideShow(elementId) {
    const element = document.getElementById(elementId);
    
    if (!element) return;
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function deleteCard(event) {
    const button = event.target;
    const headerContainer = button.parentElement;
    const textElement = headerContainer.querySelector('h1');
    const textContent = textElement.textContent;
    const cardToDelete = headerContainer.closest('.card');

    if (cardToDelete) {
        cardToDelete.remove();
    }
}



const main = document.getElementById("main");
const btn = document.getElementById("btn");

function HideShowModal(show) {
    const element = document.getElementById("modal");

    if (!element) return;

    if (show) {
        element.style.display = "block";
        main.style.filter = "blur(5px)";
        btn.disabled = true;
    } else {
        element.style.display = "none";
        main.style.filter = "none";
        btn.disabled = false;
    }
}

    
let currentState = "off";
function setCol(div,color)
{
    div.style.backgroundColor = color;
}
function Trafficlights ()
{
    
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    if (currentState === "off") {
        setCol(red, "red");
        currentState = "red";
        console.log("Увімкнули червоний");
    } 
    else if (currentState === "red") {
        setCol(red, "grey");    
        setCol(yellow, "yellow");
        currentState = "yellow";
        console.log("Увімкнули жовтий");
    } 
    else if (currentState === "yellow") {
        setCol(yellow, "grey");
        setCol(green, "green");
        currentState = "green";
        console.log("Увімкнули зелений");
    } 
    else if (currentState === "green") {
        setCol(red, "red");
        setCol(green, "grey");
        currentState = "red";
        console.log("Увімкнули червоний");
    }

}

let currentPercent = 0;

    function addPercent() {
        const bar = document.getElementById("ProgressBar");
        if (currentPercent < 100) {
            currentPercent += 5;
            if (currentPercent > 100) currentPercent = 100;
            bar.style.width = currentPercent + "%";
        }else{
            currentPercent = 0;
            bar.style.width = currentPercent + "%";
        }
    }