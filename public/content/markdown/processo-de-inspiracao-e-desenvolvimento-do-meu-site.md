Como falado no [post anterior](/portfolio/#/blog/desenvolvi-um-jogo-e-aqui-esta-o-processo), vou falar hoje sobre o processo de criação desse site, além da solução de gerenciamento de conteúdos adotada para a página do blog e a futura página de projetos. Aperte os cintos para mais uma viagem pelo ciberespaço!

### Descobrindo minha necessidade

A criação de um sistema não começa no meio digital, mas sim na necessidade das pessoas. Toda solução técnica adotada é uma resposta para algo orgânico, ignorar isso faz todo o resto perder seu propósito. 

A minha necessidade era criar um site para expor minha experiência no meio de desenvolvimento através de:

- uma página de resumo,
- uma história da minha trajetória até agora,
- um *blog* e
- um *portfólio*.

Além disso, esse site precisaria mostrar minhas capacidades de *frontend* por si só e comunicar uma ideia.

### O futuro está no passado

Antes de seguir em frente, vou precisar recuar alguns anos: eu sempre gostei de histórias retrofuturistas. *O Quinto Elemento* foi meu filme favorito por anos, além disso, já li o *Neuromancer* e *Andróides Sonham com Ovelhas Elétricas?* algumas vezes. Para completar, a estética dos dispositivos eletrônicos como *Evangelion* e as leituras dos fãs sobre o próprio *Neuromancer* sempre me fascinaram. Elas sempre parecem saídas direto de dez anos no futuro, independente da época em que eu esteja. Além disso, simplicidade desses *gadgets* é algo mágico, mas não perde aquele aspecto "descolado". Veja por si só:

----

![Tempo restante da bateria dos **mechas** na série **Evangelion**](/portfolio/content/image/interfaces-evangelion-timer.jpg)

*Tempo restante da bateria dos **mechas** na série **Evangelion***

----

!["**walkman**" icônico do protagonista de **Evangelion**, **Ikari Shinji**](/portfolio/content/image/interfaces-evangelion-casette-player.jpg)

*"**Walkman**" icônico do protagonista de **Evangelion**, **Ikari Shinji***

----

![Leitura de um **Ono Sendai**, computador do universo dos livros de **Neuromancer**](/portfolio/content/image/interfaces-neuromancer-ono-sendai.jpeg)

*Leitura de um **Ono Sendai**, computador futurista do universo dos livros de **Neuromancer**. Citado na [wiki das obras do autor](https://williamgibson.fandom.com/wiki/Ono-Sendai_Cyberspace_VII)*

----

Decidido, esse foi meu ponto de partida. Imagine um futuro alternativo onde as telas de computador evoluíram desses tipos de telas. Cores quase monocromáticas, layouts extremamente simples e fontes pixeladas e um poder de processamento apenas visto em ficção científica. Essa é a sensação que eu quero causar.

### Construindo uma ideia

A escolha das fontes foi uma busca natural no *Google Fonts*. A fonte [*Bitcount*](https://fonts.google.com/specimen/Bitcount) ficou nos títulos e a fonte [*Doto*](https://fonts.google.com/specimen/Doto) ficou no texto em geral. A moldura do monitor de tubo dá toda uma imersão para o ambiente, essa moldura também está presente na versão mobile, sugerindo um dispositivo que combina os *smartphones* de hoje com os *[PDAs](https://en.wikipedia.org/wiki/Personal_digital_assistant)* antigos.

----

![**PDA Palm**, com sua tela **LCD** monocromática](/portfolio/content/image/dispositivo-pda.jpg)

***PDA Palm**, com sua tela **LCD** monocromática.*

----

Essa tela de **LCD** é praticamente monocromática, com exceção de detalhes, como nas imagens e *links* e os *banners*. Essa é a minha forma de dizer que eu gosto de arte / fontes ASCII sem dizer. Encontrei uma [lib *react*](https://github.com/samuelweckstrom/react-ascii-text) bem interessante, que parece implementar as fontes do site [*Text to ASCII Art Generator*](https://patorjk.com/software/taag/) de uma forma muito interessante, com efeitos de transição. Adotei para exibir palavras chave que julgo importantes nos *banners*. Coloquei uma cor diferente de todo o resto para destacar.

Falando em destaque, coloquei um efeito no título do site que dá a impressão que o texto sai uma camada da tela, como se nesse universo as telas tivessem uma tecnologia 3D para olho nu por padrão. Imagine posicionar um elemento no eixo Z e ele parecer estar alguns milímetros na frente da tela!

E por fim, e mais divertido: o efeito de tela de monitor de tubo. Usei e adaptei a solução descrita em um [post de 2017](https://aleclownes.com/2017/02/01/crt-display.html). Dessa forma, esse contraste entre o novo e o antigo estava completo.

Porém, como eu falei no começo, eu ainda queria colocar um blog e um portifólio no ar. O problema? Hospedar isso no *Github Pages*.

### Problemas e soluções técnicas

Depois que o escopo foi definido, o layout desenhado (que fique claro que não tenho formação de design, "desenhei" o layout com base em HTML e CSS mesmo), chegou a hora de focar nos problemas técnicos reais que foram criados, e o meu problema era subir um *blog* sem usar bancos de dados.

Um *blog* e um *portfólio* pequenos não precisam da engenharia incrível e complexa de *CMSs* grandes de mercado, como o *WordPress* ou soluções parecidas. Por isso eu pensei em adotar algo muito mais simples e minimalista: já ouvi algumas vezes sobre pessoas que criaram blogs com base em arquivos [*markdown*](), uma linguagem de marcação, que converte sua sintaxe para HTML, por exemplo, **\# Título** é uma tag \<H1\>, **\## Título** é um \<H2\> e assim por diante.

Bom, para subir o *MVP* e ter o primeiro **post** do **blog**, fiz o mais básico: um *array*/conjunto de posts na memória, com título, data, *tags* e conteúdo. Exibir o título, data e *tags* na tela de listagem e o conteúdo na tela de detalhes. Nenhuma consulta em banco ou **request** de **API** necessários. Pronto, *blog* feito!

...

Não é?

Apenas um post fez o meu arquivo de conteúdo ficar com 190 linhas, imaginei quando forem só cinco, imagine dezenas deles. Esse débito técnico precisava ser resolvido.

### Finalizando a funcionalidade de blog

E se eu pudesse ter arquivos *markdown* estáticos prontos para serem resgatados por meio de requisições *ajax* a partir da minha aplicação no navegador? Tudo estaria resolvido... Mas espera, isso É possível!

Tudo que precisei fazer foi colocar todos meus arquivos de conteúdo do blog no diretório `public` do *react*, remover o conteúdo do post da minha listagem (que foi para 12 linhas, com um post listado).

----

![Arquivo com a listagem de posts, sem o conteúdo](/portfolio/content/image/code-blog-content.png)

*Arquivo com a listagem de posts, sem o conteúdo*

----

O fluxo é simples: a tela de listagem exibe tudo do meu *array* de posts (agora sem o conteúdo). Ao clicar no *link*, o visitante continua sendo mandado para uma rota com url dinâmica do *react*, que vai buscar se o *post* existe no próprio *array* de posts já carregado em memória. Tudo muito rápido.

Em caso de negativa, o visitante é mandado para uma tela de 404 (isso só vai acontecer se você manipular o *link*, mas gosto de ter esses casos cobertos). Mas a mágica acontece quando o post existe: uma *request ajax* é feita buscando pelo conteúdo do post pela propriedade *link* como um arquivo *markdown* armazenado no diretório `public`. Ao encontrar e recuperar o arquivo, o conteúdo é renderizado na tela normalmente, por meio da lib [react-markdown](https://github.com/remarkjs/react-markdown).

----

![**React hook** que obtêm o conteúdo de um post](/portfolio/content/image/code-post-content-hook.png)

***React hook** que obtêm o conteúdo de um post*

----

Para o visitante do site, o comportamento é praticamente o mesmo, mas agora o tamanho do *javascript* da aplicação *react* carregado pelo navegador é muito menor e cada conteúdo de *blog* apenas será carregado na sua tela de detalhes.

Como toda essa funcionalidade está separada em componentes, será fácil reutilizar para as páginas de projetos, meu próximo objetivo desse site.

A solução completa se encontra no [*GitHub*](https://github.com/VictorHugoBatista/portfolio).

### Propósito, aprendizado e evolução

Foi muito divertido aprender e fixar todos os novos conceitos de *react*, mas boa parte dessa diversão não se deve à tecnologia por si, mas em todo o propósito apresentado nesse *post*. Se não fosse pela minha necessidade, esse ciclo de aprendizado teria sido muito mais tedioso. O que deu cores para todo esse momento foi justamente me desafiar criando e montando um *layout*, me inspirando nas minhas obras favoritas de ficção científica, descobrir minhas necessidades e então, só então, me dar conta dos problemas que eu precisaria lidar.

Sem propósito, tudo fica muito mecânico e tudo se esquece muito fácil. Nada que se conquista em vão perdura por muito tempo. Em contraparte, tudo que é aprendido com propósito se torna parte de quem nós somos.

Muito obrigado e até mais o/
