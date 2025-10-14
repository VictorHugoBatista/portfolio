import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { blog } from '../../../content/blog';

// @todo get post from other content types (project, for example).
const getPost = (link) => {
  const [ post ] = blog
    .filter(post => post.link === link);
  if (! post) {
    return null;
  }

  return post;
};

const useGetPost = (postLink) => {
  const [post, setPost] = useState({
    title: '',
    date: '',
    tags: [],
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

  return post;
};

export default useGetPost;
