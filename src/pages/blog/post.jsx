import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Monitor from '../../layout/Monitor';
import SerialContentDetails from '../../components/serial-content/serial-content-details';

import { getPost } from '../../contents/blog';

function BlogPost() {
  const { link } = useParams();
  const [post, setPost] = useState({
    title: '',
    date: '',
    tags: [],
  });

  useEffect(() => {
    const postObject = getPost(link);

    if (! postObject) {
      return;
    }

    setPost(postObject);
  }, [link])

  return (
    <Monitor>
      <h2>{post.title}</h2>
      <SerialContentDetails post={post} />

      conteudo
    </Monitor>
  );
}

export default BlogPost;
