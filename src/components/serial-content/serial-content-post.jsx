import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

import SerialContentDetails from '../../components/serial-content/serial-content-details';

import { getPost } from '../../contents/blog';

function SerialCotentPost({ postLink }) {
  const [post, setPost] = useState({
    title: '',
    date: '',
    tags: [],
    content: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const postObject = getPost(postLink);

    if (! postObject) {
      navigate('/not-found')
      return;
    }

    setPost(postObject);
  }, [postLink, navigate]);

  return (
    <article>
      <h2>{post.title}</h2>
      <SerialContentDetails post={post} />

      <div className="serial-content-content">
        <Markdown></Markdown>
      </div>
    </article>
  );
};

export default SerialCotentPost;
