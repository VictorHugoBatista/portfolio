Como falado no [post anterior](), vou falar hoje sobre o processo de criação desse site, além da a solução de gerenciamento de conteúdos adotada para a página do blog e a futura página de projetos. Aperte os cintos para mais uma viagem pelo ciberespaço.

### Descobrindo minha necessidade

A criação de um sistema não começa no meio digital, mas sim na necessidade das pessoas. Toda solução técnica adotada é uma resposta para algo orgânico, ignorar isso faz todo o resto perder o propósito. 

A minha necessidade era criar um site para expor minha experiência no meio de desenvolvimento através de: uma página de resumo, uma história da minha trajetória até agora, um *blog* e um *portfólio*. Além disso, esse site precisaria mostrar minhas capacidades de *frontend* por si só e comunicar uma ideia.

### O futuro está no passado

Eu sempre gostei de histórias retrofuturistas. *O Quinto Elemento* foi meu filme favorito por anos, além disso, já li o *Neuromancer* e *Andróides Sonham com Ovelhas Elétricas?* algumas vezes. Para completar, a estética das telas *LCD* de *Ghost In The Shell*, *Evangelion* e *Digimon Adventure* sempre me fascinaram. Principalmente os relógios/cronômetros digitais. Elas sempre parecem saídas direto de dez anos no futuro, independente da época em que eu esteja. Além disso, simplicidade dessas telas é algo mágico, mas não perde aquele status de "descolado".

Decidido, esse foi meu ponto de partida. Imagine um futuro alternativo onde as telas de computador evoluíram desses tipos de telas. Cores quase monocromáticas, layouts extremamente simples e fontes pixeladas para um poder de processamento apenas visto em ficção científica. Essa é a sensação que eu quero causar.

### Construindo uma ideia

A escolha das fontes foi uma busca natural no *Google Fonts*. A fonte [*Bitcount*](https://fonts.google.com/specimen/Bitcount) ficou nos títulos e a fonte [*Doto*](https://fonts.google.com/specimen/Doto) ficou no texto em geral. A moldura do monitor de tubo dá toda uma imersão para o ambiente, essa moldura também está presente na versão mobile, sugerindo um dispositivo que combina os *smartphones* de hoje com os *PDAs* antigos. Essa tela de **LCD** é praticamente monocromática, com exceção de detalhes, como nas imagens e *links* e os *banners*.

Essa é a minha forma de dizer que eu gosto de arte / fontes ASCII sem dizer. Encontrei uma [lib *react*](https://github.com/samuelweckstrom/react-ascii-text) bem interessante, que parece implementar as fontes do site [*Text to ASCII Art Generator*](https://patorjk.com/software/taag/) de uma forma muito interessante. Adotei para exibir palavras chave que julgo importantes nos *banners*. Coloquei uma cor diferente de todo o resto para destacar.

Falando em destaque, coloquei um efeito no título do site que dá a impressão que o texto sai uma camada da tela, como se nesse universo as telas tivessem uma tecnologia 3D para olho nu por padrão. Imagine posicionar um elemento no eixo Z e ele parecer estar alguns milímetros na frente da tela!

E por fim, e mais divertido: o efeito de tela de monitor de tubo. Usei e adaptei a solução descrita em um [post de 2017](https://aleclownes.com/2017/02/01/crt-display.html). Dessa forma, esse contraste entre o novo e o antigo estava completo.

Porém, como eu falei no começo, eu ainda queria colocar um blog e um portifólio no ar. O problema? Hospedar isso no *Github Pages*.

### Problemas e soluções técnicas

Depois que o escopo foi definido, o layout desenhado (que fique claro que não tenho formação de design, "desenhei" o layout com base em HTML e CSS mesmo), chegou a hora de focar nos problemas técnicos reais que foram criados, e o meu problema era subir um *blog* sem usar bancos de dados.

Um blog e um portfólio pequenos não precisam da engenharia incrível e complexa de *CMSs* grandes de mercado, como o *WordPress* ou soluções parecidas. Por isso eu pensei em adotar algo muito mais simples e minimalista: já ouvi algumas vezes sobre pessoas que criaram blogs com base em [*markdown*](), uma linguagem de formatação de texto, onde por exemplo **\# Título** é um H1, **\## Título** é um H2 e assim por diante.

Bom, para subir o MVP e ter o primeiro post do blog, fiz o mais básico: um *array*/conjunto de posts na memória, com título, data, *tags* e conteúdo. Exibir o título, data e *tags* na tela de listagem e o conteúdo na tela de detalhes, pronto, *blog* feito. Não é?

Apenas um post fez o meu arquivo de conteúdo ficar com 190 linhas, imaginei quando forem só cinco, imagine dezenas deles. Esse débito técnico precisava ser resolvido.

### Finalizando a funcionalidade de blog

E se eu pudesse ter arquivos *markdown* estáticos prontos para serem resgatados por meio de *ajax* a partir da minha aplicação no *front*? Tudo estaria resolvido... Mas espera, isso é possível!

Tudo que precisei fazer foi colocar todos meus arquivos de conteúdo do blog no diretório `public` do *react*, remover o conteúdo do post da minha listagem (que foi para 31 linhas, com dois possíveis posts futuros comentados).

O fluxo é simples: a tela de listagem exibe tudo do meu *array* de posts (agora sem o conteúdo). Ao clicar no link, o visitante continua sendo mandado para uma rota com url dinâmica do *react*, que vai buscar se o post existe no próprio *array* de posts já carregado em memória. Tudo muito rápido.

Em caso de negativa, o visitante é mandado para uma tela de 404 (isso só vai acontecer se você manipular o link, mas gosto de ter esses casos cobertos). Mas a mágica acontece quando o post existe: uma *request ajax* é feita buscando pelo conteúdo do post como um arquivo *markdown*, que eu deixei no diretório `public`. Ao encontrar e recuperar o arquivo, o conteúdo é renderizado na tela normalmente.

Mas agora o tamanho do *javascript* da aplicação *react* carregado pelo navegador é muito menor, e cada conteúdo de *blog* apenas será carregado na sua tela de detalhes.

Como toda essa funcionalidade está separada em componentes, será fácil reutilizar para as páginas de projeto, meu próximo objetivo desse site.

### Propósito, aprendizado e evolução

Foi muito divertido aprender e/ou fixar todos os novos conceitos de *react*, mas boa parte dessa diversão não se deve à tecnologia por si, mas em todo o propósito apresentado nesse post. Se não fosse pela minha necessidade, esse ciclo de aprendizado teria sido muito mais tedioso. O que deu cores para todo esse momento foi justamente me desafiar montando um *layout*, me inspirando nas minhas obras favoritas de ficção científica, ter a ideia do que eu gostaria na minha cabeça e então, só então, me dar conta dos problemas que eu precisaria lidar e buscar o que eu ainda precisaria aprender.

Sem propósito, tudo fica muito mecânico e tudo se esquece muito fácil. Nada que se conquista em vão perdura por muito tempo. Em contraparte, tudo que é aprendido com propósito se torna parte de quem nós somos.

Muito obrigado e até mais o/
