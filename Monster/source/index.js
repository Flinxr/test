const FrontURL = window.location.origin;
const BackUrl = 'http://127.0.0.1:8000';

function PageLoadHandle(page){
    switch(page){
        case 'home':

            break;
    }
}





var authToken = localStorage.getItem('token')
var headerContainer = document.querySelector('.header-profile');
var loggedIn = false;
if(authToken){
    loggedIn = true;
}

if(loggedIn){
    headerContainer.innerHTML = `
    <a href="./login.html"><img class="profile-img"
        src="../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
        alt=""></a>
    `
}else{
    headerContainer.innerHTML = `
    <button class="login-btn">
    <a href="./login.html">
        ورود
    </a>
    </button>
    `
}

function LoginConfirm(){
    let username = document.getElementById('login-username').value
    if(username == 'admin'){
        localStorage.setItem('token','eusfhuufshudifuhuywsufhdf')
        window.location.href=window.location.origin + '/test/Monster/source/admin.html'
    }

    if(username == 'user'){
        localStorage.setItem('token','eusfhuufshudifuhuywsufhdf')
        window.location.href=window.location.origin + '/test/Monster/source/userCart.html'
    }else{
    }
}

function Signout(){
    localStorage.removeItem('token')
    window.location.reload()
}
function onlineclasshref(){
    window.location.href=window.location.origin + 'onlineClass.html'
}

function inpersonclasshref(){
    window.location.href=window.location.origin + 'inPersonClass.html'
}



