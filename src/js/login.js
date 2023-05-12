//banco de dados da ******* da Aplicação---------------------------------------------------------------------
// Página inicial de Login
const login_URL = "index.html";

// Objeto para banco de dados fake de usuário em JSOn
var db_usuarios = {};

// Objeto usuario atual
var usuarioCorrente = {};

// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
    usuarios: [
        {"login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
        {"login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
    ]
};

// Copia os dados iniciais para o banco de dados 
db_usuarios = dadosIniciais;

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp () {

    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');
     // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage
         // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Salva os dados iniciais no local Storage convertendo-os para string antes
         localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  {  // Se há dados no localStorage
        
        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}



function addUser (nome, login, senha, email) {
    
    // Cria um objeto de usuario para o novo usuario 
    let usuario = {"login": login, "senha": senha, "nome": nome, "email": email };
    
    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push (usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function setUserPass () {

}


// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp ();
// ---------------------------fim da **** do DB-----------------------------------------



//coments








//VALIDANDO TELA DE LOGIN -----------------------------------------------------------
//função para processar o formulario de login
function processaFormLogin(event){
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault();

    //obtendo dados do usuario
    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;
    
    //validando login do usuario se tiver ok manda pra tela
    resultadoLogin = loginUser (login, senha);
    if(resultadoLogin){
        window.location.href = "home.html"
    }else{
        alert("Usuario ou senha invalidos meu nobre.")
    }
}







//----------------------------------------------------------------------------------------
///modal mandando pro db
function salvaLogin (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let login  = document.getElementById('txt-username').value;
    let nome   = document.getElementById('txt-login').value;
    let email  = document.getElementById('txt-email').value;
    let senha  = document.getElementById('txt-password').value;
    let senha2 = document.getElementById('ctxt-confirmPassword').value;
    if (senha != senha2) {
        alert ('As senhas informadas não conferem.');
        return
    }

    // Adiciona o usuário no banco de dados
    addUser (nome, login, senha, email);
    alert ('Usuário salvo com sucesso. Proceda com o login para');
    // Oculta a div modal do login
    document.getElementById ('myModal').style.display = 'none';
    $('#loginModal').modal('hide');
}

// Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
document.getElementById ('login-form').addEventListener ('submit', processaFormLogin);
// Associar salvamento ao botao
document.getElementById ('btn-salvar').addEventListener ('click', salvaLogin);

//--------------MODAL--------------------------------
// pega a ***** do modal
var modal = document.getElementById("myModal");

//pega o botão cadastrar
var btn = document.getElementById("myBtn");

// pega o <span> para fechar o modal
var span = document.getElementsByClassName("close")[0];

//abre o modal
btn.onclick = function () {
    modal.style.display = "block";
}

//quando clica no span fechar, feha o modal
span.onclick = function() {
    modal.style.display = "none";
}

//quando o usuario clica fora da caixa cadastro, fecha ele
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//---------------------------------------------------