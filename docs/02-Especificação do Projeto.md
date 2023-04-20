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

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
