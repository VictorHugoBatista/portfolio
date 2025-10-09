import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';

import Monitor from '../../layout/Monitor';
import SerialContentDetails from '../../components/serial-content/serial-content-details';

import { getPost } from '../../contents/blog';

function BlogPost() {
  const { link } = useParams();
  const [post, setPost] = useState({
    title: '',
    date: '',
    tags: [],
    content: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const postObject = getPost(link);

    if (! postObject) {
      navigate('/not-found')
      return;
    }

    setPost(postObject);
  }, [link, navigate])

  return (
    <Monitor>
      <article>
        <h2>{post.title}</h2>
        <SerialContentDetails post={post} />

        <div className="serial-content-content">
          <Markdown>
            {post.content}
          </Markdown>
        </div>
      </article>
    </Monitor>
  );
}

export default BlogPost;
