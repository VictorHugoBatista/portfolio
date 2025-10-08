export const blog = [
  {
    link: 'cubos-magicos',
    title: 'Cubos mágicos',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Hobbies',
    ],
  },
  {
    link: 'redescobrindo-o-java',
    title: 'Redescobrindo o Java',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
  },
  {
    link: 'desenvolvendo-um jogo-em-react',
    title: 'Desenvolvendo um jogo em React',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
  },
  {
    link: 'desenvolvendo-meu-site-em-react',
    title: 'Desenvolvendo meu site em React',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
  },
  {
    link: 'codigo-como-hobbie',
    title: 'Código como hobbie',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
  },
];

export const getPost = link => {
  const [ post ] = blog.filter(post => post.link === link);
  if (! post) {
    return null;
  }

  return post;
};
