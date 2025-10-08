export const blog = [
  {
    link: 'cubos-magicos',
    title: 'Cubos mágicos',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Hobbies',
    ],
    content: `***Lorem Ipsum***

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.

***nova sessão***

Teste Sessão

***minha lista***

 - primeiro
 - segundo
 - terceiro
`,
  },
  {
    link: 'redescobrindo-o-java',
    title: 'Redescobrindo o Java',
    date: '08/10/2025',
    tags: [
      'Devlog',
      'Spring Boot',
    ],
    content: `***Lorem Ipsum***

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.

***nova sessão***

Teste Sessão

***minha lista***

 - primeiro
 - segundo
 - terceiro
`,
  },
  {
    link: 'refazendo-meu-jogo',
    title: 'Refazendo meu jogo',
    date: '08/10/2025',
    tags: [
      'Devlog',
      'React',
    ],
    content: `***Lorem Ipsum***

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.

***nova sessão***

Teste Sessão

***minha lista***

 - primeiro
 - segundo
 - terceiro
`,
  },
  {
    link: 'desenvolvendo-meu-site-em-react',
    title: 'Desenvolvendo meu site em React',
    date: '08/10/2025',
    tags: [
      'Devlog',
      'Tecnologia',
      'React',
    ],
    content: `***Lorem Ipsum***

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.

***nova sessão***

Teste Sessão

***minha lista***

 - primeiro
 - segundo
 - terceiro
`,
  },
  {
    link: 'codigo-como-hobbie',
    title: 'Código como hobbie',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
    content: `***Lorem Ipsum***

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.

***nova sessão***

Teste Sessão

***minha lista***

 - primeiro
 - segundo
 - terceiro
`,
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
