async function fetchDogBreeds()
{
    try {
        const url = "https://dog.ceo/api/breeds/list/all";
        const response = await fetch(url);
        const data = await response.json();
        const breeds = Object.keys(data.message);
        console.log(breeds);
        const breedList = document.getElementById("breed-list");
        breedList.innerHTML = "";
        for (const breed of breeds) {
            breedList.innerHTML += `<li>${breed}</li>`;
        }
    }catch (error) {
        console.error("Помилка при отриманні порід собак:", error);
    }
    
}



async function getNewDogImage()
{
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();

    const dogImg = document.getElementById("dogImg");
    dogImg.src = data.message;
}

fetchDogBreeds();