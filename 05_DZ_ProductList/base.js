
const tableBody = document.querySelector(".row");
const addFishBtn = document.getElementById("addFish");
const addAppleBtn = document.getElementById("addApple");
const addEggsBtn = document.getElementById("addEggs");

function addFoodCard(foodName, imagePath) {
    tableBody.insertAdjacentHTML('beforeend', `
        <div class="col-3">
            <div class="card border border-5 rounded-5" style="width: 18rem;">
                <img src="${imagePath}" class="card-img-top mt-4" alt="${foodName}">
                <div class="card-body text-center mx-auto">
                    <h3 class="card-title">${foodName}</h3>
                </div>
            </div>
        </div>
    `);
}

addFishBtn.onclick = () => addFoodCard("Fish", "img/Food_C205-128.png");
addAppleBtn.onclick = () => addFoodCard("Apple", "img/Food_C240-128.png");
addEggsBtn.onclick = () => addFoodCard("Eggs", "img/Food_C203-128.png");