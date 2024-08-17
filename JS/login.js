
var loginForm = document.getElementById('loginForm');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var loginAlert = document .getElementById('loginAlert');


var allEmails = [];

if (localStorage.getItem("allEmails") != null) {
    allEmails = JSON.parse(localStorage.getItem("allEmails"));
}


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    login()

});


function login() {
    var inputData = {
        email: signinEmail.value,
        password: signinPassword.value,
    }
    if (isLoginCorrect(inputData) == true) {
        loginAlert.classList.replace('d-block', 'd-none');
        setTimeout(function () {
            window.location.href = "home.html";
        }, 500);
        clearForm();

    } else {
        loginAlert.classList.replace('d-none', 'd-block');
        console.log('login failed');
    }
};

function isLoginCorrect(inputData) {
    for (var i = 0; i < allEmails.length; i++) {
        if (allEmails[i].email.toLowerCase() == inputData.email.toLowerCase() && allEmails[i].password == inputData.password) {
            localStorage.setItem('userName',allEmails[i].name)
            return true;
        } else {
            return false;
        }
    }
};
function clearForm(){
    signinEmail.value = '';
    signinPassword.value = '';
};
