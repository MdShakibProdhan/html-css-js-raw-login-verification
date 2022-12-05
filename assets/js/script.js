// alert("hello")
/******* View section ******/
const regSection = document.getElementById("reg-form-section")
const logSection = document.getElementById("login-panel")
const welcomeSection = document.getElementById("welcome-section")
const welcome = document.getElementById("welcome")

regSection.classList.add("active")
logSection.classList.add("hide")
welcomeSection.classList.add("hide")

function showLogin(){
regSection.classList.remove("active")
logSection.classList.remove("hide")

regSection.classList.add("hide")
logSection.classList.add("active")
}
function showReg(){
regSection.classList.remove("hide")
logSection.classList.remove("active")

regSection.classList.add("active")
logSection.classList.add("hide")
}


function showWelcome(){
    // document.getElementById("myForm").submit();
regSection.classList.remove("active")
logSection.classList.remove("active")

regSection.classList.add("hide")
logSection.classList.add("hide")
welcomeSection.classList.add("active")
}
const myForm = document.getElementById("myForm")

      function submitForm(event) {
         event.preventDefault();
         myForm.submit();
         welcome.innerText = "welcome"
         regSection.classList.remove("active")
logSection.classList.remove("active")

regSection.classList.add("hide")
logSection.classList.add("hide")
welcomeSection.classList.add("active")
      }


/***** Registration Form Password Validation ****/


var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {

    console.log(password.value);
    console.log(confirmPassword.value);
        if (password.value != confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords Don't Match");
        } else {
            confirmPassword.setCustomValidity('');
        }
}
