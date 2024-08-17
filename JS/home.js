
var userName = localStorage.getItem('userName');
var myName = document.getElementById('myName');
var LogoutBtn = document.getElementById('LogoutBtn');


myName.innerHTML =  userName + `${ '<i class="fa-regular fa-face-smile-wink ms-2"></i>'}`;

LogoutBtn.addEventListener('click' , function(){
    localStorage.removeItem('userName');
})