function generateRandomNumber()
{
    const randomNumber = document.getElementById("randomNumber");
    randomNumber.innerText = Math.floor(Math.random() * 101);
}

document.addEventListener("mousemove", (event) => {
    const coordinates = document.getElementById("coordinates");
    coordinates.innerText = `X = ${event.x}, Y = ${event.y}`;
});

function HideShow(event) {
    const text = document.getElementById("text");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
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