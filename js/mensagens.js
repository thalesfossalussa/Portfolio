const listaMensagens = document.getElementById("listaMensagens")
const mensagensRecebidas = JSON.parse(localStorage.getItem("mensagensRecebidas")) || []


// Verificando se há mensagens no local Storage
function semMensagens() {
    const container = document.getElementById("container")

    container.innerHTML = ""

    const row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("py-2")
    row.classList.add("align-items-center")
    row.style.minHeight = "300px"

    const text = document.createElement("h2")
    text.classList.add("text-center")

    text.innerText = "Sua caixa de entrada está limpa, por favor volte mais tarde!"
    row.appendChild(text)
    container.appendChild(row)
}

function limparMensagens() {
    localStorage.clear()

    listaMensagens.remove()
    semMensagens()
}

if ($("#form").length) {
    const form = document.getElementById("form")
    form.addEventListener("submit", (evento) => {
        // DUVIDAS: entre usar um var form aqui ou const form no ínicio do arquivo
        evento.preventDefault()

        const novaMensagem = {
            "nome": evento.target.elements["txt_nome"].value,
            "assunto": evento.target.elements["txt_assunto"].value,
            "email": evento.target.elements["txt_email"].value,
            "texto": evento.target.elements["txt_mensagem"].value
        }

        mensagensRecebidas.push(novaMensagem)

        localStorage.setItem("mensagensRecebidas", JSON.stringify(mensagensRecebidas))

        evento.target.elements["txt_nome"].value = ""
        evento.target.elements["txt_assunto"].value = ""
        evento.target.elements["txt_email"].value = ""
        evento.target.elements["txt_mensagem"].value = ""

        // TODO: retornar que a mensagem foi enviada com sucesso ou sem sucesso
    })
}

// Carregar lista de mensagens com LocalStorage
if ($("#listaMensagens").length) {
    function criarCardMensagem(mensagem) {
        //Criando elementos HTML que formarão a mensagem
        // DUVIDAS: Existe uma maneira mais simples de escrever esse código abaixo?
        const mensagemRow = document.createElement("div")
        const mensagemCol = document.createElement("div")
        const mensagemCard = document.createElement("div")
        const mensagemCardBody = document.createElement("div")
        mensagemRow.classList.add("row")
        mensagemRow.classList.add("align-items-center")
        mensagemRow.classList.add("py-2")
        mensagemRow.classList.add("h-100")

        mensagemCol.classList.add("col-12")
        mensagemCard.classList.add("card")
        mensagemCardBody.classList.add("card-body")

        const mensagemAssunto = document.createElement("h3")
        const mensagemNome = document.createElement("h5")
        const mensagemEmail = document.createElement("h5")
        const mensagemTexto = document.createElement("p")
        mensagemAssunto.classList.add("card-title")
        mensagemNome.classList.add("card-title")
        mensagemEmail.classList.add("card-title")
        mensagemTexto.classList.add("card-text")

        // Detalhes da mensagem
        mensagemAssunto.innerText = mensagem.assunto
        mensagemNome.innerText = mensagem.nome
        mensagemEmail.innerText = mensagem.email
        mensagemTexto.innerText = mensagem.texto

        mensagemCardBody.appendChild(mensagemAssunto)
        mensagemCardBody.appendChild(mensagemNome)
        mensagemCardBody.appendChild(mensagemEmail)
        mensagemCardBody.appendChild(mensagemTexto)


        mensagemCard.appendChild(mensagemCardBody)
        mensagemCol.appendChild(mensagemCard)
        mensagemRow.appendChild(mensagemCol)

        console.log(mensagemRow)
        listaMensagens.appendChild(mensagemRow)
    }

    if (mensagensRecebidas) {
        mensagensRecebidas.forEach(mensagem => {
            criarCardMensagem(mensagem)
        });
    }

}

if (!localStorage.getItem("mensagensRecebidas")) semMensagens()