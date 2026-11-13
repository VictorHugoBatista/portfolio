O [post anterior](/portfolio/#/blog/como-comecei-a-construir-agentes-de-ia) por aqui terminou com o [Castle of Basilisk](https://github.com/VictorHugoBatista/castle-of-basilisk) citado de passagem: um *roguelike* de horror em *ASCII* anos oitenta que serve de laboratório para digerir tudo que esse ano de agentes de *IA* me ensinou. O que ele não contou foi o que os *commits* contam: em cerca de duas semanas, o jogo foi de *proof of concept* a oito andares com trilha sintetizada, sistema de medo e canon escondido  — mais de 130 *commits* e 25 *pull requests*, tudo em público. Hoje é dia de contar o processo por trás disso.

E como toda boa história desse blog, o começo foi acidental: tudo nasceu de um simples teste do [OpenCode](https://github.com/sst/opencode), usando a versão gratuita do GLM-5.3 Flash — sim, o mesmo modelo que digita este post. O castelo cresceu rápido demais e eu não queria que o desenvolvimento andasse no ritmo do rascunho, então contratei o plano *Go* do OpenCode: o preço subsidiado pareceu bom e o projeto merecia velocidade. Aperte os cintos para mais uma viagem pelo ciberespaço — dessa vez, rumo a um castelo podre!

### Um olhar mata, um toque mata

A premissa nasceu pronta, e premissas boas são as que definem o *engine* inteiro. Você é um ladrão num castelo onde o rei morreu há cem anos e a criatura que esvaziou o lugar ainda ronda: um basilisco cego, gigante e paciente. Sem itens, sem vida, sem cura: **um olhar mata e um toque mata** — a única defesa é se esconder. Oito andares separam você da coroa do rei morto, dormindo no fundo do acervo dela, e a fuga é pelo portão do térreo, trinta metros acima.

As escolhas técnicas seguem a mesma lógica de limites que viram forças. *Rust* compilado direto para *WebAssembly*, **zero crates, zero alocação** — a *ABI* é crua, as estruturas vivem em endereços fixos e o *glue* de *JavaScript* cria as *views* uma vez, para sempre. Todo o estado cabe na memória linear do binário, que tem menos de 60 KB. O som é 100% sintetizado em *WebAudio*, zero *samples*. O filtro de monitor de tubo é *CSS* puro. Nada de servidor, nada de rede: o jogo roda inteiro no navegador, num *tick* fixo de 140 ms. Cada limitação era uma decisão de design — e o [ARCHITECTURE.md](https://github.com/VictorHugoBatista/castle-of-basilisk/blob/master/ARCHITECTURE.md) registra o porquê de todas.

![A tela de título do Castle of Basilisk: a logo em fonte DENTE com os olhos vermelhos](/portfolio/content/image/castle-of-basilisk-titulo.png)

*A tela de título: a fonte DENTE, com a fileira de cima pendendo da gengiva e a de baixo erguendo do chão*

### O medo nunca mata

O primeiro sistema grande de *gameplay* foi o medo. Exposição à criatura sobe rápido e desce devagar, e o topo da barra traz as alucinações: fantasmas, um falso basilisco, uma coroa-fantasma — todas vivem só no *render*, elas não existem no mundo, existem na sua cabeça. E aqui veio a decisão que define o jogo: em versões anteriores a loucura matava, e eu tirei a morte dela. **O medo nunca mata** — o 100 é o *COLAPSO*, o teatro máximo com o mundo tremendo e a vinheta fechando, e você joga vivo. De quebra, um freio no limiar: perto da loucura o susto rende menos, porque o medo precisa dar tempo de ver o mundo quebrar e de quebrar a linha de visão a tempo. E ele só avança pelo que você *vê*: susto miúdo alimenta os efeitos, não o topo.

A parte que mais diverte no processo é que nada disso entra sem número. Cada ajuste roda numa bancada de telemetria (`fear_bench`), e o *commit* carrega o antes e o depois: "bench: loucura 8 -> 5/40". As mensagens de *commit* são densas de propósito, em português, minúsculas, contando o que mudou e por quê — o histórico do repositório virou um *devlog* por si só.

### Oito andares, oito temperamentos

A geração procedural é por temperamento, e cada tema tem uma fase própria de construção dentro do `gen_once`. O térreo nasce palácio: primeiro os grandes salões (11–15 × 7–9), separados por fio de parede, que recebem a colunata interna — colunas a cada três tiles, com vãos de dois; depois os cômodos, pequenos, pendurados na parede de um salão com exatamente um tile de parede no meio — os gargalos viram portas. E cômodo pendurado em cômodo viraria vizindário, não palácio: o pai é sorteado só entre os salões.

![O térreo do jogo em ASCII: cômodos, pilares e o jogador em um salão, com o HUD e a dica na barra inferior](/portfolio/content/image/castle-of-basilisk-terreo.png)

*O térreo, RUINAS DO CASTELO: cômodos pendurados nos salões, pilares e a dica de sempre na barra*

As masmorras vestem ala de celas: três galerias empilhadas de corredor largo, com celas 2×2 dos dois lados — e cada cela sorteia o próprio destino: trancada (a porta vira grade `|` para sempre: a luz atravessa, os pés não), aberta (portas duplas e caveira `¥` nos restos), meia (porta de um lado, barra do outro) ou lacrada (maciço de rocha). De três a cinco corredores de serviço, nascidos em vãos de rocha, costuram as galerias; a entrada mora no centro da primeira e a descida no fim leste da última — a travessia da masmorra é a passeada inteira. No andar fundo, poças rasas encharcam corredor e chão de cela.

![A masmorra do jogo: a galeria de corredor largo com celas de grades e caveiras, o jogador no corredor](/portfolio/content/image/castle-of-basilisk-masmorra.png)

*A masmorra: a ala de celas com as grades — a luz atravessa, os pés não — e caveiras nos restos*

O esgoto é a rede imperial: um ou dois rios verticais de teto a fundo, leito de um a cinco de largura, flanqueados por margens secas de alvenaria — dá para andar na beira sem molhar o pé — e os lados meandram devagar, linha a linha: o rio não é reta de régua. Os desabamentos caem em montinho irregular, com bordas escalonadas e cacos de `%` espalhados para fora, fechando margem e leito de uma vez; as funduras `÷` afundam a galeria inteira — água demais até para ela — e cada canal é garantido de uma caverna seca que corta o leito: o vão da cisterna é a ponte.

![O esgoto do jogo: a câmara do jogador cercada pelos canais imperiais verticais de água](/portfolio/content/image/castle-of-basilisk-esgoto.png)

*Os Canais Envenenados: rios verticais de água flanqueados por margens secas de alvenaria*

E a Bocarra é a casa da casa: nove a doze câmaras irregulares — círculos desdentados, raio a sorte, o centro jamais vira parede — ligadas por túneis tortos de *random walk* (sete em cada dez passos rumam ao destino, três vagam). O detalhe que dá o terror do lugar é o acervo: ossos e corpos preenchem o chão num gradiente que cresce rumo à coroa — cerca de 15% do chão nos andares 6–7, e no 8 a densidade sobe de 12% longe até ~58% perto do ferro, com a cama de corpo 7×7 em volta. A coroa dorme no meio do monte, e o acervo só enche depois que o lugar dela é escolhido: o gradiente é ancorado na coroa de verdade.

![O acervo no andar 8: a câmara cheia de caveiras em volta do jogador, com a vinheta vermelha do medo no máximo](/portfolio/content/image/castle-of-basilisk-bocarra.png)

*O acervo dela no andar 8: caveiras e corpos em volta e a vinheta do medo cravado em 100*

Por cima dos temas, regras que valem no castelo inteiro: a descida nunca nasce colada na entrada (um campo de BFS desde o `<` adjudica o lugar — palácio e masmorra exigem 16 passos de rota, o esgoto 20, a Bocarra 22); o fragmento sombrio `¤` sorteia a própria região numa grade 3×3 do mapa, em stream de *RNG* própria e aquecida, para seeds vizinhas não saírem casadas; e regenerar um andar é determinístico — o mesmo seed reproduz o mesmo mapa, subir e descer nunca redesenha o lugar. E o detalhe que fecha o ciclo de design: cada mudança de geração passa pela bancada do bot que joga sozinho. Quando a escada de descida passou a nascer longe da entrada — decisão minha, para a travessia doer — as vitórias do bot caíram de 15/80 para 7/80. Travessia longa é mais exposição; o jogo ficou honestamente mais difícil, e o número está no *commit*.

### Som de oscilador, não de arquivo

O áudio deu os aprendizados mais físicos. A primeira versão do vento do térreo tinha *LFO* periódico de amplitude — e soava como mar, não como vento; a correção foi trocar oscilador por *scheduler* irregular de rajadas. O sibilo dela virou o prato longo de cobra mesmo, que só existe de perto — e um sopro em três nem sai: **o silêncio dela é o aviso**. E o pulso do coração nasceu num erro de física acústica bonito: a primeira versão morava em 50–74 Hz, faixa que alto-falante de *laptop* reproduz nulo — o som existia, o navegador tocava, e o ouvido nada recebia. O batimento migrou para a banda da pele do tambor, e o coração passou a valer como som de corpo no fundo do acervo.

O lugar também toca: cada andar tem uma trilha ambiente própria, e descer um andar troca a trilha com *fade*. No térreo sopra o vento — corpo grave de ruído, assobio de fresta fina e rajadas de duração e espaçamento sorteados, que nunca repetem o mesmo intervalo. Na masmorra, o som é o silêncio sepulcral: quase nada soa lá, os efeitos ficam até abafados, e a cada 16–40 segundos um estalo mínimo de pedra deixa o ouvido tenso. No esgoto, goteiras agudas com eco de cisterna. E na Bocarra o acervo responde: o ping chega gordo (trinta metros de rio por cima), o vento grande devolve eco de 0,38 s em cada rajada — é o tamanho da caverna falando — e dois pares de osciladores desafinados batem devagar no grave e rápido no agudo, o desconforto de um ar que não afina. A regra que amarra tudo: quando ela entra em caça, o ambiente inteiro emudece — rajada não sai, goteira para, a caverna prende a respiração. O silêncio vira o momento mais assustador do jogo.

E todo som de mundo é localizado. O *panning* vem da coluna: a diferença de posição entre você e a fonte vira esquerda e direita no *StereoPanner*. O volume e o brilho vêm da distância: de perto o sibilo fica mais agudo e rasante, e o coração bate mais alto no peito. A divisão de trabalho segue a arquitetura do jogo: o *Rust* decide *quando* o som acontece (publica o evento no *ring buffer* de memória), o *JavaScript* decide *como* ele soa. E tem a exceção que mais gosto: as alucinações soam sem *pan* nenhum, centralizadas — o arrasto de escamas do corpo falso vem de lugar nenhum, porque ele acontece dentro da sua cabeça.

### Até o processo tem commits

Quem leu o post dos agentes sabe da minha tese: **agentes aceleram, humanos decidem**. O Castle of Basilisk é a prova mais divertida disso, e o `AGENTS.md` do repositório é a cerca: *branch* tipada por domínio, *gate* de testes antes de cada *commit* (testes *headless* + bancada quando mexe no medo), *pull request* com o quê/porquê/como testar/números, *review* automático rodando sobre o diff do PR — e a regra que resume o ano: **o *merge* é sempre decisão do dono**; o agente abre o PR e para. O melhor é que o processo próprio evolui por PRs de correção: o *merge* virou tema de PR, o *review* migrou para depois do PR, o *amend* foi banido. A cerca aprende com os próprios furos.

Os documentos seguem o mesmo rigor vivo: `ARCHITECTURE.md` é atualizado no mesmo *commit* que muda qualquer contrato; o `LORE.md` guarda o canon que a tela nunca conta (com lacunas abertas de propósito); e o `INSPIRACOES.md` nasceu com regra de casa: inspiração nova entra no *MESMO commit* que a arte que ela originou. E o *review* pega o que a automação não pega, tipo o "fantasma" da placa do HUD e a abertura (ops, spoiler rs) que ficava preta por 66 segundos — um `NaN` na primeira *frame*, provado com *shim* de DOM no *node* (e sim, ela ainda está em desenvolvimento: por isso ela não ganhou print no post). Até a logo passou por isso: nasceu a fonte DENTE, onze letras de 5×6 pixels onde a fileira de cima pende da gengiva e a de baixo ergue do chão — incluindo o S em pé, porque o S espelhado fazia o título se ler **BAZILISK**.

### O que o castelo ensinou até agora

A lição do projeto até agora é a mesma do ano, só que com trilha sonora: a cerca libera. Zero *crates* porque foi decisão minha; o medo nunca mata porque decidi que é um jogo de tensão, não de punição; o *wasm* comitado junto do código porque o histórico tem que mostrar cada passo. O agente digita rápido demais para quem está decidindo — e é exatamente por isso que cada decisão precisa estar escrita antes, na doc e no processo. No fim, jogo bom é como sistema bom: perde o propósito se a sensação não foi decidida por alguém, lembre-se disso!

No mais, fiquem com os links:

 - [Castle of Basilisk — jogue no navegador](https://victorhugobatista.github.io/castle-of-basilisk/)
 - [Repositório do jogo](https://github.com/VictorHugoBatista/castle-of-basilisk)
 - [Como comecei a construir agentes de IA — o post anterior](/portfolio/#/blog/como-comecei-a-construir-agentes-de-ia)
 - [Light SDD Workflow — o estudo](https://github.com/VictorHugoBatista/light-sdd-workflow)

Obrigado e até mais o/

--------

PS: A tela de controles esconde um código antigo demais para ser coincidência. Não vou dizer mais nada o/

PS2: O canon tem lacunas abertas de propósito e o castelo ainda tem história por contar — quem sabe não rende um segundo *devlog* quando ele fechar hein??
