# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto, foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

+ ### Fernando Ribeiro
	
	+ **Idade**: 22 anos

	+ **Ocupação**:  
	Estudante de direito

	+ **Aplicativos**:  
Instagram; Discord; LinkdIn;

	+ **Motivações**:  
		+ Curtir com os amigos
		+ Ter momentos especiais em conjunto

	+ **Frustrações**:  
		+ Pessoas grosseiras
		+ Falta de avaliações e consequências nas plataformas
		
	+ **Hobbies, História**:  
		+ Assistir animes
		+ Video games


+ ### Carolina Gonçalves
	
	+ **Idade**: 28 anos

	+ **Ocupação**:  
	Analista de suporte

	+ **Aplicativos**:  
Instagram; Discord; Twitch;

	+ **Motivações**:  
		+ Participar de algum lobby/partidas em conjuto
		+ Pessoas interessantes com quem jogar

	+ **Frustrações**:  
		+ Jogar sozinha
		+ Falta de interações
		
	+ **Hobbies, História**:  
		+ Ler
		+ Video games
		+ Academia


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                      |PARA ... `MOTIVO/VALOR`                                                          |
|--------------------|---------------------------------------------------------|---------------------------------------------------------------------------------|
|Carolina Gonçalves  | Adicionar amigos ou conexões permanentes em meu perfil  | Poder salvar perfis para jogar depois e ter uma conexão facilitada com o mesmo  |
|Carolina Gonçalves  | Criação de salas para mais de duas pessoas que queiram se conectar no jogo (criação de salas para times) | Gerar a possibilidade de conectar mais de duas pessoas ao mesmo tempo com semelhantes interesses no momento, ou até mesmo para o preenchimento de equipes  |
|Fernando Ribeiro    | Possuir uma lupa de busca para o encontro de salas e perfis relacionados ao jogo buscado | Encontrar precisamente salas e perfis com o mesmo interesse de jogo momentâneo  |
|Carolina Gonçalves  | Ter opções de chat ao se conectar com outros perfis e entrar em salas  | Facilitar o diálogo e contato inicial entre as pessoas conectadas |
|Fernando Ribeiro    | Poder destacar características e gostos nos perfis  | Poder se conectar mais precisamente com outros perfis dos quais tenham os mesmos gostos inseridos em seus perfis  |
|Fernando Ribeiro    | Avaliações de 0 a 5 estrelas sobre outros perfis no app  | Ter um mínimo de noção a respeito da conduta do perfil(jogador) do qual estou me conectando, se é uma pessoa agradável ou não de se jogar junto |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01 | O site deve apresentar uma aba amigos para localizar suas conexões  | ALTA | 
|RF-02 | O site deve fornecer uma ferramenta para o incremento de características em seu perfil    | Alta |
|RF-03 | O site deve permitir ao usuário visualizar os participantes de uma sala e suas avaliações antes mesmo de adentrar a sala    | MÉDIA |
|RF-04 | O site deve fornecer uma ferramenta de lupa para a busca de salas/jogos   | Alta |
|RF-05 | O site deve oferecer uma funcionalidade de criação de salas relacionadas a determinados jogos   | Alta |
|RF-06 | O site deve permitir visualizar as informações de contatos do mantenedor do site   | Baixa |
|RF-07 | O site deve fornecer uma opção de chat para interações dentro das salas e na aba de amigos ao selecionar uma conexão    | Alta |
|RF-08 | O site deve permitir aos usuários de avaliar outros após finalizar interações em determinada sala adentrada   | Baixa |
|RF-09 | O site deve possuir um sistema de estrelas de reputação para cada usuário baseado em suas avaliações recebidas   | Baixa |
|RF-010| O site deve permitir que usuários adicionem conexões ao seu perfil   | Alta |
|RF-011| O site deve apresentar uma funcionalidade onde jogadores podem se conectar de forma individual com jogadores baseados em características semelhantes ao seu perfil | Alta |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages); | Alta | 
|RNF-02| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  Alta |
|RNF-03| O site deve ter bom nível de contraste entre os elementos da tela em conformidade |  Média |
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Opera)  |  Alta |


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/06/2023.  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end  |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |
