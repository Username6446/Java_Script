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