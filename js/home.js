// Inserindo a data na página
let date = new Date().toLocaleString("pt-BR")
let validateDate = new Date().getHours()


// Inserindo a saudação na página
var saudacao = document.getElementById("saudacao")


if (validateDate >= 18){
    saudacao.appendChild(document.createTextNode("Boa noite"))
}else if (validateDate >= 12){
    saudacao.appendChild(document.createTextNode("Boa tarde"))
}else if (validateDate >= 7){
    saudacao.appendChild(document.createTextNode("Bom dia"))
}else {
    saudacao.appendChild(document.createTextNode("Boa noite"))
}
