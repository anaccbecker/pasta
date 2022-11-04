var usernameDefault = 'ana'
var passwordDefault = 'ana'
var idValidate = localStorage.getItem("id")

if(idValidate != undefined){
    location.href='/home.html'
}
function login (e){
    e.preventDefault()
    var usernameInput = document.getElementById("login-text").value
    var passwordInput = document.getElementById("login-password").value
    if (usernameInput == usernameDefault && passwordInput==passwordDefault){
        localStorage.setItem("name","usuário 123")
        localStorage.setItem("email","user@teste.com")
        localStorage.setItem("id","123")
        location.href='/home.html'
    }
    else{
        alert("Falha no login")
    }
    
}

