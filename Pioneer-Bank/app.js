// Login button eventHandler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('submit', function (e) {
    e.preventDefault();
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('welcome-area');
    transactionArea.style.display = "block"
})

const registrationBtn = document.getElementById('registration');
registrationBtn.addEventListener('submit', function (e) {
    e.preventDefault();
    const registration_area = document.getElementById('registration-area');
    registration_area.style.display = "none";
    const transactionArea = document.getElementById('welcome-area');
    transactionArea.style.display = "block"
})


const redirect_login = document.getElementById('redirect_login');
redirect_login.addEventListener('click', function () {
    const registration_area = document.getElementById('registration-area');
    registration_area.style.display = "none";
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "block"
})

const redirect_register = document.getElementById('redirect_register');
redirect_register.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const registration_area = document.getElementById('registration-area');
    registration_area.style.display = "block"
})

// function registrationSubmit() { 
//     const registration_area = document.getElementById('registration-area');
//     registration_area.style.display = "none";
//     const transactionArea = document.getElementById('welcome-area');
//     transactionArea.style.display = "block"
//  }