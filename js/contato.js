const form = document.getElementById("form")

function nomeInvalido() {
    const nomeErro = document.getElementById("nomeErro")
    nomeErro.classList.remove("d-none")
}

function limpaErroNome() {
    const nomeErro = document.getElementById("nomeErro")
    nomeErro.classList.add("d-none")
}

function assuntoInvalido() {
    const assuntoErro = document.getElementById("assuntoErro")
    assuntoErro.classList.remove("d-none")
}

function limpaErroAssunto() {
    const assuntoErro = document.getElementById("assuntoErro")
    assuntoErro.classList.add("d-none")
}

function emailInvalido() {
    const emailErro = document.getElementById("emailErro")
    emailErro.classList.remove("d-none")
}

function limpaErroEmail() {
    const emailErro = document.getElementById("emailErro")
    emailErro.classList.add("d-none")
}

function mensagemInvalido() {
    const mensagemErro = document.getElementById("mensagemErro")
    mensagemErro.classList.remove("d-none")
}

function limpaErroMensagem() {
    const mensagemErro = document.getElementById("mensagemErro")
    mensagemErro.classList.add("d-none")
}

form.addEventListener("submit", (evento) => {
    const mensagensRecebidas = JSON.parse(localStorage.getItem("mensagensRecebidas")) || []
    const mensagemSucesso = document.getElementById("mensagemSucesso")
    
    evento.preventDefault()

    const novaMensagem = {
        "nome": evento.target.elements["txt_nome"].value,
        "assunto": evento.target.elements["txt_assunto"].value,
        "email": evento.target.elements["txt_email"].value,
        "texto": evento.target.elements["txt_mensagem"].value
    }

    mensagensRecebidas.push(novaMensagem)

    localStorage.setItem("mensagensRecebidas", JSON.stringify(mensagensRecebidas))

    // Limpando o form
    evento.target.elements["txt_nome"].value = ""
    evento.target.elements["txt_assunto"].value = ""
    evento.target.elements["txt_email"].value = ""
    evento.target.elements["txt_mensagem"].value = ""

    // Informando ao usuário qu foi um sucesso
    mensagemSucesso.classList.remove("d-none")
})