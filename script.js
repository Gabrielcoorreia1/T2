var selectedRow = null;




function limparCampos() {
    document.querySelector("#nome").value = "";
    document.querySelector("#endereco").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telefone").value = "";
}

// Edita pessoa
document.querySelector("#pessoa-lista").addEventListener("click", (e) => {
    target = e.target;
    if(target.textContent === "edit") {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#nome").value = selectedRow.children[0].textContent;
        document.querySelector("#endereco").value = selectedRow.children[1].textContent;
        document.querySelector("#email").value = selectedRow.children[2].textContent;
        document.querySelector("#telefone").value = selectedRow.children[3].textContent;
    }
})

// remove pessoa

document.querySelector("#pessoa-lista").addEventListener("click", (e) => {
    const target = e.target;
    if(target.textContent === "delete") {
        target.parentElement.parentElement.remove();
    }
})

// cadastrar pessoa

document.querySelector("#form-pessoa").addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const endereco = document.querySelector("#endereco").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;

    if(nome == "" || endereco == "" || email == "" || telefone == "") {
        return false;
    } else {
        if(selectedRow == null) {
            const list = document.querySelector("#pessoa-lista");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td data="Nome">${nome}</td>
                <td data="Telefone">${telefone}</td>
                <td data="Email">${email}</td>
                <td data="Endereço">${endereco}</td>
                <td data="Ações">
                    <a href="#"><i class="fa-regular fa-pen-to-square"></i>edit</a>
                    <a href="#"><i class="fa-solid fa-delete-left"></i>delete</a>
                </td>
            `;

            list.appendChild(row);
            selectedRow = null;
        }
        else {
            selectedRow.children[0].textContent = nome;
            selectedRow.children[1].textContent = telefone;
            selectedRow.children[2].textContent = email;
            selectedRow.children[3].textContent = endereco;
            selectedRow = null;
        } 
        limparCampos();
    }
}) 
