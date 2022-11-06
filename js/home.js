// Inserindo a data na página
let date = new Date().toLocaleString("pt-BR")
let validateDate = new Date().getHours()

var dateTime = document.getElementById("system-time")
dateTime.appendChild(document.createTextNode(date))

// Inserindo a saudação na página
var saudacao = document.getElementById("saudacao")


if (validateDate >= 18){
    saudacao.appendChild(document.createTextNode("Boa noite"))
}else if (validateDate >= 12){
    saudacao.appendChild(document.createTextNode("Boa tarde"))
}else if (validateDate >= 7){
    saudacao.appendChild(document.createTextNode("Bom dia"))
}else {
    saudacao.appendChild(document.createTextNode("Vai dormir"))
}

// Lista de quotes

var listQuotes = [
    '"Água mole em pedra dura tanto bate até que fura"',
    '"Nem todas as tempestades vem para atrapalhar sua vida. Algumas vem para limpar seu caminho" - Ana Maria Braga',
    `"Don't be afraid of start over again. Remember this time you're not starting from scratch, you're starting from experience"`,
    `Friendly reminder: "Let whomever think whatever. Your peace is way more important than other people's opinions"`,
    '"Você nunca vive as tristezas das vidas que não viveu. Você só vive as tristezas das vidas que escolheu pra viver" - Clóvis de Barros',
    '"Missed opportunities hurt much more than rejections"',
    '"Fall in love with the process of becoming the best version of yourself"',
    '"There is a past version of you that is so proud of how far you have come"',
    '"Do not fight the old. Build the new."',
    '"If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you"',
    '"Some mistakes take us to the right place"',
    '"Erros são necessários para que os acertos sejam memoráveis" - Eren Soares',
    '"There is love in holding on and there is love in letting go"',
    '"O que os outros pensam sobre você está fora do seu controle"',
    '"Já que você será julgada de qualquer jeito, melhor que seja por viver de acordo com aquilo que você acredita"',
    '"Usar a opinião alheia como guia te afasta de uma vida com propósito"',
    '"People will love you, people will hate you, none of that will have anything to do with you"',
    '"O excesso de explicação é autodestrutivo e desnecessário"',
    '"Their behavior has more to do with their own internal struggle than it ever did with you"',
    '"While you might be doubting yourself, someone else is admiring your strength"',
    '"The happiest people make the best of everything"',
    `"Sometimes you don't get what you want because you deserve better"`,
    `"You still haven't met all the people that are going to love you"`,
    `"If you're ever scared you're a bad person, remember that bad people don't care about being better"`,
    `"You deserve to celebrate not only who you've become, but who you could've become and fought not to"`,
    '"There are people less qualified than you doing things you dream of doing because they have the audacity to accept themselves, the courage to fail, and the belief that success is possible for them" - Jennifer Diaz',
    `"I can't compare my learning curve with to someone else's highlight reel"`,
    '"This is what courage looks like"',
    '"I did the best I could with the information I had at the time. I can forgive my past self and grow into a wiser version of myself"',
    `"You've proven to yourself that you're strong enough to hold on to what you know. Now be strong enough to let go."`,
    `"Just because things could've been different doesn't mean they would've been better."`,
    `"A inteligência de uma pessoa é medida pela sua capacidade de suportar incertezas." - Immanuel Kant`,
    '"Sempre terá alguém pra duvidar de você. Se essa pessoa não for você, tudo bem"',
    '"Pessoas boas fazem outras pessoas se sentirem muito boas. Seja esse tipo de pessoa!"',
    '"Seja filtro, não esponja"'
]
var randomNumber = parseInt(Math.random()*listQuotes.length)
var quote = document.getElementById("quote")
var quoteElement = document.createElement("p") // criando a tag p do html pelo js
var text = document.createTextNode(listQuotes[randomNumber])
quoteElement.appendChild(text)
quote.appendChild(quoteElement)