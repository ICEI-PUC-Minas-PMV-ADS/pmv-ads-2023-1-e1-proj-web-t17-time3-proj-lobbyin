# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

| Caso de teste 01 | Cadastro de usuário | 
| ----------------------------------------------------- | - | 
| Requisito xxx |  | 
| Objetivo do Teste | A aplicação deve apresentar um cadastro para aqueles que não possuem login. <br> Nele deve abrir uma aba para a efetuação do cadastro, no qual será inserido um novo usuário |
| Passos | - Abrir o navegador <br> - Endereçar o site <br> - Clicar em "cadastrar" (caso não possua usuário) <br> - Preencher os dados nos campos necessários <br> - Apertar em "cadastrar" para efetuar o registro 
| Critério de êxito | O cliente deverá ser direcionado para a tela de login automaticamente |
<br>

| Caso de teste 02 | Login de usuário | 
| ----------------------------------------------------- | - | 
| Requisito xxx |  | 
| Objetivo do Teste | Verificar se o fornecimento dos dados coincidem com o registro |
| Passos | - Fornecer o login <br> - Fornecer a senha <br> - Clicar no botão "Entrar"
| Critério de êxito | O cliente ser direcionado para a página inicial |
<br>

| Caso de teste 03 | Inserir uma sala | 
| ----------------------------------------------------- | - | 
| Requisito 05 | O site deve oferecer uma funcionalidade de criação, edição e exclusão de salas | 
| Objetivo do Teste |  Validar a inserção de salas para o usuário     |
| Passos | Após o usuário estar logado: <br> - No menu lateral da home, clique em "Nova Sala" <br> - Preencha os campos as com informações desejadas <br> - Clique no botão "Inserir"<br>
| Critério de êxito | O registro será exibido na tabela logo abaixo |
<br>

| Caso de teste 04 | Editar uma sala | 
| ----------------------------------------------------- | - | 
| Requisito 05 |  O site deve oferecer uma funcionalidade de criação, edição e exclusão de salas | 
| Objetivo do Teste |  Validar a edição de salas para o usuário |
| Passos | Após o usuário estar logado: <br> - No menu lateral da home, clique em "Nova Sala" <br> - Vá na tabela que contém as salas já cadastradas e dê um clique na no registro que deseja alterar <br> - Preencha os campos as com informações desejadas <br> - Clique no botão "Alterar"<br>
| Critério de êxito | O registro será exibido com as devidas alterações na tabela logo abaixo |
<br>

| Caso de teste 05 | Excluir uma sala | 
| - | - | 
| Requisito 05 | O site deve oferecer uma funcionalidade de criação, edição e exclusão de salas | 
| Objetivo do Teste |  Validar a edição de salas para o usuário     |
| Passos | Após o usuário estar logado: <br> - No menu lateral da home, clique em "Nova Sala" <br> - Vá na tabela que contém as salas já cadastradas e dê um clique na no registro que deseja alterar <br> - Preencha os campos as com informações desejadas <br> - Clique no botão "Excluir"<br>
| Critério de êxito | O registro será removido da tabela logo abaixo |
<br>

| Caso de teste 06 | Consultar informações do usuário logado | 
| - | - | 
| Requisito xxx |  | 
| Objetivo do Teste | Verificar consistência das informações do usuário |
| Passos | Após o usuário estar logado: <br> - No menu lateral da home, clique em "Usuário"
| Critério de êxito | As Informações cadastradas inicialmente devem aparecer no quadro "Perfil" |
<br>

| Caso de teste 07 | Consultar salas disponível e acessá-las | 
| - | - | 
| Requisito 04 | O site deve fornecer uma ferramenta que exiba salas/jogos disponíveis | 
| Objetivo do Teste | Verificar a acessibilidade das salas |
| Passos | Após o usuário estar logado: <br> - Na home, verifique se há salas disponíveis na tabela ao centro da tela <br> - escolha a sala deseja e clique no link fornecido por ela
| Critério de êxito | O usuário deve ser redirecionado para um link <br> incialmente definido na criação da respectiva sala |
<br>


