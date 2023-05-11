# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto, foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

<table>
	<tr>
		<td rowspan="2"><img src="img/foto1.png" width=80% height=80% alt="persona1"></td>
		<td colspan="2"><strong>Fernando Ribeiro</strong></td>
	</tr>
	<tr>
		<td><strong>Idade: </strong>22 Anos<br><strong>Ocupação: </strong>Estudante de direito</td>
		<td>
			<strong>Aplicativos</strong>
			<ul>
				<li>Instagram</li>
				<li>Discord</li>
				<li>LinkdIn</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>
			<strong>Motivações</strong>
			<ul>
				<li>Curtir com os amigos</li>
				<li>Ter momentos especiais em conjunto</li>
			</ul>
		</td>
		<td>
			<strong>Frustações</strong>
			<ul>
				<li>Pessoas grosseiras</li>
				<li>Falta de avaliações e consequências<br> nas  plataformas</li>
			</ul>
		</td>
		<td>
			<strong>Hobbies, História</strong>
			<ul>
				<li>Assistir animes</li>
				<li>Video games</li>
				<li>Ler</li>
			</ul>
		</td>
	</tr>
</table>

<br><br>

<table>
	<tr>
		<td rowspan="2"><img src="img/foto2.png" width=80% height=80% alt="persona2"></td>
		<td colspan="2"><strong>Carolina Gonçalves</strong></td>
	</tr>
	<tr>
		<td><strong>Idade: </strong>28 anos<br><strong>Ocupação: </strong>Analista de suporte</td>
		<td>
			<strong>Aplicativos</strong>
			<ul>
				<li>Instagram</li>
				<li>Discord</li>
				<li>Twitch</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>
			<strong>Motivações</strong>
			<ul>
				<li>Participar de algum lobby/partidas em conjuto</li>
				<li>Pessoas interessantes com quem jogar</li>
			</ul>
		</td>
		<td>
			<strong>Frustações</strong>
			<ul>
				<li>Jogar sozinha</li>
				<li>Falta de interações</li>
			</ul>
		</td>
		<td>
			<strong>Hobbies, História</strong>
			<ul>
				<li>Ler</li>
				<li>Video games</li>
				<li>Acadenia</li>
			</ul>
		</td>
	</tr>
</table>


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
