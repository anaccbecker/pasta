// Validação do login
var idValidate = localStorage.getItem("id")

if(idValidate == undefined){
    location.href='/auth.html'
}