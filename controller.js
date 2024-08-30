// VALIDAR ACESSO EM TELA DE LOGIN

function acessar() { // CRIA UMA FUNÇÃO  QUE VALIDA OQUE FOI ESCRITO NOS CAMPOS DE LOGIN
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (loginEmail == "" || loginEmail.indexOf("@") == -1 || loginEmail.indexOf(".") == -1) {
        alert("Por favor, informe um e-mail válido");
    }else if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos"); // Mostra Pop-up caso usuário não preencha corretamente os campos de Login.
    } else {
        //alert("Campos preenchidos com sucesso");
        window.location.href = "cadastro.html"; // Ao preencher os campos corretamente ele te direciona a outra página
    }
}

//FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO

var dadosLista = []; // ARMAZENA A LISTA DE NOMES INSERIDOS

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value; // Declara variáveis limitando seu escopo no bloco
    let emailUser = document.getElementById("emailUser").value;

    if (emailUser == "" || emailUser.indexOf("@") == -1 || emailUser.indexOf(".") == -1) {
        alert("Por favor, informe um e-mail válido");
    } else if (nomeUser && emailUser) {

        dadosLista.push({ nome: nomeUser, email: emailUser }); // Adicionou um ou mais elementos ao final do array e retornou o novo comprimento desse array.
        //console.log(dadosLista);
        criaLista();
        document.getElementById("nomeUser").value = ""; // Após envio do campo de Login, o input fica vazio
        document.getElementById("emailUser").value = ""; // Após envio do campo de Login, o input fica vazio


    } else {
        alert("Favor informar o Usuário e Email"); // Caso o usuário não preencha o campo ele aparecera um Pop-up para preenchimento completo do cadastro.
    }
}

// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS

// <td> = criar a coluna | <tr> = criar a linha |<th> = cabeçalho da tabela| += = oque estiver dentro da tabela fica, mais adiciona mais algum item há tabela.

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }

}

// FUNÇÃO PARA EDITAR NOMES DE LISTA 
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)].nome;

    document.getElementById("emailUser").value = dadosLista[(i - 1)].email;
    dadosLista.splice(dadosLista[(i - 1)], 1).nome;
    dadosLista.splice(dadosLista[(i - 1)], 1).email;
}

// FUNÇÃO QUE EXCLUI NOME DA LISTA 
function excluir(i) { // CRIOU UMA FUNÇÃO EXCLUIR
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

//deleteRow = deletar linha

//arrumar a validação do email