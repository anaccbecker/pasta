
// User Card
var UserCardUsername = document.getElementById("user-card-username")
var UserCardEmail = document.getElementById("user-card-email")
UserCardUsername.appendChild(document.createTextNode(localStorage.getItem("name")))
UserCardEmail.appendChild(document.createTextNode(localStorage.getItem("email")))


// Sidebar
// Criando variáveis do botão
const buttonOpen = document.getElementById('button-open')
const buttonClosed = document.getElementById('button-closed')

// Criando variáveis da sidebar
const sidebarOpen = document.querySelector('.sidebar-open')
const sidebarClosed= document.querySelector('.sidebar-closed')

// Criando a abertura da sidebar
buttonOpen.onclick = function () {
    if(window.getComputedStyle(sidebarOpen).display == "none"){
        sidebarClosed.style.display = "none";
        sidebarOpen.style.display = "flex";
    }
    else{
        console.log('erro')
    }
}

// Criando o fechamento da sidebar
buttonClosed.onclick = function () {
    if(window.getComputedStyle(sidebarClosed).display == 'none'){
        sidebarClosed.style.display = "flex";
        sidebarOpen.style.display = "none";
    }
    else{
        console.log('erro')
    }
}

// Criando o fechamento da sidebar com Esc

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        sidebarClosed.style.display = "flex";
        sidebarOpen.style.display = "none";
    }
})

// Log out

const buttonLogout = document.getElementById('logout-button')
// Criando o redirecionamento
buttonLogout.onclick = function () {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("id")
    location.href='/auth.html'
}

// Redirecionamento vídeos

const buttonVideos = document.querySelectorAll('.videos')
console.log(document.querySelectorAll('.videos'));
buttonVideos[0].onclick = function(){
    location.href='/videos.html'
}
buttonVideos[1].onclick = function(){
    location.href='/videos.html'
}

// Redirecionamento design

const buttonDesign = document.querySelectorAll('.design')
buttonDesign[0].onclick = function(){
    location.href='/play.html'
}
buttonDesign[1].onclick = function(){
    location.href='/play.html'
}

// Redirecionamento home

const buttonHome = document.querySelectorAll('.home')
buttonHome[0].onclick = function(){
    location.href='/home.html'
}
buttonHome[1].onclick = function(){
    location.href='/home.html'
}

// Redirecionamento fav

const buttonFav = document.querySelectorAll('.fav')
buttonFav[0].onclick = function(){
    location.href='/favorites.html'
}
buttonFav[1].onclick = function(){
    location.href='/favorites.html'
}