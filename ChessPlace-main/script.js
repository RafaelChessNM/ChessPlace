
const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    const login = campoLogin.value;
    const senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (const usuario of bancoDeDados) {
            if (usuario.login === login && usuario.senha === senha) {
                mensagem = "Logado";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./logado/home.html";
                break;
            }
        }
    }
    alert(mensagem);
}

function cadastra() {
    if (campoNovaSenha.value === campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("As senhas são diferentes!");
    }
}

function negoney() {
    window.location.href = "registro.html";
}

function chapadonic() {
    window.location.href = "index.html";
}
