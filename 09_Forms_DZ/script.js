function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const login = form["login"].value;
    const rememberMe = form["rememberMe"].checked;
    let message = `Привіт, ${login}! `;
    
    if (rememberMe) {
        message += "Я тебе запам'ятав.";
    } else {
        message += "Я тебе не запам'ятав.";
    }

    const resultDiv = document.getElementById("resultMessage");
    resultDiv.innerText = message;
    
    form.reset();
}
function handleMail(event) {
    event.preventDefault();
    const form = event.target;
    const login = form["login-2"].value;
    const email = form["email"].value;
    let message = `На ${email} пошту надіслано лист із підтвердженням`;

    const resultDiv = document.getElementById("resultMessage2");
    resultDiv.innerText = message;
    
    form.reset();
}

function handlePerson(event) {
    event.preventDefault();
    const form = event.target;
    
    const selectedSkills = [];
    if(form["skill-HTML"].checked){
        selectedSkills.push("HTML");
    }
    if(form["skill-CSS"].checked){
        selectedSkills.push("CSS");
    }
    if(form["skill-JS"].checked){
        selectedSkills.push("JS");
    }
    if(form["skill-PHP"].checked){
        selectedSkills.push("PHP");
    }
    if(form["skill-CPP"].checked){
        selectedSkills.push("C++");
    }
    if(form["skill-Java"].checked){
        selectedSkills.push("Java");
    }
    if(form["skill-CSharp"].checked){
        selectedSkills.push("C#");
    }
    const data = {
        firstname: form["firstname"].value,
        lastname: form["lastname"].value,
        birthday: form["birthday"] ? form["birthday"].value : "",
        gender: form["gender"].value,
        country: form["country"].value,
        city: form["city"].value,
        skills: selectedSkills.join(", ")
    }
    
    const table = document.getElementById("profile-table");
    table.style.display = "block";    
    const cells = table.querySelectorAll("[data-key]");
    
    cells.forEach(cell => {
        const key = cell.getAttribute("data-key");
        if (data[key] !== undefined) {
            cell.innerText = data[key];
        }
    });

    form.reset();
}

function addColor(event){
    event.preventDefault();
    const form = event.target;
    const div = document.getElementById("listOfColors");
    const Red = form["Red"].value;
    const Green = form["Green"].value;
    const Blue = form["Blue"].value;

    // Проста перевірка: якщо якесь поле пусте — показуємо помилку
    if (Red === "" || Green === "" || Blue === "") {
        alert("Заповніть всі поля!");
        return;
    }

    // Прості іфи: перевіряємо, чи кожне число лежить в межах від 0 до 255
    if (Red < 0 || Red > 255) {
        alert("Червоний колір (R) має бути від 0 до 255!");
        return;
    }
    if (Green < 0 || Green > 255) {
        alert("Зелений колір (G) має бути від 0 до 255!");
        return;
    }
    if (Blue < 0 || Blue > 255) {
        alert("Синій колір (B) має бути від 0 до 255!");
        return;
    }
    
    // Перевіряємо, чи ввели саме числа (а не літери)
    if (isNaN(Red) || isNaN(Green) || isNaN(Blue)) {
        alert("Вводити можна тільки числа!");
        return;
    }
    div.innerHTML += `
        <div style="display: flex; align-items: center; width: 250px; height: 50px; border: 1px solid #999; box-sizing: border-box;">
            <div style="width: 50px; height: 100%; background-color: rgb(${Red}, ${Green}, ${Blue});"></div>
            <p style="margin: 0; padding-left: 15px;">RGB (${Red}, ${Green}, ${Blue})</p>
        </div>`;
    form.reset();
}