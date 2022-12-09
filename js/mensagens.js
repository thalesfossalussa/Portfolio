const form = document.getElementById("form")
const mensagens = JSON.parse(localStorage.getItem("mensagens")) || []

// Adicionando mensagens da página Contato
form.addEventListener ("submit", (evento) => {
    evento.preventDefault()

    const novaMensagem = {
        "nome" : evento.target.elements["txt_nome"].value,
        "assunto" : evento.target.elements["txt_assunto"].value,
        "email" : evento.target.elements["txt_email"].value,
        "mensagem" : evento.target.elements["txt_mensagem"].value
    }

    mensagens.push(novaMensagem)

    localStorage.setItem("mensagens", JSON.stringify(mensagens))

    evento.target.elements["txt_nome"].value = ""
    evento.target.elements["txt_assunto"].value = ""
    evento.target.elements["txt_email"].value = ""
    evento.target.elements["txt_mensagem"].value = ""

    // TODO: retornar que a mensagem foi enviada com sucesso ou sem sucesso
})