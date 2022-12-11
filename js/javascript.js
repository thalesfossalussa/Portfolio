function carregarModelos() {
    $('my-header').load('view/menu.html');
    $('my-footer').load('view/footer.html');

}

function openFolder(elemento) {
    const icone = document.createElement("i")
    elemento.innerHTML = ""

    icone.classList.add("bi")
    icone.classList.add("bi-folder2-open")
    elemento.appendChild(icone)
    elemento.append(" Repositório")
}

function closeFolder(elemento) {
    const icone = document.createElement("i")
    elemento.innerHTML = ""

    icone.classList.add("bi")
    icone.classList.add("bi-folder")
    elemento.appendChild(icone)
    elemento.append(" Repositório")
}