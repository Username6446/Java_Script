// document.write("<h2>Hello World!</h2>");


const tableBody = document.getElementById("table-body");
const createBtn = document.getElementById("createBtn");
const deleteBtn = document.getElementById("delete-btn");

let products = [];
tableBody.innerHTML = "";

deleteBtn.onclick = () => {
    products = [];
    tableBody.innerHTML = "";
}
createBtn.onclick = () => {
    console.log("On click JS");
    const newProduct = getProductFromForm();
    if (!newProduct.name || !newProduct.description || !newProduct.price) {
        alert("Error!");
        return;
    }
    
    products.push(newProduct);
    addProductToTable(newProduct);
}

function addProductToTable(product) {
    tableBody.innerHTML += `<tr class="table-dark">
                    <th scope="row">${product.id}</th>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price} grn</td>
                </tr>`
}


function getProductFromForm() {
    const nameInput = document.getElementById("nameProductInput");
    const descInput = document.getElementById("descInput");
    const priceInput = document.getElementById("priceInput");
    return {
        id: products.length + 1,
        name: nameInput.value,
        description: descInput.value,
        price: +priceInput.value
    };
}

const themeBtn = document.getElementById("theme-btn");
const nav = document.getElementById("nav");
themeBtn.onclick = () => {
    console.log("Theme button was clicked!");
    if (themeBtn.innerHTML === "Primary Theme") {
        themeBtn.innerHTML = "Light Theme";
        
        nav.classList.remove("bg-primary");
        nav.classList.add("bg-light");
        
        nav.setAttribute("data-bs-theme", "light");
        
    } else {
        themeBtn.innerHTML = "Primary Theme";
        
        nav.classList.remove("bg-light");
        nav.classList.add("bg-primary");
        
        nav.setAttribute("data-bs-theme", "dark");
    }
}