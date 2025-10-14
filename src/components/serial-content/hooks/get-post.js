import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPost } from '../../../content/blog';

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
