import newSpeedSnakeGameImage from "../images/content/new-speed-snake-game.jpg";
import oldSpeedSnakeGameImage from "../images/content/old-speed-snake-game.jpg";
import frutigerEcoImage from "../images/content/frutiger-eco.png";

export const blog = [
//   {
//     link: 'cubos-magicos',
//     title: 'Cubos mágicos',
//     date: '08/10/2025',
//     tags: [
//       'Estilo de vida',
//       'Hobbies',
//     ],
//     content: `### Lorem Ipsum
//
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
//
// ### nova sessão
//
// Teste Sessão
//
// ### minha lista
//
//  - primeiro
//  - segundo
//  - terceiro
// `,
//   },
//   {
//     link: 'redescobrindo-o-java',
//     title: 'Redescobrindo o Java',
//     date: '08/10/2025',
//     tags: [
//       'Devlog',
//       'Spring Boot',
//     ],
//     content: `### Lorem Ipsum
//
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
//
// ### nova sessão
//
// Teste Sessão
//
// ### minha lista
//
//  - primeiro
//  - segundo
//  - terceiro
// `,
//   },
  {
    link: 'desenvolvi-um-jogo-e-aqui-esta=o-processo',
    title: 'Desenvolvi um jogo e aqui está o processo',
    date: '08/10/2025',
    tags: [
      'Devlog',
      'Tecnologia',
      'React',
    ],
    content: `Desde que voltei ao desenvolvimento web, venho me atualizando com o estado
do ReactJS. Minha primeira iniciativa foi seguir com meus projetos de construir meu
site pessoal, com blog de tecnologia e portfólio. Inclusive, esse é o resultado parcial
dessa meta! Ainda pretendo falar mais sobre as minhas escolhas sobre esse layout, mas
isso é outra história, porque hoje é dia para falar sobre meu segundo projet: refazer SpeedSnake - o snake
game que eu desenvolvi dez anos atrás. Jogo esse que me ajudou a garantir uma indicação
para meu primeiro trabalho de programação integral!

### Encontrando o futuro no passado

Enquanto voltava aos meus repositórios antigos do github, me lembrei do jogo que desenvolvi anos
atrás e decidi tornar ele acessível novamente, mas dessa vez no Github Pages.

O jogo tinha um sistema de níveis que aumentava a dificuldade a cada dez pontos até o nivel 13.
Alterando as cores e a trilha sonora (todas músicas de artistas do selo [Chippanze](https://chippanze.bandcamp.com/music)
da cena brasileira de chiptune/lofi) em um número arbitrário de níveis, até alcançar o nível 13 e final, em que
as cores trocam sem parar. Ali você poderia ficar pontuando sem parar, provando até aonde poderia ir naquela dificuldade.
Esse conceito foi inspirado diretamente nos jogos Hexagon/Super Hexagon, de
[Terry Cavanagh](https://terrycavanaghgames.com/) (desenvolvedor de outros jogos indie como Don't Look Back,
VVVVVV, Dicey Dungeons e muitos outros).

Senti uma nostalgia boa da época em que eu estudei e construí esse projeto, porém me senti incomodado ao olhar para
aquele código ultrapassado, aquele layout sem responsividade. 2015 era outro mundo, mas o presente é portátil.
Segundo uma [notícia](https://www.cnnbrasil.com.br/tecnologia/mais-de-92-milhoes-de-brasileiros-acessam-a-internet-apenas-pelo-celular-diz-pesquisa/)
de 2023 da CNN Brasil, mais de 92 milhões de brasileiros acessam a internet apenas por celular. Não dá mais para ignorar isso.

![Versão de 2015 do jogo](${oldSpeedSnakeGameImage})

**Versão de 2015 do jogo**

Movido por tudo isso, criei o objetivo de refazer o jogo em React, fazendo melhorias técnicas e alterando o layout.

### Cara e coração

Aparência comunica mais do que palavras. Por exemplo, dá para perceber apenas por esse site
o quanto eu gosto de temas retrô e layouts que representem uma ideia. E foi exatamente o que
fiz ao pensar na nova versão do jogo.

O objetivo é simples, passar a sensação de estar jogando um Snake Game em um Nokia tijolão em meados
de 2005. A primeira ideia seria reproduzir a tela monocromática de um celular da época.
Porém, eu gostaria das cores, as formas arredondadas, as transparências, e a esperança por um futuro
melhor que futurismo dos anos 2000 proporcionava (pesquise sobre Solarpunk e Frutiger Aero Aero),
e foi isso que eu tentei alcançar com esse novo visual do jogo.

![Futuro utópico sonhado nos anos 2000](${frutigerEcoImage})

**Futuro utópico sonhado em meados dos anos 2000. [Aesthetics Wiki](https://aesthetics.fandom.com/wiki/Frutiger_Aero)**

Sem querer, acabei por usar as cores da abertura de algumas temporadas antigas da série/novela Malhação,
(transmitida na TV Globo entre 1995 e 2020), o subconsciente támbém tem dessas, né. Espero que você
sinta a mesma nostalgia ao jogar que eu senti ao construir esse jogo.

![Versão nova do jogo](${newSpeedSnakeGameImage})

**Versão nova do jogo**

### Construção e ferramentas

Agora vamos às ferramentas utilizadas. Primeiro, vamos dar um passo atrás e falar da versão de 2015: ela foi
feita com HTML, jQuery e CSS. Direto ao ponto. Além disso, baixei as libs [Ion Sound](https://github.com/IonDen/ion.sound)
e [TouchSwipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin) diretamente no projeto, dado
que eu ainda não havia descoberto as ferramentas de gerenciamento de pacotes de front (só havia visto um pouco
do Maven ao desenvolver Java na época). Já havia alguma separação de responsabilidades, considerando que eu
já tinha background de Java na faculdade e nos primeiros trabalhos como desenvolvedor. A renderização na tela
foi feita com elementos do DOM mesmo, sem nenhum tipo de canvas! Isso mesmo: as divs eram adicionadas direto no DOM
e suas propriedades de posição atualizadas à cada iteração do loop do jogo (que nessa versão, não era separada do FPS).
Não sei como as máquinas da época rodavam aquilo :v

Com os anos, eu conheci novas tecnologias e filosofias, o que foi fundamental para o que veio a ser a nova versão.
O jogo usa principalmente ReactJS, [Konva](https://github.com/konvajs/konva) (uma implementação de Canvas em HTML5,
com pacotes específicos disponíveis para React, Vue Angular e Svelte) e o [Zustand](https://github.com/pmndrs/zustand)
(lib que implementa uma solução de gerenciamento de estados globais e HTTP). Unindo todos esses elementos, uma lógica
mais reusável e pronta para novas funcionalidades.

### As regras do jogo

O jogo em si foi implementado no diretório [/game](https://github.com/VictorHugoBatista/SpeedSnake/tree/master/src/game)
(com exceção dos hooks). Mais específicamente, a lógica pesada ficou inteira nos estados do Zustand: o jogo conta com
o estado principal \`gameArea\`, que une todos os elementos que serão exibidos no canvas, e separado, os estados das
divisões do personagem e a comida, para facilitar os calculos dos passos: \`snake\` e \`food\`. Isso facilita
a renderização de formas diferentes para tipos diferentes de entidades, além da futura adição de tipos de entidades diferentes!

Além disso, agora o FPS é separado das iterações do jogo. O estado \`gameLoopIterationTimeAccumulator\` vai acumulando
até o tempo para a execução da nova iteração chegar (constante \`iterationTimeInMilliseconds\`). Algo parecido foi
implementado no timer exibido antes do jogo (claramente inspirado nos jogos do Megaman). O loop do jogo, além de outras
coisas, estão implementados como hooks do React.

Não vou me ater à mais detalhes técnicos, dado que o código é aberto: é possível visualizar, executar no seu local e até
mesmo fazer um fork! (por isso git é minha ferramenta favorita de todos os tempos, junto do terminal Linux)

O que eu posso dizer é que já existem novos passos à serem feitos, tanto em novas funcionalidades como em refatoração
de código.

### Próximos passos

Para ser sincero, não sei se gostaria de voltar com um sistema de pontuação (opinião polêmica?). Porém, vou implementar
um sistema de seleção de labirintos, além de aumentar a dificuldade progressivamente com o avanço do jogo e
criar níveis de dificuldade diferentes já no começo de cada jogo. Sem falar em melhorar a experiência mobile: a área de
jogo precisa ser menor e o tempo de reação parece ser maior ao interagir com a tela, e não com um teclado (dados com
base na minha própria experiência e dispositivo móvel). Provavelmente vou precisar manter a velocidade um pouco
menor no mobile para considerar o mesmo nível de dificuldade que no desktop, mas ainda preciso estudar e adquirir mais
base para decidir. Quem sabe esse tema não gere um novo artigo aqui hein??

No mais é isso, obrigado por ler esse estudo de design, usabilidade, implementação web e acima e tudo humanidade. Qualquer
dispositivo e qualquer aplicação perde o seu propósito se não tiver ninguém para usar, lembre-se disso!

Agora seguem os links do jogo no girhub pages e do repositório em si:

 - [Jogo no github pages](https://victorhugobatista.github.io/SpeedSnake/)
 - [Repositório](https://github.com/VictorHugoBatista/SpeedSnake)
 
 Obrigado e até mais o/
 
 --------
 
 PS: Não mencionei, mas é possível jogar a versão antiga de 2015 ao clicar no link Legacy, no header o/
 
 PS2: Existe uma regra base que mudou entre as duas versões, jogue e descobra!`,
  },
];

export const getPost = link => {
  const [ post ] = blog
    .filter(post => post.link === link);
  if (! post) {
    return null;
  }

  return post;
};
