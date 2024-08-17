
// Regestration >>>  Validation

var signUpForm = document.getElementById('regstration');
var signUpName = document.getElementById('signupName');
var signUpEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var nameAlert = document.getElementById('nameAlert');
var emailAlert = document.getElementById('emailAlert');
var passwordAlert = document.getElementById('passwordAlert');
var successAlert = document.getElementById('successAlert');
var existAlert = document.getElementById('existAlert');

var allEmails = [];

if (localStorage.getItem('allEmails') != null) {
    allEmails = JSON.parse(localStorage.getItem('allEmails'));
};

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (chickIfAllInputsTrue()) {
        addEmail();
        // clearForm();
    }

});

// Validate All Inputs
function validationInputs(regex, element, alertMesseges) {

    if (regex.test(element.value)) {
        alertMesseges.classList.replace('d-block', 'd-none');
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        return true;
    }
    else {
        element.classList.replace('d-none', 'd-block');
        element.classList.add('is-invalid');
        // element.classList.remove('is-valid');
        return false;
    }
};

// Chick If All Inputs valid or invalid
function chickIfAllInputsTrue() {
    if (validationInputs(/^[a-zA-Z0-9$_]{3,}$/, signUpName, nameAlert) == true &&
        validationInputs(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, signUpEmail, emailAlert) == true &&
        validationInputs(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, signupPassword, passwordAlert) == true) {
        successAlert.classList.replace('d-none', 'd-block');
        return true;
    } else {
        successAlert.classList.replace('d-block', 'd-none');
        return false;
    }
};

// clear form 
function clearForm() {
    signUpName.value = '';
    signUpEmail.value = '';
    signupPassword.value = '';
};

function addEmail() {
    var newEmail = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signupPassword.value
    }
    if (isExist(newEmail) == true) {
        console.log('exist ');
        existAlert.classList.replace('d-none', 'd-block');
        successAlert.classList.replace('d-block', 'd-none');
        return;
    }
    else {
        existAlert.classList.replace('d-block', 'd-none');
        allEmails.push(newEmail);
        console.log(allEmails);
        localStorage.setItem('allEmails', JSON.stringify(allEmails));
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1500);      // set time out for href Login
    }

};

function isExist(newEmail) {
    for (var i = 0; i < allEmails.length; i++) {
        if (allEmails[i].email.toLowerCase() == newEmail.email.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
};



