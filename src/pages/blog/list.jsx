import '../../App.css';
import Monitor from '../../layout/Monitor';
import SerialContentList from '../../components/serial-content/serial-content-list';

const blogList = [
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
    link: 'codigo-como-hobbie',
    title: 'Código como hobbie',
    date: '08/10/2025',
    tags: [
      'Estilo de vida',
      'Desenvolvimento pessoal',
    ],
  },
];

function BlogList() {
  return (
    <Monitor>
      <div className="media-content">
        <h2>Blog</h2>
        <SerialContentList contentList={blogList} />
      </div>
    </Monitor>
  )
};

export default BlogList;
