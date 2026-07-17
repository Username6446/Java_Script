// Спільні регулярні вирази
const regexEmail = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+\.[a-zA-Z0-9-_\.]{2,10}$/;
const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){6,32}$/;


// ==========================================
// ФОРМА 1: Логіка валідації при вводі
// ==========================================

function loginSubmitForm1(event) {
    event.preventDefault();
    const form = event.target;

    const emailInput = form["email1"];
    const passwordInput = form["password1"];

    // Примусова валідація, якщо користувач нічого не ввів і натиснув Enter
    const isValidEmail = validateInput1(emailInput, validationEmail1);
    const isValidPassword = validateInput1(passwordInput, validationPassword1);

    if(!isValidEmail || !isValidPassword) {
        return;
    }
    alert("Форма 1: Успішний вхід");
}

function validateInput1(input, validationFn) {    
    const error = document.getElementById(`${input.id}Error`);
    const btn = document.getElementById("btnSubmit1");
    
    const validResult = validationFn(input.value);

    if(validResult.isSuccess) {
        error.innerText = "";
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        btn.disabled = false;
    } else {
        error.innerText = validResult.error;
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        btn.disabled = true;
    }
    return validResult.isSuccess;
}

function handleEmailInput1(event) {
    validateInput1(event.target, validationEmail1);
}

function handlePasswordInput1(event) {
    validateInput1(event.target, validationPassword1);
}

function validationEmail1(email) {
    const res = { isSuccess: true };
    if (email.length == 0) {
        res.isSuccess = false;
        res.error = "Обов'язкове поле";
    } else if (!regexEmail.test(email)) {
        res.isSuccess = false;
        res.error = "Невірний формат пошти";
    }
    return res;
}

function validationPassword1(password) {
    const res = { isSuccess: true };
    if (password.length < 6) {
        res.isSuccess = false;
        res.error = "Пароль повинен містити мінімум 6 символів";
    } else if (!regexPassword.test(password)) {
        res.isSuccess = false;
        res.error = "Пароль повинен містити цифру, велику та маленьку літери";
    }
    return res;
}


// ==========================================
// ФОРМА 2: Логіка валідації при підтвердженні
// ==========================================

function loginSubmitForm2(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputData = {
        email: form["email2"].value,
        password: form["password2"].value,
    };

    const validationResult = validationForm2(inputData);

    if (validationResult.isSuccess) {
        clearErrorsForm2(); // Очищаємо помилки, якщо вони були до цього
        alert("Форма 2: Ви успішно увійшли");
    } else {
        printErrorsForm2(validationResult.errors);
    }
}

function validationForm2(data) {
    const res = {
        isSuccess: true,
        errors: {},
    };

    if (data.email.length == 0) {
        res.isSuccess = false;
        res.errors.email = "Обов'язкове поле";
    } else if (!regexEmail.test(data.email)) {
        res.isSuccess = false;
        res.errors.email = "Невірний формат пошти";
    }

    if (data.password.length < 6) {
        res.isSuccess = false;
        res.errors.password = "Пароль повинен містити мінімум 6 символів";
    } else if (!regexPassword.test(data.password)) {
        res.isSuccess = false;
        res.errors.password = "Пароль повинен містити цифру, велику та маленьку літери";
    }

    return res;
}

function clearErrorsForm2() {
    const emailError = document.getElementById("email2Error");
    const emailInput = document.getElementById("email2");
    const passwordError = document.getElementById("password2Error");
    const passwordInput = document.getElementById("password2");

    emailError.innerText = "";
    emailInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-valid"); // знімаємо зелену рамку, якщо потрібно

    passwordError.innerText = "";
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-valid");
}

function printErrorsForm2(errors) {
    clearErrorsForm2(); // Перед виводом нових помилок, прибираємо старі

    const emailError = document.getElementById("email2Error");
    const emailInput = document.getElementById("email2");
    const passwordError = document.getElementById("password2Error");
    const passwordInput = document.getElementById("password2");

    if (errors.email) {
        emailError.innerText = errors.email;
        emailInput.classList.add("is-invalid");
    } else {
        // Якщо помилки немає, можна додати клас успіху
        emailInput.classList.add("is-valid"); 
    }

    if (errors.password) {
        passwordError.innerText = errors.password;
        passwordInput.classList.add("is-invalid");
    } else {
        passwordInput.classList.add("is-valid");
    }
}