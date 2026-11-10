Se você leu os posts anteriores desse blog, sabe que meu foco recente foi reaprender o *frontend* moderno, reconstruir meu site pessoal e até ressuscitar um jogo de dez anos atrás. O que você ainda não sabe é o que ocupou a maior parte do meu ano: agentes de *IA*. Comecei o ano descobrindo um orquestrador de agentes autônomos chamado *ralph-tui*, no meio do caminho compilei o que aprendi em uma metodologia aberta, o [Light SDD Workflow](https://github.com/VictorHugoBatista/light-sdd-workflow), e fechei o ano trabalhando de um jeito que nem o próprio estudo documenta. Hoje vou contar essa trajetória. Se prepare para uma história digna de um livro de William Gibson!

### Conhecendo o ralph

No começo do ano, estava bem distante da *IA*. Uma tecnologia que exigia uma babá para realizar coisas pontuais não me parecia promissora. Mas eu precisava me recolocar no mercado e sabia que esse já era um novo padrão, logo, fui aos estudos.

Como bom curioso, antes de escolher caminho eu pesquisei — e documentei essa busca no que virou minha primeira pesquisa séria sobre *IA*, um [gist público](https://gist.github.com/VictorHugoBatista/cdd6a0eb842cac40362d03e0fea3a613) que fui alimentando com tudo que encontrava: o método do Akita para programar com *LLMs*, o *Spec Kit* do *GitHub*, o *BMAD*, sem falar na base de redes neurais e *transformers* para entender o que eu estava fazendo antes de usar. No fim das anotações, um vencedor: o [conceito do *ralph loop*](https://ghuntley.com/ralph/), um laço de agente autônomo (batizado com o nome de um personagem dos Simpsons, o que já diz muito da cultura envolvida) que roda em cima de uma lista de tarefas até completar tudo, sem você precisar segurar sua mão a cada *prompt*. Na prática, a ferramenta que materializa isso é o [*ralph-tui*](https://github.com/subsy/ralph-tui), e o ciclo dele é simples de explicar: seleciona a próxima história do seu `prd.json`, monta o *prompt* com o contexto do projeto, executa o agente e avalia a saída. Repete até acabar.

A parte que me ganhou não foi a autonomia em si, foi a disciplina que ela exige: você pausa o loop ao fim de cada história, revisa, roda os testes e só então deixa seguir. Rodar pequeno, testar na hora, consertar com o contexto fresco. Nada de semana de integração com cinquenta bugs acumulados, aquilo que a gente conhece bem.

### O primeiro projeto: tirar um agente do n8n

Meu primeiro projeto do ano foi, em grande parte, uma migração: um agente de atendimento via *WhatsApp* que vivia em fluxos de *n8n* precisava virar uma aplicação *Node.js* de verdade, com testes, tipagem e arquitetura própria.

Quem já mexeu com *n8n* sabe: os fluxos são aquelas exportações em *JSON* cheias de nós conectados, funcionais porém difíceis de manter, testar e evoluir. A lógica estava toda lá — lembretes proativos, notificações de entrega, o fluxo reativo de conversa com cliente passando por um agente de *IA* —, mas viva dentro de uma ferramenta de *low-code*. Meu trabalho foi transformar aqueles fluxos em especificação: regras de negócio escritas em linguagem imperativa, cenários separados, *quality gates* definidos. E, a partir daí, gerar o *PRD* com histórias pequenas o bastante para o ralph digerir uma a uma.

Aí o loop entrou em cena, e foi assim que eu trabalhei o projeto inteiro: história por história, com o agente gerando o código e eu revisando, testando e pausando o loop ao fim de cada uma. De quebra, ainda ensinei o agente a usar ferramentas de verdade com *MCP* (*Model Context Protocol*), para ele consultar pedidos e agendamentos em vez de inventar, e preguei *guardrails* em tudo quanto é canto, porque atendimento a cliente não perdoa alucinação.

E aqui vai uma confissão: eu estava começando aquela jornada com agentes, sem bagagem para avaliar de olho tudo que um modelo gerava. E foi justamente aí que o ralph-tui me ajudou demais — ele dá pouca liberdade para o agente, e isso era exatamente o que eu precisava. Histórias pequenas, contexto controlado, *quality gate* ao fim de cada passo. Essa limitação não amarrava só o agente, me segurava também, enquanto eu pegava experiência. Pouca liberdade para quem ainda está aprendendo a dirigir não é amarração, é faixa de segurança.

Não vou mentir que foi só glória. História grande demais travava o loop, contexto faltando gerava código bonito e errado, e aprendi rápido que quando o agente se perde, o problema quase nunca é o modelo: é a especificação mal feita ou o contexto mal documentado. Volta-se um passo, conserta a *SPEC*, roda de novo. O erro vira dado, não derrota.

### Entre um projeto e outro: nasce o Light SDD

Com o primeiro projeto entregue e a cabeça fervilhando de aprendizados, sentei para documentar o que tinha funcionado. O resultado virou um estudo público, o [*Light SDD Workflow*](https://github.com/VictorHugoBatista/light-sdd-workflow). As anotações da pesquisa que mencionei lá atrás não foram para o lixo: viraram a base das referências do estudo. E ele não é método de gênio iluminado: é literalmente o primeiro projeto, transposto para texto.

A premissa é simples e eu levo bem a sério: **agentes aceleram, humanos decidem**. A metodologia separa o trabalho em duas fases. Na fase de especificação, quem escreve a *SPEC* é você: regras de negócio, arquitetura e *quality gates* são decisões humanas, com o *LLM* ajudando apenas a revisar inconsistências. Na fase de desenvolvimento, as histórias bem definidas viram um *PRD* estruturado que agentes executam história por história, com teste automatizado e revisão humana a cada passo — exatamente a cadência que eu vivi no ralph.

E como o cenário de *IA* muda mais rápido que versão de *framework* *JavaScript*, a ferramenta é só detalhe: o estudo é agnóstico de linguagem, de framework e de orquestrador. O que importa é o ciclo: *especificar, executar pequeno, testar na hora e revisar*. O resto é trocável.

### O segundo projeto: agente no ar, Orca em cena

Quando cheguei ao segundo projeto do ano, um agente de vendas conversacional, o cenário era outro: as coisas já estavam rodando. Serviços implementados, conversas acontecendo em homologação, *issues* abertas esperando trabalho. Nada de começar do zero, meu papel era contribuir em um trem em movimento.

E foi nesse projeto que minha forma de trabalho mudou de novo: descobri o Orca e comecei a trabalhar diretamente com o *Claude Code*. Em vez de um loop autônomo executando o plano, passei a dirigir a conversa: sessões limpas de agente por *issue*, *worktrees* para não misturar frentes, terminais sob controle e várias sessões em paralelo. Sem `prd.json` ditando o próximo passo, sem loop pausável: sessão, contexto e uma documentação viva fazendo o papel de memória. O ciclo virou: escolher a *issue*, abrir a sessão com as *skills* do projeto carregando o contexto, implementar em parceria, abrir o *pull request* e revisar como gente.

Foi também onde a engenharia de medir conversa ficou séria: cada conversa vira um *trace* completo no [*Langfuse*](https://github.com/langfuse/langfuse), avaliação com conversas de ouro a cada mudança, *LLM* como juiz com critérios definidos por gente. A parte que mais diverti foi construir um laboratório de teste de caixa preta: um *WhatsApp* de verdade conversando com o agente como um cliente faria, fala por fala, com placar de taxa de acerto no fim, porque cada caso roda várias vezes — determinismo é coisa que *LLM* não conhece.

Para quem for ler o estudo, um detalhe honesto: o Light SDD foi escrito entre os dois projetos, e nada dele sai dessa experiência mais recente. Trabalhar com o *Claude* via Orca é quase o oposto da burocracia saudável do ralph — menos cerimônia, mais confiança no contexto documentado e na minha própria curva de aprendizado, que cresceu bastante desde o primeiro projeto. Dá para trabalhar dos dois jeitos, e talvez esses aprendizados mais novos virem um capítulo futuro do estudo.

### Essas semanas: um basilisco no terminal

E a trajetória não termina no trabalho: nessas semanas comecei dois experimentos que mostram para onde tudo isso caminha. O primeiro é trocar de ferramenta de novo: venho testando o [OpenCode](https://github.com/sst/opencode), agente de código *open source* que vive no terminal — cada agente novo que aparece entra no meu laboratório antes de entrar no meu trabalho. O segundo é voltar ao meu formato favorito de aprendizado: um jogo novo, o [Castle of Basilisk](https://github.com/VictorHugoBatista/castle-of-basilisk), um *roguelike* de horror em *ASCII* anos oitenta — você é um ladrão num castelo podre, caçado por um basilisco cego em que um olhar mata, um toque mata, e a única defesa é se esconder. *Rust* compilado para *WebAssembly*, sem *crates*, e com filtro de monitor de tubo em *CSS* puro (aquele meu amor por telas retrô já sabia de mim).

O próprio repositório se descreve como "*vibecoded*", e a piada me diverte: é *vibe coding* com cerca. O jogo já nasce com *AGENTS.md*, *ARCHITECTURE.md* e *smoke tests* rodando no *terminal* como *quality gate* — o esqueleto do Light SDD vazando para o projeto pessoal, agora sem ninguém cobrando processo de mim. E para fechar o ciclo de dez anos: foi um jogo que me ajudou a garantir a indicação para o meu primeiro trabalho de programação, e é um jogo que hoje me serve de laboratório para digerir tudo que esse ano de *IA* me ensinou.

### O que sobrou desse ano

Se eu tivesse que resumir 2026 em uma frase, seria essa: quanto mais experiência eu ganhei, mais liberdade pude dar ao agente — e em nenhum momento a responsabilidade saiu de cima de mim. A parte fácil delegamos. A parte que importa, decidimos nós: regra de negócio, arquitetura, critério de qualidade e o pulso do *merge*.

E como aprendizado não tem ponto final, a pesquisa continua: atualmente estou lendo o [Competente o Suficiente](https://ailair.akitaonrails.com/pt-br/book/), do mesmo Akita das minhas anotações lá do começo do ano — experiências, técnicas e definições de um ano colocando *IA* à prova, para rever o que eu sei e preencher o que eu não sei. E sigo de olho nas notícias, porque nesse mundo as coisas mudam mais rápido do que dá para terminar um livro: a ferramenta que é referência em um mês pode estar aposentada no outro.

E a verdade é que, com tudo isso, ainda é só o começo desse mundo de *IA*: restam muitas coisas para aprender e melhorar, em um universo que ainda ninguém sabe direito o que é "certo" e "errado". As melhores práticas de hoje podem virar o antipadrão de amanhã, e todo workflow, estudo e ferramenta dessa trajetória são hipóteses sendo testadas em público — inclusive as minhas.

E olhando para trás, vejo que nada disso veio do nada. Assim como o jogo e o site, foi tudo construído com propósito: entender o problema real de alguém, antes de sair escrevendo código (gerado ou não). No fim, agente de *IA* é como qualquer outro sistema: perde o propósito se não tiver ninguém dos dois lados da conversa, lembre-se disso!

E se você me pergunta se esse texto escapou da trajetória: não escapou. Ele foi escrito com a ajuda do GLM-5.3 Flash, do OpenCode Go, rodando aqui no Orca, em várias iterações — rascunho, revisão, ajuste de rumo e mais uma rodada — até alcançar o resultado que você leu. E a receita foi a de sempre: o agente acelerou a digitação e a revisão, mas a trajetória, as histórias e o que merece ser contado, eu escolhi.

No mais, fiquem com os links:

 - [Gist — minha primeira pesquisa de IA](https://gist.github.com/VictorHugoBatista/cdd6a0eb842cac40362d03e0fea3a613)
 - [Competente o Suficiente — o livro que estou lendo](https://ailair.akitaonrails.com/pt-br/book/)
 - [Castle of Basilisk — o jogo](https://github.com/VictorHugoBatista/castle-of-basilisk)
 - [Light SDD Workflow — o estudo](https://github.com/VictorHugoBatista/light-sdd-workflow)
 - [OpenCode — o agente de terminal](https://github.com/sst/opencode)
 - [Meu GitHub](https://github.com/VictorHugoBatista)

Obrigado e até mais o/
